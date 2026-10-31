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
        <span className="text-xs text-muted">Visit · partner · plan</span>
      </figcaption>
      <div className="grid items-start gap-3 sm:grid-cols-[1.05fr_0.95fr]">
        <AccountRecord compact />
        <div className="grid gap-3">
          <BeatList compact />
          <LeadStatus compact />
        </div>
      </div>
      <p className="mt-3 text-xs leading-5 text-muted">
        Sample labels for the records Syclops keeps. Not a customer result.
      </p>
    </figure>
  );
}

export function BeatList({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="rounded-2xl border border-line bg-cream p-4"
      role="img"
      aria-label="Illustrative daily beat with one GPS check-in and one planned account. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Daily beat · West</p>
        {compact ? (
          <Status tone="money">Checked in</Status>
        ) : (
          <SampleCaption>Illustrative sample workspace</SampleCaption>
        )}
      </div>
      <ol className="mt-3 space-y-3 text-sm">
        <li className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-medium">Northwind Retail · Andheri</span>
            <span className="text-xs text-muted">GPS · notes · follow-up</span>
          </span>
          <Status tone="money">Visited</Status>
        </li>
        <li className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-medium">Next account · West</span>
            <span className="text-xs text-muted">Planned · last visit empty</span>
          </span>
          <Status>Planned</Status>
        </li>
      </ol>
      {compact ? null : (
        <p className="mt-3 text-xs text-muted">
          TADA is the path after checkout. A manager approves the sheet.
        </p>
      )}
    </div>
  );
}

export function CheckInPhone() {
  return (
    <div
      className="rounded-[1.6rem] border border-line bg-paper p-3"
      role="img"
      aria-label="Illustrative mobile check-in with GPS, duration, and notes. Sample workspace, not a customer result."
    >
      <div className="rounded-2xl border border-line bg-cream p-3">
        <p className="text-[11px] text-muted">Field app · working day</p>
        <p className="mt-1 text-sm font-medium">Check in at the account</p>
        <dl className="mt-3 space-y-2 text-xs">
          <div className="flex items-center justify-between gap-2 rounded-xl bg-paper px-3 py-2">
            <dt className="text-muted">Location</dt>
            <dd className="font-medium">GPS recorded</dd>
          </div>
          <div className="flex items-center justify-between gap-2 rounded-xl bg-paper px-3 py-2">
            <dt className="text-muted">Visit</dt>
            <dd className="font-medium">Notes · optional photo</dd>
          </div>
          <div className="flex items-center justify-between gap-2 rounded-xl bg-paper px-3 py-2">
            <dt className="text-muted">Day</dt>
            <dd>
              <Status tone="money">Checked in</Status>
            </dd>
          </div>
        </dl>
        <p className="mt-3 text-[11px] leading-5 text-muted">
          GPS runs between check-in and check-out. Not a live map of the evening.
        </p>
      </div>
    </div>
  );
}

export function AccountRecord({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="rounded-2xl border border-line bg-paper p-4"
      role="img"
      aria-label="Illustrative dealer account with territory, last visit, referring partner, and retainer. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Account</p>
        {compact ? <Status>Dealer</Status> : <SampleCaption>Illustrative sample workspace</SampleCaption>}
      </div>
      <p className="mt-2 text-xs text-muted">Northwind Retail · West territory</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Last visit</dt>
          <dd className="mt-1 font-medium">Andheri · on record</dd>
        </div>
        <div className="rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Owner</dt>
          <dd className="mt-1 font-medium">Vikram Sethi</dd>
        </div>
        <div className="col-span-2 rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Referred by</dt>
          <dd className="mt-1 font-medium">Orbit Media · still attached</dd>
        </div>
      </dl>
    </div>
  );
}

