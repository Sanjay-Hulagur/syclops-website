"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { track } from "@/lib/analytics";
import {
  ADMIN_SIGN_IN_URL,
  isGmail,
  SIGNUP_DRAFT_KEY,
  SIGNUP_HANDOFF_KEY,
  SIGNUP_MESSAGES,
  type SignupDraft,
  type SignupErrorCode,
  type SignupHandoff,
} from "@/lib/signup";
import { supportEmail } from "@/lib/site";

const RESEND_AFTER_MS = 60_000;
/** The backend may still be creating the workspace; a resend before then is refused. */
const PENDING_RESEND_AFTER_MS = 120_000;

const GMAIL_SEARCH =
  "https://mail.google.com/mail/u/0/#search/in%3Aanywhere+%22Syclops+admin+password%22";

type ResendState =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "pending" }
  | { kind: "error"; code: SignupErrorCode };

const subscribeNothing = () => () => {};

function readStoredHandoff(): string | null | undefined {
  try {
    return sessionStorage.getItem(SIGNUP_HANDOFF_KEY);
  } catch {
    return null;
  }
}

/** Unknown until the browser has hydrated, so the server never redirects. */
function noStoredHandoff(): string | null | undefined {
  return undefined;
}

function parseHandoff(raw: string | null | undefined): SignupHandoff | null {
  if (!raw) return null;
  try {
    const value = JSON.parse(raw) as SignupHandoff;
    return value && typeof value.email === "string" && value.email ? value : null;
  } catch {
    return null;
  }
}

function resendAt(handoff: SignupHandoff) {
  return handoff.at + (handoff.pending ? PENDING_RESEND_AFTER_MS : RESEND_AFTER_MS);
}

function nextSteps(handoff: SignupHandoff) {
  if (handoff.workflow === "doctor-referral" || handoff.industry === "healthcare") {
    return [
      "Set your password.",
      "Add your first doctor.",
      "Record your first referral.",
    ];
  }
  if (handoff.workflow === "field-visits") {
    return [
      "Set your password.",
      "Invite your field team.",
      "Record your first visit.",
    ];
  }
  return [
    "Set your password.",
    "Add your team and the people who refer to you.",
    "Record your first referral or visit.",
  ];
}

