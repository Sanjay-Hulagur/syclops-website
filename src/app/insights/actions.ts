"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  INSIGHTS_COOKIE,
  insightsCookieOptions,
  insightsReady,
  passwordMatches,
  signInsightsSession,
} from "@/lib/insights-auth";

export async function loginInsights(
  _previous: { error?: string } | null,
  formData: FormData,
) {
  if (!insightsReady()) return { error: "That did not work." };
  const password = String(formData.get("password") ?? "");
  if (!passwordMatches(password)) return { error: "That did not work." };

  const jar = await cookies();
  jar.set(INSIGHTS_COOKIE, signInsightsSession(), insightsCookieOptions());
  redirect("/insights");
}

export async function logoutInsights() {
  const jar = await cookies();
  jar.set(INSIGHTS_COOKIE, "", { ...insightsCookieOptions(), maxAge: 0 });
  redirect("/insights");
}
