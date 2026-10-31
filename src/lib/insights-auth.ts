import { createHash, createHmac, timingSafeEqual } from "crypto";

export const INSIGHTS_COOKIE = "insights_session";
const WEEK = 60 * 60 * 24 * 7;

export function insightsReady() {
  return Boolean(process.env.ANALYTICS_PASSWORD && process.env.ANALYTICS_SECRET);
}

export function passwordMatches(input: string) {
  const expected = process.env.ANALYTICS_PASSWORD;
  if (!expected) return false;
  const left = createHash("sha256").update(input).digest();
  const right = createHash("sha256").update(expected).digest();
  return timingSafeEqual(left, right);
}

export function signInsightsSession() {
  const secret = process.env.ANALYTICS_SECRET;
  if (!secret) throw new Error("Missing ANALYTICS_SECRET");
  const payload = Buffer.from(
    JSON.stringify({ exp: Date.now() + WEEK * 1000 }),
  ).toString("base64url");
  const signature = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export function insightsSessionValid(token: string | undefined) {
  const secret = process.env.ANALYTICS_SECRET;
  if (!secret || !token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expected = createHmac("sha256", secret).update(payload).digest("base64url");
  const left = Buffer.from(signature);
  const right = Buffer.from(expected);
  if (left.length !== right.length || !timingSafeEqual(left, right)) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString()) as {
      exp?: unknown;
    };
    return typeof data.exp === "number" && data.exp > Date.now();
  } catch {
    return false;
  }
}

export function insightsCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/insights",
    maxAge: WEEK,
  };
}
