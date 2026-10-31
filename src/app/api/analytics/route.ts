import { NextResponse } from "next/server";
import { apiError } from "@/lib/api-error";
import type { CollectedBatch } from "@/lib/analytics-events";
import {
  allowAnalyticsRequest,
  clientAddress,
  hashIp,
  ingestAnalytics,
  isBotUserAgent,
} from "@/lib/analytics-store";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (isBotUserAgent(request.headers.get("user-agent"))) {
    return new NextResponse(null, { status: 204 });
  }

  const ip = clientAddress((name) => request.headers.get(name));
  if (!allowAnalyticsRequest(hashIp(ip))) {
    console.error("analytics rate limit");
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  let raw = "";
  try {
    raw = await request.text();
  } catch {
    return apiError("/api/analytics", 400, "Invalid request.");
  }
  if (raw.length > 50_000) {
    return apiError("/api/analytics", 413, "Payload too large.");
  }

  let batch: CollectedBatch;
  try {
    batch = JSON.parse(raw) as CollectedBatch;
  } catch {
    return apiError("/api/analytics", 400, "Invalid request.");
  }
  if (!batch || typeof batch !== "object") {
    return apiError("/api/analytics", 400, "Invalid request.");
  }

  try {
    await ingestAnalytics(batch, ip);
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message === "missing ids") {
      return apiError("/api/analytics", 400, "Invalid request.");
    }
    console.error("analytics ingest failed", error);
    return apiError("/api/analytics", 500, "Could not save that.");
  }

  return new NextResponse(null, { status: 204 });
}
