/**
 * Shared by the signup form, the signup API, the "check your email" page,
 * and every page that links to /start.
 */

export const ADMIN_SIGN_IN_URL = "https://admin.syclops.in/auth/signin";
export const FIELD_APP_URL = "https://app.syclops.in/";
export const SIGNUP_CREATED_PATH = "/start/created";

export const SIGNUP_WORKFLOWS = [
  "doctor-referral",
  "partner-referrals",
  "field-visits",
  "subscriptions",
] as const;

export type SignupWorkflow = (typeof SIGNUP_WORKFLOWS)[number];

export function isSignupWorkflow(value: unknown): value is SignupWorkflow {
  return (
    typeof value === "string" &&
    (SIGNUP_WORKFLOWS as readonly string[]).includes(value)
  );
}

export const SIGNUP_PLANS = ["team", "growth", "scale"] as const;

export type SignupPlan = (typeof SIGNUP_PLANS)[number];

export function isSignupPlan(value: unknown): value is SignupPlan {
  return (
    typeof value === "string" &&
    (SIGNUP_PLANS as readonly string[]).includes(value)
  );
}

export function isCtaId(value: unknown): value is string {
  return typeof value === "string" && /^[a-z0-9_-]{1,60}$/i.test(value);
}

export type SignupErrorCode =
  | "invalid_email"
  | "invalid_workspace"
  | "existing"
  | "busy"
  | "server";

export type SignupSuccess = {
  ok: true;
  /** The backend was still creating the workspace when the site stopped waiting. */
  pending: boolean;
  /** This email signed up before, so the backend only re-sent the link. */
  repeat: boolean;
  transactionId: string;
};

export type SignupFailure = {
  error: string;
  code: SignupErrorCode;
};

export const SIGNUP_MESSAGES = {
  invalid_email: "Enter a valid email address",
  invalid_workspace: "Enter your business name",
  existing: "This email already has a workspace",
  busy: "A lot of workspaces are being created right now. Wait a minute, then try again. Your details are still here.",
  server: "We couldn’t finish. Your details are still here. Try again.",
  pending: "We’re still setting up your workspace. Check your email in 2 minutes.",
} as const;

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const EMAIL_MAX = 254;
export const WORKSPACE_MIN = 2;
export const WORKSPACE_MAX = 120;

export function isValidEmail(value: string) {
  return value.length <= EMAIL_MAX && EMAIL_PATTERN.test(value);
}

const FREE_MAIL = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.in",
  "yahoo.in",
  "ymail.com",
  "rediffmail.com",
  "outlook.com",
  "outlook.in",
  "hotmail.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "zohomail.in",
  "mail.com",
  "gmx.com",
]);

const TWO_PART_SUFFIXES = new Set([
  "co.in",
  "org.in",
  "net.in",
  "firm.in",
  "gen.in",
  "ind.in",
  "ac.in",
  "edu.in",
  "res.in",
  "gov.in",
  "co.uk",
  "org.uk",
  "com.au",
  "com.sg",
  "co.ae",
]);

export function emailDomain(email: string) {
  return email.split("@")[1]?.trim().toLowerCase() ?? "";
}

export function isGmail(email: string) {
  const domain = emailDomain(email);
  return domain === "gmail.com" || domain === "googlemail.com";
}

/** "ops@aski-hospitals.co.in" → "Aski Hospitals". Free-mail addresses give "". */
export function businessNameFromEmail(email: string) {
  const domain = emailDomain(email);
  if (!domain || FREE_MAIL.has(domain)) return "";
  const parts = domain.split(".").filter(Boolean);
  if (parts.length < 2) return "";
  const lastTwo = parts.slice(-2).join(".");
  const label = TWO_PART_SUFFIXES.has(lastTwo) && parts.length >= 3
    ? parts[parts.length - 3]
    : parts[parts.length - 2];
  return label
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .slice(0, WORKSPACE_MAX);
}

/** What the signup form leaves for the "check your email" page. */
export type SignupHandoff = {
  email: string;
  workspace: string;
  pending: boolean;
  workflow?: SignupWorkflow;
  industry?: string;
  plan?: SignupPlan;
  cta?: string;
  /** The page the form was on, for "Wrong email? Change it." */
  from: string;
  at: number;
};

export const SIGNUP_HANDOFF_KEY = "syclops-start-created";
export const SIGNUP_DRAFT_KEY = "syclops-signup-draft";

export type SignupDraft = {
  email: string;
  workspace: string;
  step: "email" | "business";
  /** The business name was filled in from the email domain, so a new email replaces it. */
  guessed?: boolean;
  /** Set by "Wrong email? Change it." so the form opens on the email field. */
  focus?: boolean;
};
