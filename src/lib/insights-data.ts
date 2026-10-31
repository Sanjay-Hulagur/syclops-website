import { ensureAnalyticsSchema } from "@/lib/analytics-schema";
import { getPool, sql } from "@/lib/db";

export const INSIGHT_RANGES = [
  { id: "24h", label: "24 hours", hours: 24 },
  { id: "7d", label: "7 days", hours: 24 * 7 },
  { id: "30d", label: "30 days", hours: 24 * 30 },
] as const;

export type InsightRange = (typeof INSIGHT_RANGES)[number]["id"];

export type InsightsReport = {
  range: InsightRange;
  pageViews: number;
  visitors: number;
  sessions: number;
  pages: { path: string; hits: number }[];
  sources: { source: string; sessions: number }[];
  params: { key: string; value: string; hits: number }[];
  clicks: { name: string; path: string; hits: number }[];
  cities: { city: string; region: string; country: string; sessions: number }[];
  gps: {
    latitude: number;
    longitude: number;
    accuracy: number | null;
    seen: string;
    city: string;
  }[];
  errorBuckets: { bucket: string; hits: number }[];
  errorKinds: { kind: string; hits: number }[];
  errorPaths: { path: string; status: number; hits: number }[];
  recentErrors: { time: string; path: string; status: number; kind: string; message: string }[];
};

