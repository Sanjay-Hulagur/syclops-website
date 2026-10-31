import type { ReactNode } from "react";
import { logoutInsights } from "@/app/insights/actions";
import {
  INSIGHT_RANGES,
  type InsightsReport,
} from "@/lib/insights-data";

function count(value: number) {
  return value.toLocaleString("en-IN");
}

function when(iso: string) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(iso));
}

function place(city: string, region: string, country: string) {
  return [city, region, country].filter(Boolean).join(", ");
}

export function InsightsBoard({ report }: { report: InsightsReport }) {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-iris">Syclops</p>
          <h1 className="display mt-2 text-3xl font-semibold">Site insights</h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            First-party page views, URL parameters, clicks, source, location, and
            errors. Times are India Standard Time.
          </p>
        </div>
        <form action={logoutInsights}>
          <button
            type="submit"
            className="rounded-full border border-line px-4 py-2 text-sm"
          >
            Log out
          </button>
        </form>
      </div>

      <div className="flex flex-wrap gap-2">
        {INSIGHT_RANGES.map((range) => {
          const active = range.id === report.range;
          return (
            <a
              key={range.id}
              href={range.id === "7d" ? "/insights" : `/insights?range=${range.id}`}
              className={
                active
                  ? "rounded-full bg-iris px-4 py-2 text-sm font-medium text-cream"
                  : "rounded-full border border-line px-4 py-2 text-sm"
              }
            >
              {range.label}
            </a>
          );
        })}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="Page views" value={report.pageViews} />
        <Stat label="Visitors" value={report.visitors} />
        <Stat label="Sessions" value={report.sessions} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Pages">
          <Rows
            empty="No page views in this range."
            rows={report.pages.map((row) => ({
              label: row.path,
              value: count(row.hits),
            }))}
          />
        </Panel>
        <Panel title="Sources">
          <Rows
            empty="No sessions in this range."
            rows={report.sources.map((row) => ({
              label: row.source,
              value: count(row.sessions),
            }))}
          />
        </Panel>
        <Panel title="URL parameters">
          <Rows
            empty="No URL parameters in this range."
            rows={report.params.map((row) => ({
              label: `${row.key}=${row.value}`,
              value: count(row.hits),
            }))}
          />
        </Panel>
        <Panel title="Clicks">
          <Rows
            empty="No clicks in this range."
            rows={report.clicks.map((row) => ({
              label: `${row.name} · ${row.path}`,
              value: count(row.hits),
            }))}
          />
        </Panel>
        <Panel title="Location from IP">
          <Rows
            empty="No location in this range."
            rows={report.cities.map((row) => ({
              label: place(row.city, row.region, row.country),
              value: count(row.sessions),
            }))}
          />
        </Panel>
        <Panel title="GPS when allowed">
          {report.gps.length ? (
            <ul className="divide-y divide-line text-sm">
              {report.gps.map((row) => (
                <li
                  key={`${row.latitude},${row.longitude},${row.seen}`}
                  className="flex items-start justify-between gap-4 py-2"
                >
                  <span>
                    {row.latitude.toFixed(5)}, {row.longitude.toFixed(5)}
                    {row.accuracy != null ? (
                      <span className="mt-0.5 block text-muted">
                        ±{Math.round(row.accuracy)} m
                        {row.city ? ` · ${row.city}` : ""}
                      </span>
                    ) : null}
                  </span>
                  <span className="shrink-0 text-muted">{when(row.seen)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">No GPS readings in this range.</p>
          )}
        </Panel>
      </div>

      <section className="grid gap-4">
        <h2 className="display text-2xl font-semibold">Errors</h2>
        <div className="grid gap-3 sm:grid-cols-4">
          {report.errorBuckets.map((bucket) => (
            <Stat key={bucket.bucket} label={bucket.bucket} value={bucket.hits} />
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel title="By kind">
            <Rows
              empty="No errors in this range."
              rows={report.errorKinds.map((row) => ({
                label: row.kind,
                value: count(row.hits),
              }))}
            />
          </Panel>
          <Panel title="By path">
            <Rows
              empty="No errors in this range."
              rows={report.errorPaths.map((row) => ({
                label: `${row.status || "—"} · ${row.path}`,
                value: count(row.hits),
              }))}
            />
          </Panel>
        </div>
        <Panel title="Recent">
          {report.recentErrors.length ? (
            <ul className="divide-y divide-line text-sm">
              {report.recentErrors.map((row) => (
                <li key={`${row.time}-${row.path}-${row.message}`} className="grid gap-1 py-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-medium">
                      {row.status || "—"} · {row.kind || "error"} · {row.path}
                    </span>
                    <span className="text-muted">{when(row.time)}</span>
                  </div>
                  {row.message ? <p className="text-muted">{row.message}</p> : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">No errors in this range.</p>
          )}
        </Panel>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-line bg-cream px-4 py-3">
      <p className="text-xs uppercase tracking-[0.14em] text-muted">{label}</p>
      <p className="display mt-1 text-2xl font-semibold">{count(value)}</p>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-line bg-cream p-4">
      <h2 className="display text-lg font-semibold">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Rows({
  rows,
  empty,
}: {
  rows: { label: string; value: string }[];
  empty: string;
}) {
  if (!rows.length) return <p className="text-sm text-muted">{empty}</p>;
  return (
    <ul className="divide-y divide-line text-sm">
      {rows.map((row) => (
        <li key={row.label} className="flex items-start justify-between gap-4 py-2">
          <span className="min-w-0 break-words">{row.label}</span>
          <span className="shrink-0 font-medium">{row.value}</span>
        </li>
      ))}
    </ul>
  );
}
