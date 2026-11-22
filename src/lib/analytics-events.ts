export type AnalyticsScalar = string | number | boolean;

export type CollectedEvent = {
  name: string;
  path: string;
  query: string;
  params: Record<string, AnalyticsScalar>;
};

export type CollectedLanding = {
  path: string;
  query: string;
  referrer: string;
  referrerHost: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
};

export type CollectedBatch = {
  visitorId: string;
  sessionId: string;
  landing: CollectedLanding;
  events: CollectedEvent[];
};

export const VISITOR_COOKIE = "sy_vid";
export const SESSION_COOKIE = "sy_sid";
