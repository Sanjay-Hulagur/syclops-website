function SampleCaption({ children }: { children: string }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.14em] text-muted">{children}</p>
  );
}

function Status({
  children,
  tone = "quiet",
}: {
  children: string;
  tone?: "quiet" | "money" | "leak" | "warn";
}) {
  const tones = {
    quiet: "bg-quiet text-muted",
    money: "bg-money/10 text-money",
    leak: "bg-leak/10 text-leak",
    warn: "bg-quiet text-[#A16207]",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function HeroBoard() {
  return (
    <figure className="rounded-3xl border border-line bg-cream p-4 sm:p-5">
      <figcaption className="mb-4 flex items-center justify-between gap-3">
        <SampleCaption>Illustrative sample workspace</SampleCaption>
        <span className="text-xs text-muted">Visit · referral · contract</span>
      </figcaption>
      <div className="grid items-start gap-3 sm:grid-cols-[0.92fr_1.08fr]">
        <PortalPhone />
        <div className="grid gap-3">
          <VisitRecord compact />
          <ContractRecord compact />
        </div>
      </div>
    </figure>
  );
}

export function PortalPhone() {
  return (
    <div
      className="rounded-[1.6rem] border border-line bg-paper p-3"
      role="img"
      aria-label="Illustrative department referral portal. A department sees two introductions and their status. Sample workspace, not a customer result."
    >
      <div className="rounded-2xl border border-line bg-cream p-3">
        <p className="text-[11px] text-muted">Department portal</p>
        <p className="mt-1 text-sm font-medium">Refer a hospital</p>
        <p className="mt-3 rounded-xl border border-dashed border-line bg-quiet px-3 py-4 text-center text-xs text-muted">
          Link or QR · no app
        </p>
        <ul className="mt-3 space-y-2 text-xs">
          <li className="flex items-center justify-between gap-2">
            <span>Site · sent today</span>
            <Status>Sent</Status>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>City Heart · service</span>
            <Status tone="money">Paying</Status>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Same account blocked</span>
            <Status tone="warn">Duplicate</Status>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function ReferralDesk() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-cream"
      role="img"
      aria-label="Illustrative hospital referral list with department, contract, and status. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Hospital referrals</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <div className="grid grid-cols-[1.15fr_1fr_auto] gap-2 border-b border-line bg-quiet px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-muted">
        <span>Referrer</span>
        <span>Contract</span>
        <span>Status</span>
      </div>
      {[
        ["Cardiology", "Analyzer + service", "Converted", "money"],
        ["Lab head", "Pending match", "Sent", "quiet"],
        ["Same account", "Service plan", "Duplicate", "warn"],
      ].map(([referrer, plan, status, tone]) => (
        <div
          key={referrer}
          className="grid grid-cols-[1.15fr_1fr_auto] items-center gap-2 border-b border-line px-4 py-3 text-sm last:border-0"
        >
          <span>{referrer}</span>
          <span className="text-muted">{plan}</span>
          <Status tone={tone as "money" | "quiet" | "warn"}>{status}</Status>
        </div>
      ))}
    </div>
  );
}

export function VisitRecord({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="rounded-2xl border border-line bg-paper p-4"
      role="img"
      aria-label="Illustrative KOL visit with a badge photo, duration, and a service follow-up. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Department check-in</p>
        {compact ? <Status tone="money">Checked in</Status> : <SampleCaption>Illustrative sample workspace</SampleCaption>}
      </div>
      <p className="mt-2 text-xs text-muted">Cath lab · GPS · badge photo</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Visit</dt>
          <dd className="mt-1 font-medium">41 min · notes</dd>
        </div>
        <div className="rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Follow-up</dt>
          <dd className="mt-1 font-medium">Q3 service window</dd>
        </div>
      </dl>
    </div>
  );
}

export function VisitHistory() {
  return (
    <div
      className="rounded-2xl border border-line bg-cream p-4"
      role="img"
      aria-label="Illustrative hospital beat with one completed department visit and one planned account. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Hospital coverage</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <ol className="mt-3 space-y-3 text-sm">
        <li className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-medium">City Heart · cath lab</span>
            <span className="text-xs text-muted">Check-in · GPS · photo · 11:05</span>
          </span>
          <Status tone="money">Visited</Status>
        </li>
        <li className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-medium">District lab</span>
            <span className="text-xs text-muted">Planned · not visited recently</span>
          </span>
          <Status>Planned</Status>
        </li>
      </ol>
    </div>
  );
}

export function ContractRecord({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="rounded-2xl border border-line bg-cream p-4"
      role="img"
      aria-label="Illustrative analyzer and service contract with a service window and a rep follow-up. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Analyzer + service</p>
        {compact ? <Status tone="warn">Due soon</Status> : <SampleCaption>Illustrative sample workspace</SampleCaption>}
      </div>
      <p className="mt-2 text-xs text-muted">City Heart Centre · referred by Cardiology</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl bg-paper px-3 py-2">
          <dt className="text-muted">Service</dt>
          <dd className="mt-1 font-medium">₹4.2L · Q3</dd>
        </div>
        <div className="rounded-xl bg-paper px-3 py-2">
          <dt className="text-muted">Follow-up</dt>
          <dd className="mt-1 font-medium">Rep task</dd>
        </div>
      </dl>
    </div>
  );
}

export function ContractList() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-cream"
      role="img"
      aria-label="Illustrative contract list with an active service plan, one due window, and one lapsed plan. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Device contracts</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <ul className="divide-y divide-line text-sm">
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">Implant + service</span>
            <span className="text-xs text-muted">Paying · department still attached</span>
          </span>
          <Status tone="money">Paid</Status>
        </li>
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">Analyzer · Q3 window</span>
            <span className="text-xs text-muted">₹4.2L due · rep task</span>
          </span>
          <Status tone="warn">Due soon</Status>
        </li>
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">Service plan lapsed</span>
            <span className="text-xs text-muted">Follow-up after retries</span>
          </span>
          <Status tone="leak">Failed</Status>
        </li>
      </ul>
    </div>
  );
}

export function AnalyticsSample() {
  return (
    <div
      className="rounded-2xl border border-line bg-cream p-4"
      role="img"
      aria-label="Illustrative loop health from KOL visits to conversions to service lapses. Not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Loop health</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <ol className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        {[
          ["Visits", "19"],
          ["Converted", "6"],
          ["Lapses", "3"],
        ].map(([label, value]) => (
          <li key={label} className="rounded-xl bg-quiet px-2 py-3">
            <p className="text-lg font-semibold tabular-nums">{value}</p>
            <p className="mt-1 text-muted">{label}</p>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs leading-5 text-muted">
        Sample layout counts from the medtech workspace preview. Not a customer result.
      </p>
    </div>
  );
}
