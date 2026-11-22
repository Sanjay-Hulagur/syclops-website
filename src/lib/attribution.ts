/**
 * Ad click IDs and campaign tags travel with the workspace signup so the
 * backend can match a workspace to the ad that brought it. The newest tagged
 * visit wins and is kept for 90 days, the life of a Google Ads click ID.
 * An untagged visit leaves the stored value alone.
 */

const KEY = "sy_attr";
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000;

export const ATTRIBUTION_PARAMS = [
  "gclid",
  "gbraid",
  "wbraid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type AttributionParam = (typeof ATTRIBUTION_PARAMS)[number];

export type Attribution = Partial<Record<AttributionParam, string>> & {
  landing_path?: string;
  at?: number;
};

export function rememberAttribution() {
  if (typeof window === "undefined") return;
  const query = new URLSearchParams(window.location.search);
  const found: Attribution = {};
  for (const name of ATTRIBUTION_PARAMS) {
    const value = query.get(name)?.trim();
    if (value) found[name] = value.slice(0, 200);
  }
  if (!Object.keys(found).length) return;
  found.landing_path = window.location.pathname.slice(0, 300);
  found.at = Date.now();
  try {
    localStorage.setItem(KEY, JSON.stringify(found));
  } catch {
    // Private mode or a full quota: the signup still works without it.
  }
}

export function readAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const value = JSON.parse(raw) as Attribution;
    if (!value.at || Date.now() - value.at > MAX_AGE_MS) {
      localStorage.removeItem(KEY);
      return null;
    }
    return value;
  } catch {
    return null;
  }
}
