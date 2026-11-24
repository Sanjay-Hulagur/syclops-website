const STAGES = [
  { label: "Pending", date: "9 Nov" },
  { label: "Arrived", date: "11 Nov" },
  { label: "Admitted", date: "14 Nov" },
];

/** A made-up referral and the visit behind it. Show only fields and statuses the app records today. */
export function ReferralPreview() {
  return (
    <figure className="mx-auto w-full max-w-md">
      <figcaption className="sr-only">
        A sample referral in Syclops, with the field visit that led to it.
      </figcaption>
      <div className="rounded-3xl border border-line bg-cream p-5 shadow-[0_18px_40px_-24px_rgba(18,20,26,0.35)]">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">Referral</p>
          <span className="rounded-full border border-dashed border-muted px-2 py-0.5 text-xs text-muted">
            Sample data
          </span>
        </div>
        <p className="display mt-3 text-xl font-semibold">Aditi Sharma</p>
        <p className="text-sm text-muted">Class 12 · asking about the weekend batch</p>
        <dl className="mt-4 grid gap-2 text-sm">
          <div className="grid grid-cols-[5.5rem_1fr] gap-2">
            <dt className="text-muted">Sent by</dt>
            <dd>Mrs Fernandes, Greenwood High School</dd>
          </div>
          <div className="grid grid-cols-[5.5rem_1fr] gap-2">
            <dt className="text-muted">Logged by</dt>
            <dd>Farhan, counselor</dd>
          </div>
        </dl>
        <ol aria-label="Status" className="mt-5 grid grid-cols-3 gap-2">
          {STAGES.map((stage, index) => {
            const current = index === STAGES.length - 1;
            return (
              <li key={stage.label} aria-current={current ? "step" : undefined}>
                <span
                  aria-hidden="true"
                  className={`block h-1.5 rounded-full ${current ? "bg-money" : "bg-ink/60"}`}
                />
                <p className={`mt-2 text-xs font-medium ${current ? "text-money" : ""}`}>
                  {stage.label}
                </p>
                <p className="text-xs text-muted">{stage.date}</p>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="relative mt-3 rounded-2xl border border-line bg-paper p-4 sm:ml-10 lg:-mt-5 lg:ml-14">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">Visit</p>
          <p className="text-xs text-muted">9 Nov, 10:42</p>
        </div>
        <p className="mt-1 text-sm text-muted">Greenwood High School · Farhan</p>
        <ul className="mt-3 flex flex-wrap gap-2 text-xs">
          <li className="rounded-full bg-money/10 px-2 py-0.5 font-medium text-money">
            GPS checked in
          </li>
          <li className="rounded-full bg-quiet px-2 py-0.5">Photo with place and time</li>
        </ul>
      </div>
    </figure>
  );
}
