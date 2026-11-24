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
    <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function HeroBoard() {
  return (
    <figure className="rounded-3xl border border-line bg-cream p-4 sm:p-5">
      <figcaption className="mb-4 flex items-center justify-between gap-3">
        <SampleCaption>Illustrative sample workspace</SampleCaption>
        <span className="text-xs text-muted">Visit · referral · conversion</span>
      </figcaption>
      <div className="grid items-start gap-3 sm:grid-cols-[0.92fr_1.08fr]">
        <PortalPhone />
        <div className="grid gap-3">
          <VisitRecord compact />
          <ConversionRecord compact />
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
      aria-label="Illustrative KOL login. The KOL sees the people they introduced and their status. Sample workspace, not a customer result."
    >
      <div className="rounded-2xl border border-line bg-cream p-3">
        <p className="text-[11px] text-muted">KOL’s login · not a field seat</p>
        <p className="mt-1 text-sm font-medium">My Referrals</p>
        <p className="mt-3 rounded-xl border border-dashed border-line bg-quiet px-3 py-4 text-center text-xs text-muted">
          Refer User
        </p>
        <ul className="mt-3 space-y-2 text-xs">
          <li className="flex items-center justify-between gap-2">
            <span>Dr Bose · Metro Diagnostics</span>
            <Status>Pending</Status>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Dr Mehta · City Heart</span>
            <Status tone="money">Arrived</Status>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Mr Khan · Apex Hospital</span>
            <Status tone="warn">Did not visit</Status>
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
      aria-label="Illustrative referral list with the KOL who referred, the person introduced, and status. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Referrals</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <div className="grid grid-cols-[1.15fr_1fr_auto] gap-2 border-b border-line bg-quiet px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-muted">
        <span>Referrer</span>
        <span>Introduced</span>
        <span>Status</span>
      </div>
      {[
        ["Dr S. Rao", "Dr Mehta · City Heart", "Arrived", "money"],
        ["Dr P. Nair", "Ms Iyer · District Lab", "Pending", "quiet"],
        ["Dr S. Rao", "Mr Khan · Apex Hospital", "Did not visit", "warn"],
      ].map(([referrer, introduced, status, tone]) => (
        <div
          key={introduced}
          className="grid grid-cols-[1.15fr_1fr_auto] items-center gap-2 border-b border-line px-4 py-3 text-sm last:border-0"
        >
          <span>{referrer}</span>
          <span className="text-muted">{introduced}</span>
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
      aria-label="Illustrative KOL visit with GPS check-in, a photo stamped with the place and time, and notes. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Department check-in</p>
        {compact ? <Status tone="money">Checked in</Status> : <SampleCaption>Illustrative sample workspace</SampleCaption>}
      </div>
      <p className="mt-2 text-xs text-muted">Cath lab · GPS · photo</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Visit</dt>
          <dd className="mt-1 font-medium">11:05 · notes</dd>
        </div>
        <div className="rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Photo</dt>
          <dd className="mt-1 font-medium">Place and time</dd>
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
      aria-label="Illustrative hospital visit plan with one completed department visit and one planned account. Sample workspace, not a customer result."
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

export function ConversionRecord({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="rounded-2xl border border-line bg-cream p-4"
      role="img"
      aria-label="Illustrative conversion with the referrer, the quoted amount, and the final amount. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Conversion</p>
        {compact ? <Status tone="money">Converted</Status> : <SampleCaption>Illustrative sample workspace</SampleCaption>}
      </div>
      <p className="mt-2 text-xs text-muted">Dr Mehta · City Heart · referred by Dr S. Rao</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl bg-paper px-3 py-2">
          <dt className="text-muted">Quoted</dt>
          <dd className="mt-1 font-medium">₹4.6L</dd>
        </div>
        <div className="rounded-xl bg-paper px-3 py-2">
          <dt className="text-muted">Final</dt>
          <dd className="mt-1 font-medium">₹4.2L</dd>
        </div>
      </dl>
    </div>
  );
}

export function ConversionList() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-cream"
      role="img"
      aria-label="Illustrative conversion list with one converted, one planned, and one cancelled. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Conversions</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <ul className="divide-y divide-line text-sm">
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">Dr Mehta · City Heart</span>
            <span className="text-xs text-muted">Quoted ₹4.6L · final ₹4.2L</span>
          </span>
          <Status tone="money">Converted</Status>
        </li>
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">Ms Iyer · District Lab</span>
            <span className="text-xs text-muted">Quoted ₹1.8L · demo done</span>
          </span>
          <Status>Planned</Status>
        </li>
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">Mr Khan · Apex Hospital</span>
            <span className="text-xs text-muted">Chose another supplier</span>
          </span>
          <Status tone="warn">Cancelled</Status>
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
      aria-label="Illustrative counts from KOL visits to referrals to conversions. Not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Visits to conversions</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <ol className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        {[
          ["Visits", "19"],
          ["Referrals", "11"],
          ["Converted", "6"],
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
