import {
  SESSION_COOKIE,
  VISITOR_COOKIE,
  type CollectedEvent,
  type CollectedGps,
  type CollectedLanding,
} from "@/lib/analytics-events";

type CollectParams = Record<string, string | number | boolean | undefined>;

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const GA_ONLY = new Set(["page_scroll", "section_view"]);
const IMMEDIATE = new Set(["page_view", "error"]);
const SENSITIVE_KEY =
  /^(email|e-?mail|phone|tel|mobile|name|full_?name|first_?name|last_?name|password|passwd|token|secret|otp)$/i;
const GPS_FLAG = "sy_gps";
const LANDING_KEY = "sy_landing";

const recentErrors = new Set<string>();
let lastPageView = { key: "", at: 0 };
let queue: CollectedEvent[] = [];
let gpsPayload: CollectedGps | null = null;
let flushTimer = 0;

function clip(value: string, max: number) {
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function readCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  if (!match) return "";
  try {
    return decodeURIComponent(match[1]);
  } catch {
    return "";
  }
}

function writeCookie(name: string, value: string, maxAge?: number) {
  const age = maxAge === undefined ? "" : `; max-age=${maxAge}`;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; samesite=lax${age}`;
}

function validId(value: string) {
  return UUID.test(value) ? value : "";
}

function visitorId() {
  const stored =
    validId(localStorage.getItem(VISITOR_COOKIE) || "") || validId(readCookie(VISITOR_COOKIE));
  const id = stored || crypto.randomUUID();
  localStorage.setItem(VISITOR_COOKIE, id);
  writeCookie(VISITOR_COOKIE, id, 60 * 60 * 24 * 365);
  return id;
}

function sessionId() {
  const stored = validId(readCookie(SESSION_COOKIE)) || validId(sessionStorage.getItem(SESSION_COOKIE) || "");
  const id = stored || crypto.randomUUID();
  sessionStorage.setItem(SESSION_COOKIE, id);
  writeCookie(SESSION_COOKIE, id);
  return id;
}

function landing(): CollectedLanding {
  const existing = sessionStorage.getItem(LANDING_KEY);
  if (existing) {
    try {
      return JSON.parse(existing) as CollectedLanding;
    } catch {
      sessionStorage.removeItem(LANDING_KEY);
    }
  }
  const params = new URLSearchParams(window.location.search);
  const referrer = document.referrer || "";
  let referrerHost = "";
  if (referrer) {
    try {
      referrerHost = new URL(referrer).host;
    } catch {
      referrerHost = "";
    }
  }
  const touch: CollectedLanding = {
    path: window.location.pathname || "/",
    query: window.location.search.replace(/^\?/, ""),
    referrer,
    referrerHost,
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
    utmTerm: params.get("utm_term") || "",
    utmContent: params.get("utm_content") || "",
  };
  sessionStorage.setItem(LANDING_KEY, JSON.stringify(touch));
  return touch;
}

function clipParams(params: CollectParams) {
  const clean: Record<string, string | number | boolean> = {};
  let count = 0;
  for (const [key, value] of Object.entries(params)) {
    if (count >= 30 || value === undefined || value === "") continue;
    const name = clip(key, 80);
    if (!name) continue;
    if (typeof value === "number" && Number.isFinite(value)) clean[name] = value;
    else if (typeof value === "boolean") clean[name] = value;
    else if (typeof value === "string") {
      const text = clip(value, 200);
      if (!text) continue;
      clean[name] = SENSITIVE_KEY.test(name) || text.includes("@") ? "[redacted]" : text;
    }
    count += 1;
  }
  return clean;
}

function flush(beacon: boolean) {
  if (typeof window === "undefined") return;
  if (!queue.length && !gpsPayload) return;
  const events = queue.splice(0, 20);
  const gps = gpsPayload;
  gpsPayload = null;
  const body = JSON.stringify({
    visitorId: visitorId(),
    sessionId: sessionId(),
    landing: landing(),
    gps,
    events,
  });
  if (beacon && navigator.sendBeacon) {
    const sent = navigator.sendBeacon(
      "/api/analytics",
      new Blob([body], { type: "application/json" }),
    );
    if (sent) return;
    queue.unshift(...events);
    gpsPayload = gps;
    return;
  }
  void fetch("/api/analytics", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // A failed collector must not report itself.
  });
}

function schedule() {
  if (flushTimer) return;
  flushTimer = window.setTimeout(() => {
    flushTimer = 0;
    flush(false);
  }, 1200);
}

export function collectEvent(eventName: string, params: CollectParams = {}) {
  if (typeof window === "undefined") return;
  if (GA_ONLY.has(eventName)) return;
  queue.push({
    name: clip(eventName, 40),
    path: window.location.pathname || "/",
    query: window.location.search.replace(/^\?/, "").slice(0, 2000),
    params: clipParams(params),
  });
  if (queue.length > 40) queue.splice(0, queue.length - 40);
  if (IMMEDIATE.has(eventName)) flush(false);
  else schedule();
}

export function collectPageView(path: string, query: string) {
  if (typeof window === "undefined") return;
  const viewKey = `${path}?${query}`;
  const now = Date.now();
  if (lastPageView.key === viewKey && now - lastPageView.at < 1500) return;
  lastPageView = { key: viewKey, at: now };
  const params = new URLSearchParams(query);
  const parsed: Record<string, string> = {};
  let count = 0;
  for (const [key, value] of params) {
    if (count >= 30) break;
    const name = clip(key, 80);
    const text = clip(value, 200);
    if (!name || !text) continue;
    parsed[name] = SENSITIVE_KEY.test(name) || text.includes("@") ? "[redacted]" : text;
    count += 1;
  }
  queue.push({
    name: "page_view",
    path: clip(path, 500) || "/",
    query: query.slice(0, 2000),
    params: parsed,
  });
  flush(false);
}

export function collectError(input: {
  status: number;
  kind: string;
  message: string;
  path?: string;
  query?: string;
  source?: string;
  line?: number;
  digest?: string;
}) {
  if (typeof window === "undefined") return;
  const message = clip(input.message || "Error", 300);
  const source = clip(input.source || "", 200);
  if (/^(chrome|moz|safari)-extension:/.test(source)) return;
  if (/resizeobserver/i.test(message)) return;
  const key = `${input.kind}|${input.status}|${message}|${source}|${input.line || 0}`;
  if (recentErrors.has(key)) return;
  recentErrors.add(key);
  window.setTimeout(() => recentErrors.delete(key), 4000);
  queue.push({
    name: "error",
    path: clip(input.path || window.location.pathname || "/", 500),
    query: (input.query ?? window.location.search.replace(/^\?/, "")).slice(0, 2000),
    params: {
      status: input.status,
      kind: clip(input.kind, 40) || "client",
      message,
      ...(source ? { source } : {}),
      ...(input.line ? { line: input.line } : {}),
      ...(input.digest ? { digest: clip(input.digest, 80) } : {}),
    },
  });
  flush(false);
}

export function bindCollectorLifecycle() {
  const onHide = () => flush(true);
  window.addEventListener("pagehide", onHide);
  return () => window.removeEventListener("pagehide", onHide);
}

export function requestGpsOnce() {
  if (typeof window === "undefined" || !navigator.geolocation) return;
  const flag = localStorage.getItem(GPS_FLAG);
  if (flag === "denied" || flag === "sent") return;

  const ask = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        localStorage.setItem(GPS_FLAG, "sent");
        gpsPayload = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        };
        flush(false);
      },
      () => {
        localStorage.setItem(GPS_FLAG, "denied");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60_000 },
    );
  };

  if (!navigator.permissions?.query) {
    ask();
    return;
  }
  navigator.permissions
    .query({ name: "geolocation" })
    .then((permission) => {
      if (permission.state === "denied") {
        localStorage.setItem(GPS_FLAG, "denied");
        return;
      }
      ask();
    })
    .catch(ask);
}
