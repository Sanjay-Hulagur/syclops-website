import { NextResponse } from "next/server";
import { recordServerError } from "@/lib/analytics-store";

export function apiError(
  path: string,
  status: number,
  message: string,
  code?: string,
) {
  void recordServerError({
    status,
    kind: "api",
    path,
    message,
  });
  return NextResponse.json(code ? { error: message, code } : { error: message }, {
    status,
  });
}
