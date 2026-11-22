/**
 * Custom events for the Google tag already loaded by GTM (G-S2DH48NBP5).
 * `gtag('event', …)` is forwarded by that tag. Event values stay within
 * GA4's 100-character parameter limit and never include form fields.
 * The same events, except scroll and section views, are also queued for
 * the first-party collector.
 *
 * Page views are also pushed to the GTM data layer. The first view is
 * already sent by the Google tag in the document head, so later
 * navigations are the ones forwarded again.
 *
 * A new workspace also fires `qualify_lead`, once, with the transaction ID
 * the signup API returned, so Google Ads counts one conversion per
 * workspace even if the event is sent twice. That event is a key event on
 * the Syclops property, and the Google tag shares it with the linked Google
 * Ads account. The email rides along as enhanced-conversion user data and
 * is never copied into the event parameters.
 */

import { collectEvent } from "@/lib/collect";

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
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  }
  return window.gtag;
}

function isLocalHost() {
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1" || host.endsWith(".local");
}

let landingPageKey = "";
let lastPageKey = "";
let lastPageAt = 0;

export function trackPageView(path: string, search = "") {
  if (typeof window === "undefined") return;

  const pageKey = `${path}?${search}`;
  const now = Date.now();
  if (lastPageKey === pageKey && now - lastPageAt < 1500) return;
  const firstView = landingPageKey === "";
  if (firstView) landingPageKey = pageKey;
  lastPageKey = pageKey;
  lastPageAt = now;

  const page_path = clean(search ? `${path}?${search}` : path || "/");
  const page_location = window.location.href.slice(0, 1000);
  const page_title = clean(document.title || path || "/");
  const page = { page_path, page_location, page_title };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "page_view", ...page });

  // The head tag already sent this first view to GA4.
  if (!firstView) {
    ensureGtag()("event", "page_view", {
      send_to: GA_MEASUREMENT_ID,
      ...page,
      ...(isLocalHost() ? { debug_mode: true } : {}),
    });
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics] page_view", { firstView, ...page });
  }
}

export function trackWorkspaceConversion(input: {
  email: string;
  transactionId: string;
  industry?: string;
  workflow?: string;
}) {
  if (typeof window === "undefined") return;

  const email = input.email.trim().toLowerCase();
  const conversion: Record<string, string> = {
    form_name: "start",
    transaction_id: clean(input.transactionId),
  };
  if (input.industry) conversion.industry = clean(input.industry);
  if (input.workflow) conversion.workflow = clean(input.workflow);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "qualify_lead",
    ...conversion,
    // GTM reads this for the Google Ads conversion and for similar users.
    ...(email ? { user_data: { email } } : {}),
  });

  const gtag = ensureGtag();
  if (email) gtag("set", "user_data", { email });
  gtag("event", "qualify_lead", {
    send_to: GA_MEASUREMENT_ID,
    ...conversion,
    ...(isLocalHost() ? { debug_mode: true } : {}),
  });

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics] qualify_lead", conversion);
  }
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
  collectEvent(eventName, params);

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", eventName, payload);
  }
}
