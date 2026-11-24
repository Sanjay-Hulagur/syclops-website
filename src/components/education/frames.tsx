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
        <span className="text-xs text-muted">Visit · referral · fee plan</span>
      </figcaption>
      <div className="grid items-start gap-3 sm:grid-cols-[0.92fr_1.08fr]">
        <PortalPhone />
        <div className="grid gap-3">
          <VisitRecord compact />
          <FeePlanRecord compact />
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
      aria-label="Illustrative parent login. A parent sees the students they referred and their status. Sample workspace, not a customer result."
    >
      <div className="rounded-2xl border border-line bg-cream p-3">
        <p className="text-[11px] text-muted">Parent’s login · not a field seat</p>
        <p className="mt-1 text-sm font-medium">My Referrals</p>
        <p className="mt-3 rounded-xl border border-dashed border-line bg-quiet px-3 py-4 text-center text-xs text-muted">
          Refer User
        </p>
        <ul className="mt-3 space-y-2 text-xs">
          <li className="flex items-center justify-between gap-2">
            <span>Rohan K. · sent today</span>
            <Status>Pending</Status>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Kavya N. · Class 12</span>
            <Status tone="money">Admitted</Status>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Meera P.</span>
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
      aria-label="Illustrative student referral list with referrer, a note, and status. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Student referrals</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <div className="grid grid-cols-[1.1fr_1fr_auto] gap-2 border-b border-line bg-quiet px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-muted">
        <span>Referrer</span>
        <span>Note</span>
        <span>Status</span>
      </div>
      {[
        ["Alumni · class of 2022", "NEET crash", "Admitted", "money"],
        ["Parent · North", "PU science", "Pending", "quiet"],
        ["Teacher · St. Mary’s", "Degree", "Did not visit", "warn"],
      ].map(([referrer, note, status, tone]) => (
        <div
          key={referrer}
          className="grid grid-cols-[1.1fr_1fr_auto] items-center gap-2 border-b border-line px-4 py-3 text-sm last:border-0"
        >
          <span>{referrer}</span>
          <span className="text-muted">{note}</span>
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
      aria-label="Illustrative counselor visit with GPS check-in, notes, and a photo stamped with the place and time. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Counselor check-in</p>
        {compact ? <Status tone="money">Checked in</Status> : <SampleCaption>Illustrative sample workspace</SampleCaption>}
      </div>
      <p className="mt-2 text-xs text-muted">St. Mary&apos;s PU · South cluster · GPS</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Visit</dt>
          <dd className="mt-1 font-medium">10:15 · notes</dd>
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
      aria-label="Illustrative campus visit list with one completed check-in and one planned visit. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Campus coverage</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <ol className="mt-3 space-y-3 text-sm">
        <li className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-medium">St. Mary&apos;s PU</span>
            <span className="text-xs text-muted">Check-in · GPS · notes · 10:15</span>
          </span>
          <Status tone="money">Visited</Status>
        </li>
        <li className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-medium">City tuition centre</span>
            <span className="text-xs text-muted">Planned · not visited recently</span>
          </span>
          <Status>Planned</Status>
        </li>
      </ol>
    </div>
  );
}

export function FeePlanRecord({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="rounded-2xl border border-line bg-cream p-4"
      role="img"
      aria-label="Illustrative fee plan for a NEET crash course, part paid in cash, with the counselor who enrolled the student. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">NEET crash course</p>
        {compact ? <Status tone="warn">Payment Due</Status> : <SampleCaption>Illustrative sample workspace</SampleCaption>}
      </div>
      <p className="mt-2 text-xs text-muted">Sana M. · enrolled by Counselor R.</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl bg-paper px-3 py-2">
          <dt className="text-muted">Plan price</dt>
          <dd className="mt-1 font-medium">₹85,000</dd>
        </div>
        <div className="rounded-xl bg-paper px-3 py-2">
          <dt className="text-muted">Paid in cash</dt>
          <dd className="mt-1 font-medium">₹20,000</dd>
        </div>
      </dl>
    </div>
  );
}

export function FeePlanList() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-cream"
      role="img"
      aria-label="Illustrative fee-plan list with a plan paid online, a part payment with a payment due, and a UPI payment at the desk. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Fee plans</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <ul className="divide-y divide-line text-sm">
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">PU science</span>
            <span className="text-xs text-muted">Paid online · Razorpay</span>
          </span>
          <Status tone="money">Active</Status>
        </li>
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">NEET crash course</span>
            <span className="text-xs text-muted">₹20,000 of ₹85,000 in cash · Counselor R.</span>
          </span>
          <Status tone="warn">Payment Due</Status>
        </li>
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">Degree · year 2</span>
            <span className="text-xs text-muted">UPI with reference at the desk</span>
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
      aria-label="Illustrative counts from campus visits to admitted referrals to fee plans. Not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Visits to admissions</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <ol className="mt-4 grid grid-cols-2 gap-2 text-center text-xs sm:grid-cols-4">
        {[
          ["Visits", "61"],
          ["Admitted", "24"],
          ["Fees", "₹12.8L"],
          ["Payment due", "11"],
        ].map(([label, value]) => (
          <li key={label} className="rounded-xl bg-quiet px-2 py-3">
            <p className="text-lg font-semibold tabular-nums">{value}</p>
            <p className="mt-1 text-muted">{label}</p>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs leading-5 text-muted">
        Sample layout counts from the education workspace preview. Not a customer result.
      </p>
    </div>
  );
}
