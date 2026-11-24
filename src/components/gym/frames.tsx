function SampleCaption({ children }: { children: string }) {
  return <p className="text-[11px] uppercase tracking-[0.14em] text-muted">{children}</p>;
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
    warn: "bg-quiet text-ink",
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
        <SampleCaption>Sample data</SampleCaption>
        <span className="text-xs text-muted">Visit · referral · membership</span>
      </figcaption>
      <div className="grid items-start gap-3 sm:grid-cols-[0.92fr_1.08fr]">
        <PortalPhone />
        <div className="grid gap-3">
          <VisitRecord compact />
          <MembershipRecord compact />
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
      aria-label="Sample member login in the app, with a Refer User button and three referrals with their status"
    >
      <div className="rounded-2xl border border-line bg-cream p-3">
        <p className="text-[11px] text-muted">Member’s login</p>
        <p className="mt-1 text-sm font-medium">My Referrals</p>
        <p className="mt-3 rounded-xl border border-dashed border-line bg-quiet px-3 py-4 text-center text-xs text-muted">
          Refer User
        </p>
        <ul className="mt-3 space-y-2 text-xs">
          <li className="flex items-center justify-between gap-2">
            <span>Friend · sent today</span>
            <Status>Pending</Status>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Friend · came in Tuesday</span>
            <Status tone="money">Arrived</Status>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Friend · no show</span>
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
      aria-label="Sample referral management list with sender, membership, and status"
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Referrals</p>
        <SampleCaption>Sample data</SampleCaption>
      </div>
      <div className="grid grid-cols-[1.2fr_1fr_auto] gap-2 border-b border-line bg-quiet px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-muted">
        <span>Sender</span>
        <span>Membership</span>
        <span>Status</span>
      </div>
      {[
        ["Member A", "Gold annual", "Arrived", "money"],
        ["Member B", "Not yet", "Pending", "warn"],
        ["Member C", "None", "Did not visit", "warn"],
      ].map(([sender, plan, status, tone]) => (
        <div
          key={sender}
          className="grid grid-cols-[1.2fr_1fr_auto] items-center gap-2 border-b border-line px-4 py-3 text-sm last:border-0"
        >
          <span>{sender}</span>
          <span className="text-muted">{plan}</span>
          <Status tone={tone as "money" | "warn"}>{status}</Status>
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
      aria-label="Sample trainer visit record with GPS check-in, a photo, and a visit reason"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Trainer check-in</p>
        {compact ? null : <SampleCaption>Sample data</SampleCaption>}
      </div>
      <p className="mt-2 text-xs text-muted">Club · Indiranagar · GPS check-in</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Visit</dt>
          <dd className="mt-1 font-medium">09:40 · photo</dd>
        </div>
        <div className="rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Reason</dt>
          <dd className="mt-1 font-medium">PT intro</dd>
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
      aria-label="Sample field visit history across two gym branches"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Today’s visits</p>
        <SampleCaption>Sample data</SampleCaption>
      </div>
      <ol className="mt-3 space-y-3 text-sm">
        <li className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-medium">Indiranagar</span>
            <span className="text-xs text-muted">Check-in · GPS · 09:40</span>
          </span>
          <Status tone="money">Visited</Status>
        </li>
        <li className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-medium">Koramangala</span>
            <span className="text-xs text-muted">Planned · TADA if travelled</span>
          </span>
          <Status>Planned</Status>
        </li>
      </ol>
    </div>
  );
}

export function MembershipRecord({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="rounded-2xl border border-line bg-cream p-4"
      role="img"
      aria-label="Sample membership with a payment due and the trainer who sold it"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Gold annual</p>
        {compact ? <Status tone="leak">Payment Due</Status> : <SampleCaption>Sample data</SampleCaption>}
      </div>
      <p className="mt-2 text-xs text-muted">Family plan · part paid in cash</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {compact ? null : <Status tone="leak">Payment Due</Status>}
        <Status>Enrolled by Trainer B</Status>
      </div>
    </div>
  );
}

export function MembershipList() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-cream"
      role="img"
      aria-label="Sample membership list with a part payment and a payment due, a cash payment, and a UPI payment"
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Memberships</p>
        <SampleCaption>Sample data</SampleCaption>
      </div>
      <ul className="divide-y divide-line text-sm">
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">Part paid in cash</span>
            <span className="text-xs text-muted">₹6,000 of ₹18,000</span>
          </span>
          <Status tone="warn">Payment Due</Status>
        </li>
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">Cash at the desk</span>
            <span className="text-xs text-muted">Recorded by reception</span>
          </span>
          <Status tone="money">Active</Status>
        </li>
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">UPI payment</span>
            <span className="text-xs text-muted">Reference and proof photo</span>
          </span>
          <Status tone="money">Active</Status>
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
      aria-label="Sample view from visits to referrals to new members. Not a customer result."
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Visits to members</p>
        <SampleCaption>Sample data</SampleCaption>
      </div>
      <ol className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        {[
          ["Visits", "12"],
          ["Referrals", "4"],
          ["Joined", "2"],
        ].map(([label, value]) => (
          <li key={label} className="rounded-xl bg-quiet px-2 py-3">
            <p className="text-lg font-semibold tabular-nums">{value}</p>
            <p className="mt-1 text-muted">{label}</p>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs leading-5 text-muted">
        Sample counts for the layout. Not a customer result.
      </p>
    </div>
  );
}

export function ProblemIcon({ kind }: { kind: "referral" | "trainer" | "payment" }) {
  const common = "h-8 w-8 text-iris";
  if (kind === "referral") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <circle cx="9" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="23" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.5 12h4M18 12h2.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 16v6" fill="none" stroke="#12141A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "trainer") {
    return (
      <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
        <rect x="10" y="6" width="12" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 11h6M13 15h6M13 19h4" stroke="#12141A" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className={common} aria-hidden="true">
      <rect x="7" y="8" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 13h18M12 6v4M20 6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 17v4" stroke="#7A2E1F" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