function numberOf(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function textOf(value: unknown) {
  return typeof value === "string" ? value : "";
}

function bucketFor(status: number) {
  if (status === 404) return "404";
  if (status >= 500) return "500";
  if (status >= 400) return "4xx";
  return "other";
}

export function rangeFromParam(value: string | undefined) {
  return INSIGHT_RANGES.find((range) => range.id === value) ?? INSIGHT_RANGES[1];
}

export async function loadInsights(rangeId: InsightRange): Promise<InsightsReport> {
  const range = rangeFromParam(rangeId);
  const since = new Date(Date.now() - range.hours * 60 * 60 * 1000);
  await ensureAnalyticsSchema();
  const pool = await getPool();

  const counts = await pool.request().input("since", sql.DateTime2, since).query(`
    SELECT
      (SELECT COUNT(*) FROM dbo.SiteEvents WHERE EventName = 'page_view' AND CreatedAt >= @since) AS PageViews,
      (SELECT COUNT(DISTINCT VisitorId) FROM dbo.SiteEvents WHERE EventName = 'page_view' AND CreatedAt >= @since AND VisitorId IS NOT NULL) AS Visitors,
      (SELECT COUNT(*) FROM dbo.SiteSessions WHERE StartedAt >= @since) AS Sessions
  `);

  const pages = await pool.request().input("since", sql.DateTime2, since).query(`
    SELECT TOP 15 Path, COUNT(*) AS Hits
    FROM dbo.SiteEvents
    WHERE EventName = 'page_view' AND CreatedAt >= @since
    GROUP BY Path
    ORDER BY Hits DESC
  `);

  const sources = await pool.request().input("since", sql.DateTime2, since).query(`
    SELECT TOP 15
      CASE
        WHEN NULLIF(UtmSource, '') IS NOT NULL THEN UtmSource
        WHEN NULLIF(ReferrerHost, '') IS NOT NULL THEN ReferrerHost
        ELSE ''
      END AS Source,
      COUNT(*) AS Sessions
    FROM dbo.SiteSessions
    WHERE StartedAt >= @since
    GROUP BY
      CASE
        WHEN NULLIF(UtmSource, '') IS NOT NULL THEN UtmSource
        WHEN NULLIF(ReferrerHost, '') IS NOT NULL THEN ReferrerHost
        ELSE ''
      END
    ORDER BY Sessions DESC
  `);

  const params = await pool.request().input("since", sql.DateTime2, since).query(`
    SELECT TOP 20 j.[key] AS ParamKey, LEFT(j.[value], 120) AS ParamValue, COUNT(*) AS Hits
    FROM dbo.SiteEvents AS e
    CROSS APPLY OPENJSON(CASE WHEN ISJSON(e.Params) = 1 THEN e.Params ELSE N'{}' END) AS j
    WHERE e.EventName = 'page_view'
      AND e.CreatedAt >= @since
      AND j.[type] IN (1, 2)
    GROUP BY j.[key], LEFT(j.[value], 120)
    ORDER BY Hits DESC
  `);

  const clicks = await pool.request().input("since", sql.DateTime2, since).query(`
    SELECT TOP 15
      JSON_VALUE(Params, '$.button_name') AS ButtonName,
      Path,
      COUNT(*) AS Hits
    FROM dbo.SiteEvents
    WHERE EventName = 'button_click' AND CreatedAt >= @since
    GROUP BY JSON_VALUE(Params, '$.button_name'), Path
    ORDER BY Hits DESC
  `);

  const cities = await pool.request().input("since", sql.DateTime2, since).query(`
    SELECT TOP 15 City, Region, Country, COUNT(*) AS Sessions
    FROM dbo.SiteSessions
    WHERE StartedAt >= @since
    GROUP BY City, Region, Country
    ORDER BY Sessions DESC
  `);

  const gps = await pool.request().input("since", sql.DateTime2, since).query(`
    SELECT TOP 30 Latitude, Longitude, LocationAccuracy, LastSeen, City
    FROM dbo.SiteVisitors
    WHERE Latitude IS NOT NULL AND Longitude IS NOT NULL AND LastSeen >= @since
    ORDER BY LastSeen DESC
  `);

  const errors = await pool.request().input("since", sql.DateTime2, since).query(`
    SELECT
      TRY_CAST(JSON_VALUE(Params, '$.status') AS int) AS StatusCode,
      JSON_VALUE(Params, '$.kind') AS Kind,
      COUNT(*) AS Hits
    FROM dbo.SiteEvents
    WHERE EventName = 'error' AND CreatedAt >= @since
    GROUP BY TRY_CAST(JSON_VALUE(Params, '$.status') AS int), JSON_VALUE(Params, '$.kind')
  `);

  const errorPaths = await pool.request().input("since", sql.DateTime2, since).query(`
    SELECT TOP 15
      Path,
      TRY_CAST(JSON_VALUE(Params, '$.status') AS int) AS StatusCode,
      COUNT(*) AS Hits
    FROM dbo.SiteEvents
    WHERE EventName = 'error' AND CreatedAt >= @since
    GROUP BY Path, TRY_CAST(JSON_VALUE(Params, '$.status') AS int)
    ORDER BY Hits DESC
  `);

  const recent = await pool.request().input("since", sql.DateTime2, since).query(`
    SELECT TOP 30 CreatedAt, Path, Params
    FROM dbo.SiteEvents
    WHERE EventName = 'error' AND CreatedAt >= @since
    ORDER BY CreatedAt DESC
  `);

  const countRow = counts.recordset[0] as {
    PageViews: number;
    Visitors: number;
    Sessions: number;
  };

  const buckets = new Map<string, number>();
  const kinds = new Map<string, number>();
  for (const row of errors.recordset as { StatusCode: number | null; Kind: string | null; Hits: number }[]) {
    const status = numberOf(row.StatusCode);
    const bucket = bucketFor(status);
    buckets.set(bucket, (buckets.get(bucket) || 0) + numberOf(row.Hits));
    const kind = textOf(row.Kind) || "unknown";
    kinds.set(kind, (kinds.get(kind) || 0) + numberOf(row.Hits));
  }

  return {
    range: range.id,
    pageViews: numberOf(countRow?.PageViews),
    visitors: numberOf(countRow?.Visitors),
    sessions: numberOf(countRow?.Sessions),
    pages: (pages.recordset as { Path: string | null; Hits: number }[]).map((row) => ({
      path: textOf(row.Path) || "/",
      hits: numberOf(row.Hits),
    })),
    sources: (sources.recordset as { Source: string | null; Sessions: number }[]).map((row) => ({
      source: textOf(row.Source) || "No referrer",
      sessions: numberOf(row.Sessions),
    })),
    params: (params.recordset as { ParamKey: string; ParamValue: string; Hits: number }[]).map(
      (row) => ({
        key: textOf(row.ParamKey),
        value: textOf(row.ParamValue),
        hits: numberOf(row.Hits),
      }),
    ),
    clicks: (clicks.recordset as { ButtonName: string | null; Path: string | null; Hits: number }[]).map(
      (row) => ({
        name: textOf(row.ButtonName) || "Unnamed",
        path: textOf(row.Path) || "/",
        hits: numberOf(row.Hits),
      }),
    ),
    cities: (
      cities.recordset as {
        City: string | null;
        Region: string | null;
        Country: string | null;
        Sessions: number;
      }[]
    ).map((row) => ({
      city: textOf(row.City) || "Unknown",
      region: textOf(row.Region),
      country: textOf(row.Country),
      sessions: numberOf(row.Sessions),
    })),
    gps: (
      gps.recordset as {
        Latitude: number;
        Longitude: number;
        LocationAccuracy: number | null;
        LastSeen: Date;
        City: string | null;
      }[]
    ).map((row) => ({
      latitude: numberOf(row.Latitude),
      longitude: numberOf(row.Longitude),
      accuracy: row.LocationAccuracy == null ? null : numberOf(row.LocationAccuracy),
      seen: new Date(row.LastSeen).toISOString(),
      city: textOf(row.City),
    })),
    errorBuckets: ["404", "4xx", "500", "other"].map((bucket) => ({
      bucket,
      hits: buckets.get(bucket) || 0,
    })),
    errorKinds: [...kinds.entries()]
      .map(([kind, hits]) => ({ kind, hits }))
      .sort((a, b) => b.hits - a.hits),
    errorPaths: (
      errorPaths.recordset as { Path: string | null; StatusCode: number | null; Hits: number }[]
    ).map((row) => ({
      path: textOf(row.Path) || "/",
      status: numberOf(row.StatusCode),
      hits: numberOf(row.Hits),
    })),
    recentErrors: (recent.recordset as { CreatedAt: Date; Path: string | null; Params: string | null }[]).map(
      (row) => {
        let status = 0;
        let kind = "";
        let message = "";
        try {
          const parsed = JSON.parse(row.Params || "{}") as {
            status?: unknown;
            kind?: unknown;
            message?: unknown;
          };
          status = numberOf(parsed.status);
          kind = textOf(parsed.kind);
          message = textOf(parsed.message);
        } catch {
          message = "";
        }
        return {
          time: new Date(row.CreatedAt).toISOString(),
          path: textOf(row.Path) || "/",
          status,
          kind,
          message,
        };
      },
    ),
  };
}
