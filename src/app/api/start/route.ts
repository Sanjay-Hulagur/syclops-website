import { createHmac } from "node:crypto";
import { after, NextResponse } from "next/server";
import { ATTRIBUTION_PARAMS, type AttributionParam } from "@/lib/attribution";
import { apiError } from "@/lib/api-error";
import { readIdsFromCookie } from "@/lib/analytics-store";
import { isStartFormIndustry } from "@/lib/industries";
import { sendWorkspaceSignupEmail } from "@/lib/mail";
import {
  isCtaId,
  isSignupPlan,
  isSignupWorkflow,
  isValidEmail,
  SIGNUP_MESSAGES,
  WORKSPACE_MAX,
  WORKSPACE_MIN,
  type SignupErrorCode,
  type SignupSuccess,
} from "@/lib/signup";
import {
  hasEarlierSignup,
  saveWorkspaceRequest,
  type WorkspaceRequestOutcome,
} from "@/lib/workspace-requests";

const PATH = "/api/start";

/**
 * The backend creates the tenant database before it answers, and Netlify
 * stops a function after 60 seconds. Past this wait the backend keeps going
 * and still emails the link, so the visitor is told to check their email.
 */
const BACKEND_WAIT_MS = 20_000;
const REPEAT_LOOKUP_MS = 4_000;

type Payload = {
  email?: unknown;
  workspace?: unknown;
  industry?: unknown;
  workflow?: unknown;
  plan?: unknown;
  cta?: unknown;
  attribution?: unknown;
  sy_hp?: unknown;
};

function text(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

function fail(status: number, code: SignupErrorCode) {
  return NextResponse.json({ error: SIGNUP_MESSAGES[code], code }, { status });
}

function readAttribution(value: unknown) {
  const found: Partial<Record<AttributionParam | "landing_path", string>> = {};
  if (!value || typeof value !== "object") return found;
  const source = value as Record<string, unknown>;
  for (const name of ATTRIBUTION_PARAMS) {
    const item = text(source[name], 200);
    if (item) found[name] = item;
  }
  const landing = text(source.landing_path, 300);
  if (landing?.startsWith("/")) found.landing_path = landing;
  return found;
}

/** One ID per email, so Google Ads counts a workspace once however often it fires. */
function transactionIdFor(email: string, secret: string) {
  return `ws_${createHmac("sha256", secret).update(email).digest("hex").slice(0, 24)}`;
}

function sourceLabel(attribution: ReturnType<typeof readAttribution>) {
  const campaign = [
    attribution.utm_source,
    attribution.utm_medium,
    attribution.utm_campaign,
  ]
    .filter(Boolean)
    .join(" / ");
  const click = attribution.gclid || attribution.gbraid || attribution.wbraid;
  if (click) return campaign ? `Google Ads click · ${campaign}` : "Google Ads click";
  return campaign || null;
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T | null> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  return Promise.race([
    promise,
    new Promise<null>((resolve) => {
      timer = setTimeout(() => resolve(null), ms);
    }),
  ]).finally(() => clearTimeout(timer));
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return fail(400, "server");
  }

  const email = text(body.email, 320)?.toLowerCase() ?? null;
  const workspace = text(body.workspace, WORKSPACE_MAX);

  if (!email || !isValidEmail(email)) return fail(400, "invalid_email");
  if (!workspace || workspace.length < WORKSPACE_MIN) {
    return fail(400, "invalid_workspace");
  }

  const workflow = isSignupWorkflow(body.workflow) ? body.workflow : null;
  const askedIndustry = text(body.industry, 50);
  const industry =
    askedIndustry && isStartFormIndustry(askedIndustry)
      ? askedIndustry
      : workflow === "doctor-referral"
        ? "healthcare"
        : "";
  const plan = isSignupPlan(body.plan) ? body.plan : null;
  const cta = isCtaId(body.cta) ? body.cta : null;
  const attribution = readAttribution(body.attribution);

  const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";
  const secret = process.env.WORKSPACE_SIGNUP_SECRET?.trim() ?? "";
  if (!apiBase || !secret) {
    return apiError(PATH, 500, SIGNUP_MESSAGES.server, "server");
  }

  const transactionId = transactionIdFor(email, secret);

  // Bots fill every field. Answer like a repeat so nothing is created or counted.
  if (typeof body.sy_hp === "string" && body.sy_hp.trim()) {
    const ignored: SignupSuccess = {
      ok: true,
      pending: false,
      repeat: true,
      transactionId,
    };
    return NextResponse.json(ignored);
  }

  const repeatLookup = withTimeout(
    hasEarlierSignup(email).catch((error) => {
      console.error("Could not check for an earlier signup", error);
      return null;
    }),
    REPEAT_LOOKUP_MS,
  );

  let provision: Response | null = null;
  let pending = false;
  try {
    provision = await fetch(`${apiBase}/api/v1/public/workspace-signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-workspace-signup-secret": secret,
      },
      body: JSON.stringify({ email, workspace }),
      signal: AbortSignal.timeout(BACKEND_WAIT_MS),
    });
  } catch (error) {
    if ((error as { name?: string })?.name !== "TimeoutError") {
      return apiError(PATH, 502, SIGNUP_MESSAGES.server, "server");
    }
    pending = true;
  }

  if (provision && !provision.ok) {
    if (provision.status === 409) return fail(409, "existing");
    if (provision.status === 429) return fail(429, "busy");
    return apiError(
      PATH,
      provision.status >= 500 ? 502 : 500,
      SIGNUP_MESSAGES.server,
      "server",
    );
  }

  const repeat = (await repeatLookup) === true;
  const outcome: WorkspaceRequestOutcome = pending
    ? "pending"
    : repeat
      ? "resent"
      : "created";
  const { visitorId, sessionId } = readIdsFromCookie(
    request.headers.get("cookie"),
  );

  after(async () => {
    const results = await Promise.allSettled([
      saveWorkspaceRequest({
        email,
        workspace,
        industry,
        signupId: transactionId,
        outcome,
        workflow,
        plan,
        cta,
        visitorId,
        sessionId,
        landingPath: attribution.landing_path ?? null,
        gclid: attribution.gclid ?? null,
        gbraid: attribution.gbraid ?? null,
        wbraid: attribution.wbraid ?? null,
        utmSource: attribution.utm_source ?? null,
        utmMedium: attribution.utm_medium ?? null,
        utmCampaign: attribution.utm_campaign ?? null,
        utmTerm: attribution.utm_term ?? null,
        utmContent: attribution.utm_content ?? null,
      }),
      sendWorkspaceSignupEmail({
        email,
        workspace,
        industry,
        outcome,
        workflow,
        plan,
        source: sourceLabel(attribution),
      }),
    ]);
    const [saved, mailed] = results;
    if (saved.status === "rejected") {
      console.error("Signup accepted but the request log was not saved", saved.reason);
    }
    if (mailed.status === "rejected") {
      console.error("Signup accepted but the notice email was not sent", mailed.reason);
    }
  });

  const result: SignupSuccess = { ok: true, pending, repeat, transactionId };
  return NextResponse.json(result, { status: pending ? 202 : 200 });
}
