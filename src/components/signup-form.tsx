"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FormEvent,
  type ReactNode,
} from "react";
import { track, trackWorkspaceConversion } from "@/lib/analytics";
import { readAttribution } from "@/lib/attribution";
import { formatInr, publicPlans } from "@/lib/plans";
import {
  ADMIN_SIGN_IN_URL,
  businessNameFromEmail,
  isCtaId,
  isSignupPlan,
  isSignupWorkflow,
  isValidEmail,
  SIGNUP_CREATED_PATH,
  SIGNUP_DRAFT_KEY,
  SIGNUP_HANDOFF_KEY,
  SIGNUP_MESSAGES,
  WORKSPACE_MAX,
  WORKSPACE_MIN,
  type SignupDraft,
  type SignupErrorCode,
  type SignupHandoff,
  type SignupPlan,
  type SignupSuccess,
  type SignupWorkflow,
} from "@/lib/signup";
import { supportEmail } from "@/lib/site";

const CLIENT_WAIT_MS = 30_000;

type Step = "email" | "business";

type Context = {
  workflow?: SignupWorkflow;
  industry?: string;
  plan?: SignupPlan;
  cta?: string;
};

type FormError = { code: SignupErrorCode; reason: string };

const REASON: Record<SignupErrorCode, string> = {
  invalid_email: "invalid",
  invalid_workspace: "invalid",
  existing: "existing",
  busy: "busy",
  server: "server",
};

const subscribeNothing = () => () => {};

function readStoredDraft(): string | null | undefined {
  try {
    return sessionStorage.getItem(SIGNUP_DRAFT_KEY);
  } catch {
    return null;
  }
}

/** Unknown until the browser has hydrated; the server renders an empty form. */
function noStoredDraft(): string | null | undefined {
  return undefined;
}

function parseDraft(raw: string | null | undefined): SignupDraft | null {
  if (!raw) return null;
  try {
    const draft = JSON.parse(raw) as SignupDraft;
    return typeof draft.email === "string" ? draft : null;
  } catch {
    return null;
  }
}

function readSearch() {
  return window.location.search;
}

function noSearch() {
  return "";
}

function contextFromSearch(search: string): Context {
  const query = new URLSearchParams(search);
  const workflow = query.get("workflow");
  const industry = query.get("industry");
  const plan = query.get("plan");
  const cta = query.get("cta");
  return {
    workflow: isSignupWorkflow(workflow) ? workflow : undefined,
    industry: industry && /^[a-z]{2,30}$/.test(industry) ? industry : undefined,
    plan: isSignupPlan(plan) ? plan : undefined,
    cta: isCtaId(cta) ? cta : undefined,
  };
}

