/**
 * Custom events for the Google tag already loaded by GTM (G-S2DH48NBP5).
 * `gtag('event', …)` is forwarded by that tag. Event values stay within
 * GA4's 100-character parameter limit and never include form fields.
 */

export const GA_MEASUREMENT_ID = "G-S2DH48NBP5";

type AnalyticsValue = string | number | boolean | undefined;

export type AnalyticsParams = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const MAX_VALUE = 100;

function clean(value: string) {
  return value.replace(/\s+/g, " ").trim().slice(0, MAX_VALUE);
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      // The Google tag only treats an Arguments object as a command.
      window.dataLayer?.push(arguments);
    };
  }
  return window.gtag;
}

export function track(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const payload: Record<string, string | number | boolean> = {
    send_to: GA_MEASUREMENT_ID,
    page_path: clean(window.location.pathname || "/"),
  };

  const host = window.location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || host.endsWith(".local")) {
    payload.debug_mode = true;
  }

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === "") continue;
    const name = key.slice(0, 40);
    payload[name] = typeof value === "string" ? clean(value) : value;
  }

  ensureGtag()("event", eventName.slice(0, 40), payload);

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", eventName, payload);
  }
}