export function PartnerPortal() {
  return (
    <div
      className="rounded-[1.6rem] border border-line bg-paper p-3"
      role="img"
      aria-label="Illustrative channel partner portal. The partner sees leads they submitted and status. Sample workspace, not a customer result."
    >
      <div className="rounded-2xl border border-line bg-cream p-3">
        <p className="text-[11px] text-muted">Partner portal · not a field seat</p>
        <p className="mt-1 text-sm font-medium">Orbit Media</p>
        <p className="mt-3 rounded-xl border border-dashed border-line bg-quiet px-3 py-4 text-center text-xs text-muted">
          Submit a lead · link in the browser
        </p>
        <ul className="mt-3 space-y-2 text-xs">
          <li className="flex items-center justify-between gap-2">
            <span>New account · sent today</span>
            <Status>Sent</Status>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Northwind Retail</span>
            <Status tone="money">Paying</Status>
          </li>
          <li className="flex items-center justify-between gap-2">
            <span>Same phone blocked</span>
            <Status tone="warn">Duplicate</Status>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function LeadStatus({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-cream"
      role="img"
      aria-label="Illustrative partner lead with referrer and status from sent to converted. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Partner lead</p>
        {compact ? (
          <Status tone="money">Converted</Status>
        ) : (
          <SampleCaption>Illustrative sample workspace</SampleCaption>
        )}
      </div>
      <dl className="grid gap-2 px-4 py-3 text-xs">
        <div className="flex items-center justify-between gap-3">
          <dt className="text-muted">Referrer</dt>
          <dd className="font-medium">Orbit Media</dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-muted">Account</dt>
          <dd className="font-medium">Northwind Retail</dd>
        </div>
        <div className="flex items-center justify-between gap-3">
          <dt className="text-muted">Status</dt>
          <dd>Sent → converted → paying</dd>
        </div>
      </dl>
    </div>
  );
}

export function PlanRecord({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="rounded-2xl border border-line bg-cream p-4"
      role="img"
      aria-label="Illustrative retainer with referrer, renewal date, and payment status. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Growth retainer</p>
        {compact ? (
          <Status tone="warn">Due soon</Status>
        ) : (
          <SampleCaption>Illustrative sample workspace</SampleCaption>
        )}
      </div>
      <p className="mt-2 text-xs text-muted">Northwind Retail · referred by Orbit Media</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl bg-paper px-3 py-2">
          <dt className="text-muted">Renewal</dt>
          <dd className="mt-1 font-medium">Invoice due 5th</dd>
        </div>
        <div className="rounded-xl bg-paper px-3 py-2">
          <dt className="text-muted">Amount</dt>
          <dd className="mt-1 font-medium">₹75,000</dd>
        </div>
        <div className="col-span-2 rounded-xl bg-paper px-3 py-2">
          <dt className="text-muted">Follow-up</dt>
          <dd className="mt-1 font-medium">Visible to the account owner</dd>
        </div>
      </dl>
    </div>
  );
}

export function RenewalList() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-cream"
      role="img"
      aria-label="Illustrative plan list with a paying retainer, one due soon, and one failed payment. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Recurring plans</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <ul className="divide-y divide-line text-sm">
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">12-month retainer</span>
            <span className="text-xs text-muted">Paying · referrer still attached</span>
          </span>
          <Status tone="money">Paying</Status>
        </li>
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">Invoice due 5th</span>
            <span className="text-xs text-muted">₹75,000 · owner named</span>
          </span>
          <Status tone="warn">Due soon</Status>
        </li>
        <li className="flex items-center justify-between gap-3 px-4 py-3">
          <span>
            <span className="block font-medium">Failed debit</span>
            <span className="text-xs text-muted">Follow-up after your retry schedule</span>
          </span>
          <Status tone="leak">Failed</Status>
        </li>
      </ul>
    </div>
  );
}

export function LoopHealth() {
  return (
    <div
      className="rounded-2xl border border-line bg-cream p-4"
      role="img"
      aria-label="Illustrative loop health counts for visits, partner leads, retainers, and at-risk accounts. Sample workspace, not a customer result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Loop health</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <ol className="mt-4 grid grid-cols-2 gap-2 text-center text-xs sm:grid-cols-4">
        {[
          ["Visits", "54"],
          ["Partner leads", "16"],
          ["Retainers", "₹9.2L"],
          ["At risk", "5"],
        ].map(([label, value]) => (
          <li key={label} className="rounded-xl bg-quiet px-2 py-3">
            <p className="text-lg font-semibold tabular-nums">{value}</p>
            <p className="mt-1 text-muted">{label}</p>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-xs leading-5 text-muted">
        Sample counts for a sales workspace preview. Not a customer result.
      </p>
    </div>
  );
}
