export async function register() {}

type RequestInfo = {
  path: string;
  method: string;
  headers: Record<string, string | string[] | undefined>;
};

function header(headers: RequestInfo["headers"], name: string) {
  const value = headers[name] ?? headers[name.toLowerCase()];
  if (Array.isArray(value)) return value[0] || "";
  return value || "";
}

export async function onRequestError(
  error: unknown,
  request: RequestInfo,
  context: { routeType?: string },
) {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;

  const err = error instanceof Error ? error : new Error("Request failed");
  const message = err.message || "";
  const withDigest = err as Error & { digest?: unknown };
  const digest = typeof withDigest.digest === "string" ? withDigest.digest : undefined;
  const fallback = /^NEXT_HTTP_ERROR_FALLBACK;(\d+)$/.exec(digest || "");
  if (fallback?.[1] === "404" || message.includes("NEXT_NOT_FOUND")) return;

  const path = request.path.split("?")[0] || "/";
  if (path === "/api/analytics") {
    console.error("analytics request error", err);
    return;
  }

  const query = request.path.includes("?")
    ? request.path.slice(request.path.indexOf("?") + 1)
    : "";
  const status = fallback ? Number(fallback[1]) : 500;
  const { readIdsFromCookie, recordServerError } = await import(
    "@/lib/analytics-store"
  );
  const ids = readIdsFromCookie(header(request.headers, "cookie"));

  await recordServerError({
    status,
    kind: context.routeType === "route" || (status >= 400 && status < 500) ? "api" : "server",
    path,
    query,
    message: message.split("\n")[0] || "Request failed",
    digest,
    visitorId: ids.visitorId,
    sessionId: ids.sessionId,
  });
}