export function CheckEmail() {
  const router = useRouter();
  const stored = useSyncExternalStore(subscribeNothing, readStoredHandoff, noStoredHandoff);
  const [updated, setUpdated] = useState<SignupHandoff | null>(null);
  const [retryAt, setRetryAt] = useState(0);
  const [now, setNow] = useState<number | null>(null);
  const [resend, setResend] = useState<ResendState>({ kind: "idle" });

  const handoff = updated ?? parseHandoff(stored);
  const missing = stored !== undefined && !handoff;
  const readyAt = handoff ? Math.max(resendAt(handoff), retryAt) : 0;
  const wait = now === null ? null : Math.max(0, Math.ceil((readyAt - now) / 1000));

  useEffect(() => {
    if (missing) router.replace("/start");
  }, [missing, router]);

  const ready = Boolean(handoff);
  useEffect(() => {
    if (ready) window.scrollTo(0, 0);
  }, [ready]);

  useEffect(() => {
    if (!readyAt) return;
    let timer = 0;
    const tick = () => {
      const time = Date.now();
      setNow(time);
      if (time >= readyAt) window.clearInterval(timer);
    };
    const first = window.setTimeout(tick, 0);
    timer = window.setInterval(tick, 1000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(timer);
    };
  }, [readyAt]);

  if (!handoff) return null;

  const pending = handoff.pending || resend.kind === "pending";
  const steps = nextSteps(handoff);
  const from =
    handoff.from?.startsWith("/") && !handoff.from.startsWith("//") && handoff.from !== "/start/created"
      ? handoff.from
      : "/start";

  async function onResend() {
    if (!handoff || wait === null || wait > 0 || resend.kind === "sending") return;
    setResend({ kind: "sending" });
    let code: SignupErrorCode | null = null;
    let pendingAgain = false;
    try {
      const response = await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: handoff.email,
          workspace: handoff.workspace,
          workflow: handoff.workflow,
          industry: handoff.industry,
          plan: handoff.plan,
          cta: handoff.cta,
        }),
      });
      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        pending?: boolean;
        code?: SignupErrorCode;
      } | null;
      if (response.ok && payload?.ok) {
        pendingAgain = Boolean(payload.pending);
      } else {
        code = payload?.code ?? "server";
      }
    } catch {
      code = "server";
    }

    track("signup_resend", {
      result: code ?? (pendingAgain ? "pending" : "sent"),
      workflow: handoff.workflow,
    });

    if (code) {
      setResend({ kind: "error", code });
      setRetryAt(code === "existing" ? 0 : Date.now() + 30_000);
      return;
    }
    const next = { ...handoff, pending: pendingAgain, at: Date.now() };
    try {
      sessionStorage.setItem(SIGNUP_HANDOFF_KEY, JSON.stringify(next));
    } catch {
      // The countdown below still applies for this page view.
    }
    setUpdated(next);
    setResend({ kind: pendingAgain ? "pending" : "sent" });
  }

  function changeEmail() {
    if (!handoff) return;
    const draft: SignupDraft = {
      email: handoff.email,
      workspace: handoff.workspace,
      step: "email",
      focus: true,
    };
    try {
      sessionStorage.setItem(SIGNUP_DRAFT_KEY, JSON.stringify(draft));
      sessionStorage.removeItem(SIGNUP_HANDOFF_KEY);
    } catch {
      // The form opens empty instead.
    }
    router.push(from);
  }

  return (
    <div>
      <h1 className="display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        Check your email
      </h1>
      {pending ? (
        <p className="mt-3 text-base leading-7 text-muted">
          We’re still setting up{" "}
          <span className="font-medium text-ink">{handoff.workspace}</span>. Check
          your email in 2 minutes. The link goes to{" "}
          <span className="wrap-anywhere font-medium text-ink">{handoff.email}</span>.
        </p>
      ) : (
        <p className="mt-3 text-base leading-7 text-muted">
          We sent a link to{" "}
          <span className="wrap-anywhere font-medium text-ink">{handoff.email}</span>.
          It arrives within a minute.
        </p>
      )}

      <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
        {isGmail(handoff.email) ? (
          <a
            href={GMAIL_SEARCH}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full bg-iris-dark px-6 text-base font-medium text-cream transition hover:bg-iris-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Open Gmail
          </a>
        ) : null}
        <button
          type="button"
          onClick={onResend}
          disabled={wait === null || wait > 0 || resend.kind === "sending"}
          className="flex h-12 items-center justify-center rounded-full border border-line bg-cream px-6 text-base font-medium text-ink transition hover:border-ink disabled:cursor-not-allowed disabled:text-muted disabled:hover:border-line"
        >
          {resend.kind === "sending"
            ? "Sending…"
            : wait
              ? `Resend link in ${wait}s`
              : "Resend link"}
        </button>
      </div>

      <div aria-live="polite" className="mt-3 min-h-6 text-sm leading-6">
        {resend.kind === "sent" ? (
          <p className="text-money">We sent a new link. Use the newest email.</p>
        ) : null}
        {resend.kind === "pending" ? (
          <p className="text-muted">{SIGNUP_MESSAGES.pending}</p>
        ) : null}
        {resend.kind === "error" && resend.code === "existing" ? (
          <p className="text-leak">
            {SIGNUP_MESSAGES.existing}.{" "}
            <a href={ADMIN_SIGN_IN_URL} className="font-medium text-ink underline">
              Log in
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${supportEmail}?subject=${encodeURIComponent("Reset my Syclops password")}`}
              className="font-medium text-ink underline"
            >
              email us to reset your password
            </a>
            .
          </p>
        ) : null}
        {resend.kind === "error" && resend.code !== "existing" ? (
          <p className="text-leak">
            {resend.code === "busy" ? SIGNUP_MESSAGES.busy : "We couldn’t send it. Try again in a minute."}
          </p>
        ) : null}
      </div>

      <p className="mt-2 text-sm text-muted">
        Wrong email?{" "}
        <button
          type="button"
          onClick={changeEmail}
          className="font-medium text-ink underline underline-offset-2"
        >
          Change it
        </button>
        .
      </p>

      <div className="mt-8 rounded-2xl border border-line bg-cream p-5">
        <h2 className="text-base font-semibold">Then, in the admin console</h2>
        <ol className="mt-3 space-y-2 text-sm leading-6 text-muted">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-3">
              <span className="display font-semibold text-ink">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-6 text-sm leading-6 text-muted">
        The link works for 72 hours. Nothing after 5 minutes? Check your spam and
        promotions folders, then resend. Still nothing? Email{" "}
        <a href={`mailto:${supportEmail}`} className="font-medium text-ink underline underline-offset-2">
          {supportEmail}
        </a>
        .
      </p>
      <p className="mt-3 text-sm text-muted">
        <Link href="/" className="underline underline-offset-2">
          Back to the homepage
        </Link>
      </p>
    </div>
  );
}
