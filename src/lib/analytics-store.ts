import { createHash } from "crypto";
import { lookup as lookupIp } from "geoip-lite";
import type { CollectedBatch, CollectedEvent } from "@/lib/analytics-events";
import { SESSION_COOKIE, VISITOR_COOKIE } from "@/lib/analytics-events";
import { ensureAnalyticsSchema } from "@/lib/analytics-schema";
import { getPool, sql } from "@/lib/db";

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EVENT_NAME = /^[a-z][a-z0-9_]{0,39}$/;
const BOT =
  /bot|crawl|spider|slurp|headless|preview|facebookexternalhit|whatsapp|telegram|slackbot|discord|embedly|quora|pinterest|linkedinbot|wget|curl|python-requests|go-http-client|bytespider|petalbot/i;
const SENSITIVE_KEY =
  /^(email|e-?mail|phone|tel|mobile|name|full_?name|first_?name|last_?name|password|passwd|token|secret|otp)$/i;
const EMAIL = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;

const hits = new Map<string, { count: number; reset: number }>();

export type ServerErrorInput = {
  status: number;
  kind: string;
  path: string;
  message: string;
  digest?: string;
  query?: string | null;
  visitorId?: string | null;
  sessionId?: string | null;
};

export function isBotUserAgent(userAgent: string | null) {
  if (!userAgent) return true;
  return BOT.test(userAgent);
}

export function clientAddress(header: (name: string) => string | null) {
  const netlify = header("x-nf-client-connection-ip");
  if (netlify) return netlify.trim();
  const forwarded = header("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "";
  return header("x-real-ip")?.trim() || "";
}

export function hashIp(ip: string) {
  if (!ip) return null;
  return createHash("sha256").update(ip).digest("hex");
}

export function allowAnalyticsRequest(ipHash: string | null) {
  const key = ipHash || "unknown";
  const now = Date.now();
  const current = hits.get(key);
  if (!current || current.reset < now) {
    hits.set(key, { count: 1, reset: now + 60_000 });
    return true;
  }
  current.count += 1;
  return current.count <= 60;
}

function clip(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function scrub(value: string, max: number) {
  return value.replace(EMAIL, "[email]").replace(/\s+/g, " ").trim().slice(0, max);
}

function nullable(value: string) {
  return value ? value : null;
}

function uuidOrNull(value: unknown) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return UUID.test(trimmed) ? trimmed : null;
}

type Geo = { country: string | null; region: string | null; city: string | null };

function lookupGeo(ip: string): Geo {
  if (!ip || ip === "127.0.0.1" || ip === "::1" || ip.startsWith("192.168.") || ip.startsWith("10.")) {
    return { country: null, region: null, city: null };
  }
  const found = lookupIp(ip);
  if (!found) return { country: null, region: null, city: null };
  return {
    country: clip(found.country, 100) || null,
    region: clip(found.region, 100) || null,
    city: clip(found.city, 100) || null,
  };
}

function cleanParams(params: unknown) {
  if (!params || typeof params !== "object" || Array.isArray(params)) return {};
  const clean: Record<string, string | number | boolean> = {};
  let count = 0;
  for (const [key, value] of Object.entries(params)) {
    if (count >= 30) break;
    const name = clip(key, 80);
    if (!name) continue;
    if (typeof value === "number" && Number.isFinite(value)) {
      clean[name] = value;
    } else if (typeof value === "boolean") {
      clean[name] = value;
    } else if (typeof value === "string") {
      const text = scrub(value, 200);
      if (!text) continue;
      clean[name] = SENSITIVE_KEY.test(name) || text.includes("@") ? "[redacted]" : text;
    } else {
      continue;
    }
    count += 1;
  }
  return clean;
}

function cleanEvent(event: CollectedEvent) {
  const name = clip(event?.name, 40);
  if (!EVENT_NAME.test(name)) return null;
  return {
    name,
    path: clip(event.path, 500) || "/",
    query: scrub(clip(event.query, 2000), 2000),
    params: cleanParams(event.params),
  };
}

function cleanGps(gps: CollectedBatch["gps"]) {
  if (!gps) return null;
  const latitude = Number(gps.latitude);
  const longitude = Number(gps.longitude);
  const accuracy = Number(gps.accuracy);
  if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90) return null;
  if (!Number.isFinite(longitude) || longitude < -180 || longitude > 180) return null;
  if (!Number.isFinite(accuracy) || accuracy < 0 || accuracy > 100_000) return null;
  return { latitude, longitude, accuracy };
}