export function SignupForm({
  id = "signup",
  location,
  trialDays,
  workflow,
  industry,
  readUrl = false,
  showLogin = true,
}: {
  /** Element id of the form. The email field is `${id}-email`. */
  id?: string;
  /** Where the form sits, sent as cta_location: "start", "lp_doctor_referral". */
  location: string;
  trialDays: number;
  workflow?: SignupWorkflow;
  industry?: string;
  /** Take workflow, industry, plan and cta from the page URL (the /start page). */
  readUrl?: boolean;
  showLogin?: boolean;
}) {
  const router = useRouter();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [workspace, setWorkspace] = useState("");
  const [guessed, setGuessed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<FormError | null>(null);
  const [restored, setRestored] = useState(false);
  const [focusRestored, setFocusRestored] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const workspaceRef = useRef<HTMLInputElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const started = useRef(false);
  const focusNext = useRef<Step | null>(null);

  const search = useSyncExternalStore(subscribeNothing, readSearch, noSearch);
  const storedDraft = useSyncExternalStore(subscribeNothing, readStoredDraft, noStoredDraft);

  if (!restored && storedDraft !== undefined) {
    setRestored(true);
    const draft = parseDraft(storedDraft);
    if (draft) {
      setEmail(draft.email);
      setWorkspace(draft.workspace || "");
      setGuessed(Boolean(draft.guessed));
      setStep(draft.step === "business" && draft.email && !draft.focus ? "business" : "email");
      if (draft.focus) setFocusRestored(true);
    }
  }

  const fromUrl: Context = readUrl ? contextFromSearch(search) : {};
  const context: Context = {
    workflow: workflow ?? fromUrl.workflow,
    industry: industry ?? fromUrl.industry,
    plan: fromUrl.plan,
    cta: fromUrl.cta,
  };

  const emailId = `${id}-email`;
  const workspaceId = `${id}-business`;
  const errorId = `${id}-error`;
  const plan = context.plan
    ? publicPlans.find((item) => item.name.toLowerCase() === context.plan)
    : undefined;

  useEffect(() => {
    if (!focusRestored) return;
    emailRef.current?.focus();
    emailRef.current?.select();
  }, [focusRestored]);

  useEffect(() => {
    if (!restored) return;
    const draft: SignupDraft = { email, workspace, step, guessed };
    try {
      if (email || workspace) {
        sessionStorage.setItem(SIGNUP_DRAFT_KEY, JSON.stringify(draft));
      }
    } catch {
      // Storage can be full or blocked; the form still works.
    }
  }, [restored, email, workspace, step, guessed]);

  useEffect(() => {
    const target = focusNext.current;
    if (!target) return;
    focusNext.current = null;
    const field = target === "email" ? emailRef.current : workspaceRef.current;
    field?.focus();
    if (target === "email") field?.select();
  }, [step]);

  function markStarted() {
    if (started.current) return;
    started.current = true;
    track("signup_start", {
      form_name: "start",
      cta_location: location,
      workflow: context.workflow,
      plan: context.plan,
    });
  }

  function showError(code: SignupErrorCode, atStep: 1 | 2, reason = REASON[code]) {
    setError({ code, reason });
    track("form_error", {
      form_name: "start",
      reason,
      step: atStep,
      cta_location: location,
      workflow: context.workflow,
    });
  }

  function submitEmail() {
    const value = email.trim();
    if (value) markStarted();
    if (!isValidEmail(value.toLowerCase())) {
      showError("invalid_email", 1);
      emailRef.current?.focus();
      return;
    }
    setError(null);
    if (!workspace.trim() || guessed) {
      const guess = businessNameFromEmail(value);
      setWorkspace(guess);
      setGuessed(Boolean(guess));
    }
    focusNext.current = "business";
    setStep("business");
  }

  function changeEmail() {
    setError(null);
    focusNext.current = "email";
    setStep("email");
  }

  function finish(result: SignupSuccess, name: string) {
    const handoff: SignupHandoff = {
      email: email.trim().toLowerCase(),
      workspace: name,
      pending: result.pending,
      workflow: context.workflow,
      industry: context.industry,
      plan: context.plan,
      cta: context.cta,
      from: window.location.pathname,
      at: Date.now(),
    };
    try {
      sessionStorage.setItem(SIGNUP_HANDOFF_KEY, JSON.stringify(handoff));
      sessionStorage.removeItem(SIGNUP_DRAFT_KEY);
    } catch {
      // The next page falls back to /start without the handoff.
    }

    if (result.pending) {
      track("form_error", {
        form_name: "start",
        reason: "timeout",
        step: 2,
        cta_location: location,
        workflow: context.workflow,
      });
    } else if (!result.repeat && result.transactionId) {
      track("sign_up", {
        method: "email",
        form_name: "start",
        cta_location: location,
        workflow: context.workflow,
        plan: context.plan,
        transaction_id: result.transactionId,
      });
      trackWorkspaceConversion({
        email: handoff.email,
        transactionId: result.transactionId,
        industry: context.industry,
        workflow: context.workflow,
      });
    }
    router.push(SIGNUP_CREATED_PATH);
  }

  async function submitWorkspace() {
    if (submitting) return;
    const name = workspace.replace(/\s+/g, " ").trim();
    if (name.length < WORKSPACE_MIN || name.length > WORKSPACE_MAX) {
      showError("invalid_workspace", 2);
      workspaceRef.current?.focus();
      return;
    }

    setSubmitting(true);
    setError(null);
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), CLIENT_WAIT_MS);
    let response: Response;
    try {
      response = await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          workspace: name,
          workflow: context.workflow,
          industry: context.industry,
          plan: context.plan,
          cta: context.cta,
          attribution: readAttribution() ?? undefined,
          sy_hp: honeypotRef.current?.value || undefined,
        }),
        signal: controller.signal,
      });
    } catch {
      window.clearTimeout(timer);
      if (controller.signal.aborted) {
        finish({ ok: true, pending: true, repeat: false, transactionId: "" }, name);
        return;
      }
      showError("server", 2, "network");
      setSubmitting(false);
      return;
    }
    window.clearTimeout(timer);

    const payload = (await response.json().catch(() => null)) as
      | (Partial<SignupSuccess> & { code?: SignupErrorCode })
      | null;
    if (response.ok && payload?.ok) {
      finish(
        {
          ok: true,
          pending: Boolean(payload.pending),
          repeat: Boolean(payload.repeat),
          transactionId: payload.transactionId ?? "",
        },
        name,
      );
      return;
    }

    const code: SignupErrorCode =
      payload?.code && payload.code in REASON ? payload.code : "server";
    setSubmitting(false);
    if (code === "invalid_email") {
      showError(code, 2);
      focusNext.current = "email";
      setStep("email");
      return;
    }
    showError(code, 2);
    if (code === "invalid_workspace") workspaceRef.current?.focus();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === "email") submitEmail();
    else void submitWorkspace();
  }

  const inputClass =
    "mt-1.5 block h-12 w-full rounded-lg border bg-paper px-3 text-base text-ink outline-none transition focus:border-iris-dark focus:ring-2 focus:ring-iris/40";
  const buttonClass =
    "mt-3 flex h-12 w-full items-center justify-center rounded-full bg-iris-dark px-5 text-base font-medium text-cream transition hover:bg-iris-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:cursor-wait disabled:opacity-80";

  const errorBlock = error ? (
    error.code === "existing" ? (
      <div
        id={errorId}
        role="alert"
        className="mt-2 rounded-lg border border-leak/30 bg-leak/5 px-3 py-2.5 text-sm"
      >
        <p className="font-medium text-leak">{SIGNUP_MESSAGES.existing}</p>
        <p className="mt-1 leading-6 text-muted">
          <a href={ADMIN_SIGN_IN_URL} className="font-medium text-ink underline">
            Log in
          </a>
          {" · "}
          <a
            href={`mailto:${supportEmail}?subject=${encodeURIComponent("Reset my Syclops password")}`}
            className="font-medium text-ink underline"
          >
            Reset your password by email
          </a>
        </p>
      </div>
    ) : (
      <p id={errorId} role="alert" className="mt-2 text-sm leading-6 text-leak">
        {SIGNUP_MESSAGES[error.code]}
      </p>
    )
  ) : null;

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      noValidate
      aria-busy={submitting}
      className="relative rounded-2xl border border-line bg-cream p-5 sm:p-6"
    >
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input ref={honeypotRef} name="sy_hp" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {step === "email" ? (
        <>
          <label htmlFor={emailId} className="block text-sm font-medium text-ink">
            Email address
          </label>
          <input
            ref={emailRef}
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            enterKeyHint="next"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (event.target.value) markStarted();
              if (error) setError(null);
            }}
            aria-invalid={error?.code === "invalid_email" || undefined}
            aria-describedby={error ? errorId : undefined}
            className={`${inputClass} ${error?.code === "invalid_email" ? "border-leak" : "border-line"}`}
          />
          {errorBlock}
          <button
            type="submit"
            data-cta-id={`${location}_email`}
            data-cta-location={location}
            className={buttonClass}
          >
            Start my {trialDays}-day free trial
          </button>
          <p className="mt-2 text-center text-sm text-muted">
            No credit card. No sales call needed.
          </p>
        </>
      ) : (
        <>
          <p className="flex flex-wrap items-baseline gap-x-2 text-sm text-muted">
            <span className="min-w-0 wrap-anywhere text-ink">{email.trim()}</span>
            <button
              type="button"
              onClick={changeEmail}
              disabled={submitting}
              className="font-medium text-iris-dark underline underline-offset-2"
            >
              Change
            </button>
          </p>
          <label htmlFor={workspaceId} className="mt-3 block text-sm font-medium text-ink">
            What is your business called?
          </label>
          <input
            ref={workspaceRef}
            id={workspaceId}
            name="organization"
            autoComplete="organization"
            enterKeyHint="go"
            maxLength={WORKSPACE_MAX}
            required
            value={workspace}
            onChange={(event) => {
              setWorkspace(event.target.value);
              setGuessed(false);
              if (error) setError(null);
            }}
            aria-invalid={error?.code === "invalid_workspace" || undefined}
            aria-describedby={error ? errorId : undefined}
            className={`${inputClass} ${error?.code === "invalid_workspace" ? "border-leak" : "border-line"}`}
          />
          {errorBlock}
          <button
            type="submit"
            disabled={submitting}
            data-cta-id={`${location}_create`}
            data-cta-location={location}
            className={buttonClass}
          >
            {submitting ? "Setting up your workspace…" : "Create my workspace"}
          </button>
          <p className="mt-2 text-center text-sm text-muted">
            We’ll email you a link to set your password.
          </p>
        </>
      )}

      {plan ? (
        <p className="mt-3 rounded-lg bg-quiet px-3 py-2 text-sm text-muted">
          <span className="font-medium text-ink">{plan.name} plan</span> ·{" "}
          {formatInr(plan.priceInr)} per field seat a month after the trial
        </p>
      ) : null}

      {showLogin ? (
        <p className="mt-4 border-t border-line pt-3 text-center text-sm text-muted">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-ink underline underline-offset-2">
            Log in
          </Link>
          .
        </p>
      ) : null}
    </form>
  );
}

/** Scrolls back to the signup form and puts the cursor in its first field. */
export function FocusSignupButton({
  target = "signup",
  location,
  children,
}: {
  target?: string;
  location: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      data-cta-id={`${location}_bottom`}
      data-cta-location={location}
      onClick={() => {
        const form = document.getElementById(target);
        if (!form) return;
        const field = form.querySelector<HTMLInputElement>(
          "input[name='email'], input[name='organization']",
        );
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        form.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
        field?.focus({ preventScroll: true });
      }}
      className="flex h-12 w-full items-center justify-center rounded-full bg-iris-dark px-6 text-base font-medium text-cream transition hover:bg-iris-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:w-auto"
    >
      {children}
    </button>
  );
}
