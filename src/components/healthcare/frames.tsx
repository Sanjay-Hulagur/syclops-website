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
        <span className="text-xs text-muted">Doctor · visit · referral</span>
      </figcaption>
      <div className="grid items-start gap-3 sm:grid-cols-[1.05fr_0.95fr]">
        <DoctorRecord compact />
        <div className="grid gap-3">
          <FieldDay compact />
          <ReferralRecord compact />
        </div>
      </div>
      <p className="mt-3 text-xs leading-5 text-muted">
        Sample labels for the records Syclops keeps. Not a hospital result.
      </p>
    </figure>
  );
}

export function DoctorRecord({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="rounded-2xl border border-line bg-paper p-4"
      role="img"
      aria-label="Illustrative referral doctor record with specialty, territory, last visit, assigned PRO, and referral activity. Sample workspace, not a hospital result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Referral doctor</p>
        {compact ? <Status>Cardiology</Status> : <SampleCaption>Illustrative sample workspace</SampleCaption>}
      </div>
      <p className="mt-2 text-xs text-muted">Dr. Shah · North territory</p>
      <dl className="mt-3 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Last visit</dt>
          <dd className="mt-1 font-medium">On the record</dd>
        </div>
        <div className="rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Assigned PRO</dt>
          <dd className="mt-1 font-medium">Named owner</dd>
        </div>
        <div className="col-span-2 rounded-xl bg-cream px-3 py-2">
          <dt className="text-muted">Referral activity</dt>
          <dd className="mt-1 font-medium">History stays on this doctor</dd>
        </div>
      </dl>
    </div>
  );
}

export function FieldDay({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="rounded-2xl border border-line bg-cream p-4"
      role="img"
      aria-label="Illustrative PRO day with one GPS check-in and one planned visit. Sample workspace, not a hospital result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">PRO day</p>
        {compact ? <Status tone="money">Checked in</Status> : <SampleCaption>Illustrative sample workspace</SampleCaption>}
      </div>
      <ol className="mt-3 space-y-3 text-sm">
        <li className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-medium">Clinic visit</span>
            <span className="text-xs text-muted">GPS · notes · follow-up</span>
          </span>
          <Status tone="money">Done</Status>
        </li>
        <li className="flex items-start justify-between gap-3">
          <span>
            <span className="block font-medium">Next clinic</span>
            <span className="text-xs text-muted">Planned · still pending</span>
          </span>
          <Status>Planned</Status>
        </li>
      </ol>
      {compact ? null : (
        <p className="mt-3 text-xs text-muted">TADA writes from the path after checkout.</p>
      )}
    </div>
  );
}

export function ReferralRecord({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-cream"
      role="img"
      aria-label="Illustrative patient referral with originating doctor, date, and status. Hospital visit matching is shown only where an HIS connector exists. Sample workspace, not a hospital result."
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Patient referral</p>
        {compact ? <Status>Sent</Status> : <SampleCaption>Illustrative sample workspace</SampleCaption>}
      </div>
      <dl className="grid gap-px bg-line text-xs sm:grid-cols-2">
        <div className="bg-cream px-4 py-3">
          <dt className="text-muted">Originating doctor</dt>
          <dd className="mt-1 font-medium">Dr. Shah</dd>
        </div>
        <div className="bg-cream px-4 py-3">
          <dt className="text-muted">Referral date</dt>
          <dd className="mt-1 font-medium">On the record</dd>
        </div>
        <div className="bg-cream px-4 py-3 sm:col-span-2">
          <dt className="text-muted">Hospital outcome</dt>
          <dd className="mt-1 font-medium">OP or IP match only where an HIS connector is configured</dd>
        </div>
      </dl>
    </div>
  );
}

export function PerformanceBoard() {
  const rows: { label: string; detail: string; status: string; tone: "quiet" | "money" | "warn" }[] = [
    { label: "Doctor-wise", detail: "Grouped by the referring doctor", status: "Growth", tone: "money" },
    { label: "Location-wise", detail: "Grouped by region", status: "Growth", tone: "money" },
    { label: "Specialty", detail: "Stored on each doctor", status: "On record", tone: "quiet" },
    { label: "OPD and IPD", detail: "Matched when HIS is connected", status: "Scale", tone: "warn" },
  ];

  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-cream"
      role="img"
      aria-label="Illustrative referral performance: doctor-wise and location-wise on Growth, specialty on each doctor, and OPD or IPD when an HIS connector is configured. Not a hospital result."
    >
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <p className="text-sm font-medium">Referral performance</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <ul className="divide-y divide-line text-sm">
        {rows.map((row) => (
          <li key={row.label} className="flex items-center justify-between gap-3 px-4 py-3">
            <span>
              <span className="block font-medium">{row.label}</span>
              <span className="text-xs text-muted">{row.detail}</span>
            </span>
            <Status tone={row.tone}>{row.status}</Status>
          </li>
        ))}
      </ul>
      <p className="border-t border-line px-4 py-3 text-xs leading-5 text-muted">
        Report names, not a hospital’s numbers. Specialty is on the doctor. An OPD or IPD match appears where an HIS connector is configured.
      </p>
    </div>
  );
}

export function CampRecord() {
  return (
    <div
      className="rounded-2xl border border-line bg-paper p-4"
      role="img"
      aria-label="Illustrative health camp with location, dates, assigned staff, and a lead tagged for follow-up. Sample workspace, not a hospital result."
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium">Health camp</p>
        <SampleCaption>Illustrative sample workspace</SampleCaption>
      </div>
      <p className="mt-2 text-xs text-muted">Location · start and end dates · expected participants</p>
      <ul className="mt-3 space-y-2 text-sm">
        <li className="flex items-center justify-between gap-3">
          <span>Doctors, nurses, supporting staff</span>
          <Status>Assigned</Status>
        </li>
        <li className="flex items-center justify-between gap-3">
          <span>Lead tagged to this camp</span>
          <Status tone="warn">Follow-up</Status>
        </li>
        <li className="flex items-center justify-between gap-3">
          <span>Camp report</span>
          <Status tone="quiet">When it closes</Status>
        </li>
      </ul>
    </div>
  );
}
