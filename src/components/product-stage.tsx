import type { Industry } from "@/lib/industries";

export function ProductStage({ industry }: { industry: Industry }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-cream shadow-[0_20px_60px_-40px_rgba(18,20,26,0.45)]">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div>
          <p className="text-sm font-medium">{industry.stage.person}</p>
          <p className="text-xs text-muted">{industry.stage.role}</p>
        </div>
        <p className="rounded-full bg-quiet px-2.5 py-1 text-[11px] text-muted">
          Live loop
        </p>
      </div>
      <div className="grid gap-px bg-line sm:grid-cols-3">
        <article className="bg-cream p-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">Field</p>
          <p className="mt-2 text-sm font-medium">{industry.stage.visitTitle}</p>
          <p className="mt-1 text-xs text-muted">{industry.stage.visitMeta}</p>
        </article>
        <article className="bg-cream p-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
            Referral
          </p>
          <p className="mt-2 text-sm font-medium">
            {industry.stage.referralFrom} → {industry.stage.referralTo}
          </p>
          <p className="mt-1 text-xs text-money">{industry.stage.referralStatus}</p>
        </article>
        <article className="bg-cream p-4">
          <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
            Subscription
          </p>
          <p className="mt-2 text-sm font-medium">{industry.stage.planName}</p>
          <p className="mt-1 text-xs text-muted">
            {industry.stage.planState} · {industry.stage.amount}
          </p>
        </article>
      </div>
      <dl className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4">
        {Object.values(industry.metrics).map((metric) => (
          <div key={metric} className="bg-quiet px-4 py-3">
            <dt className="sr-only">Metric</dt>
            <dd className="text-sm font-medium">{metric}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