export function readIdsFromCookie(cookieHeader: string | null) {
  const header = cookieHeader || "";
  const read = (name: string) => {
    const match = new RegExp(`(?:^|;\\s*)${name}=([^;]+)`).exec(header);
    if (!match) return null;
    try {
      return uuidOrNull(decodeURIComponent(match[1]));
    } catch {
      return null;
    }
  };
  return {
    visitorId: read(VISITOR_COOKIE),
    sessionId: read(SESSION_COOKIE),
  };
}

export async function ingestAnalytics(batch: CollectedBatch, ip: string) {
  const visitorId = uuidOrNull(batch.visitorId);
  const sessionId = uuidOrNull(batch.sessionId);
  if (!visitorId || !sessionId) {
    throw new Error("missing ids");
  }

  const events = (Array.isArray(batch.events) ? batch.events : [])
    .slice(0, 20)
    .map(cleanEvent)
    .filter((event): event is NonNullable<typeof event> => event !== null);
  const gps = cleanGps(batch.gps);
  if (!events.length && !gps) return;

  const landing = batch.landing || {
    path: "/",
    query: "",
    referrer: "",
    referrerHost: "",
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmTerm: "",
    utmContent: "",
  };
  const path = clip(landing.path, 500) || "/";
  const query = scrub(clip(landing.query, 2000), 2000);
  const referrer = clip(landing.referrer, 1000);
  const referrerHost = clip(landing.referrerHost, 200);
  const utmSource = clip(landing.utmSource, 200);
  const utmMedium = clip(landing.utmMedium, 200);
  const utmCampaign = clip(landing.utmCampaign, 200);
  const utmTerm = clip(landing.utmTerm, 200);
  const utmContent = clip(landing.utmContent, 200);
  const geo = lookupGeo(ip);
  const ipHash = hashIp(ip);
  const now = new Date();

  await ensureAnalyticsSchema();
  const pool = await getPool();
  const transaction = new sql.Transaction(pool);
  await transaction.begin();
  try {
    await new sql.Request(transaction)
      .input("visitorId", sql.UniqueIdentifier, visitorId)
      .input("now", sql.DateTime2, now)
      .input("path", sql.NVarChar(500), path)
      .input("query", sql.NVarChar(2000), nullable(query))
      .input("referrer", sql.NVarChar(1000), nullable(referrer))
      .input("referrerHost", sql.NVarChar(200), nullable(referrerHost))
      .input("utmSource", sql.NVarChar(200), nullable(utmSource))
      .input("utmMedium", sql.NVarChar(200), nullable(utmMedium))
      .input("utmCampaign", sql.NVarChar(200), nullable(utmCampaign))
      .input("utmTerm", sql.NVarChar(200), nullable(utmTerm))
      .input("utmContent", sql.NVarChar(200), nullable(utmContent))
      .input("country", sql.NVarChar(100), geo.country)
      .input("region", sql.NVarChar(100), geo.region)
      .input("city", sql.NVarChar(100), geo.city)
      .input("latitude", sql.Float, gps?.latitude ?? null)
      .input("longitude", sql.Float, gps?.longitude ?? null)
      .input("accuracy", sql.Float, gps?.accuracy ?? null)
      .input("ipHash", sql.NVarChar(64), ipHash)
      .query(`
        UPDATE dbo.SiteVisitors
        SET LastSeen = @now,
            Country = COALESCE(Country, @country),
            Region = COALESCE(Region, @region),
            City = COALESCE(City, @city),
            Latitude = COALESCE(Latitude, @latitude),
            Longitude = COALESCE(Longitude, @longitude),
            LocationAccuracy = COALESCE(LocationAccuracy, @accuracy),
            IpHash = COALESCE(IpHash, @ipHash)
        WHERE VisitorId = @visitorId;

        IF @@ROWCOUNT = 0
        INSERT INTO dbo.SiteVisitors (
          VisitorId, FirstSeen, LastSeen, FirstPath, FirstQuery, FirstReferrer,
          FirstReferrerHost, FirstUtmSource, FirstUtmMedium, FirstUtmCampaign,
          FirstUtmTerm, FirstUtmContent, Country, Region, City, Latitude,
          Longitude, LocationAccuracy, IpHash
        )
        VALUES (
          @visitorId, @now, @now, @path, @query, @referrer, @referrerHost,
          @utmSource, @utmMedium, @utmCampaign, @utmTerm, @utmContent,
          @country, @region, @city, @latitude, @longitude, @accuracy, @ipHash
        );
      `);

    await new sql.Request(transaction)
      .input("sessionId", sql.UniqueIdentifier, sessionId)
      .input("visitorId", sql.UniqueIdentifier, visitorId)
      .input("now", sql.DateTime2, now)
      .input("path", sql.NVarChar(500), path)
      .input("query", sql.NVarChar(2000), nullable(query))
      .input("referrer", sql.NVarChar(1000), nullable(referrer))
      .input("referrerHost", sql.NVarChar(200), nullable(referrerHost))
      .input("utmSource", sql.NVarChar(200), nullable(utmSource))
      .input("utmMedium", sql.NVarChar(200), nullable(utmMedium))
      .input("utmCampaign", sql.NVarChar(200), nullable(utmCampaign))
      .input("utmTerm", sql.NVarChar(200), nullable(utmTerm))
      .input("utmContent", sql.NVarChar(200), nullable(utmContent))
      .input("country", sql.NVarChar(100), geo.country)
      .input("region", sql.NVarChar(100), geo.region)
      .input("city", sql.NVarChar(100), geo.city)
      .query(`
        IF NOT EXISTS (SELECT 1 FROM dbo.SiteSessions WHERE SessionId = @sessionId)
        INSERT INTO dbo.SiteSessions (
          SessionId, VisitorId, StartedAt, LandingPath, LandingQuery, Referrer,
          ReferrerHost, UtmSource, UtmMedium, UtmCampaign, UtmTerm, UtmContent,
          Country, Region, City
        )
        VALUES (
          @sessionId, @visitorId, @now, @path, @query, @referrer, @referrerHost,
          @utmSource, @utmMedium, @utmCampaign, @utmTerm, @utmContent,
          @country, @region, @city
        );
      `);

    for (const event of events) {
      await new sql.Request(transaction)
        .input("now", sql.DateTime2, now)
        .input("visitorId", sql.UniqueIdentifier, visitorId)
        .input("sessionId", sql.UniqueIdentifier, sessionId)
        .input("name", sql.NVarChar(40), event.name)
        .input("path", sql.NVarChar(500), event.path)
        .input("query", sql.NVarChar(2000), nullable(event.query))
        .input("params", sql.NVarChar(sql.MAX), JSON.stringify(event.params))
        .query(`
          INSERT INTO dbo.SiteEvents (
            CreatedAt, VisitorId, SessionId, EventName, Path, QueryString, Params
          )
          VALUES (@now, @visitorId, @sessionId, @name, @path, @query, @params)
        `);
    }

    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}

export async function recordServerError(input: ServerErrorInput) {
  try {
    await ensureAnalyticsSchema();
    const pool = await getPool();
    const visitorId = uuidOrNull(input.visitorId);
    const sessionId = uuidOrNull(input.sessionId);
    const params = JSON.stringify({
      status: input.status,
      kind: clip(input.kind, 40) || "server",
      message: scrub(input.message || "Error", 300) || "Error",
      digest: clip(input.digest, 80) || undefined,
    });
    await pool
      .request()
      .input("now", sql.DateTime2, new Date())
      .input("visitorId", sql.UniqueIdentifier, visitorId)
      .input("sessionId", sql.UniqueIdentifier, sessionId)
      .input("path", sql.NVarChar(500), clip(input.path, 500) || "/")
      .input("query", sql.NVarChar(2000), nullable(clip(input.query, 2000)))
      .input("params", sql.NVarChar(sql.MAX), params)
      .query(`
        INSERT INTO dbo.SiteEvents (
          CreatedAt, VisitorId, SessionId, EventName, Path, QueryString, Params
        )
        VALUES (@now, @visitorId, @sessionId, 'error', @path, @query, @params)
      `);
  } catch (error) {
    console.error("Failed to store site error", error);
  }
}
