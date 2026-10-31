import { NextResponse } from "next/server";
import { recordServerError } from "@/lib/analytics-store";

export function apiError(path: string, status: number, message: string) {
  void recordServerError({
    status,
    kind: "api",
    path,
    message,
  });
  return NextResponse.json({ error: message }, { status });
}
