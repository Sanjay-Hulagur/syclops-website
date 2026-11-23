"use client";

import { useId, useState } from "react";

const ROWS: [string, string][] = [
  ["Referred by", "Dr S. Rao, general physician, Kukatpally"],
  ["Patient", "R. Kumar, 54"],
  ["Logged by", "Asha (PRO)"],
];

/** A made-up referral, shown in place so the visitor keeps the form in view. */
export function SampleReferral() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="mt-4">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink underline underline-offset-4"
      >
        {open ? "Hide the sample referral" : "See a sample referral"}
        <span aria-hidden="true" className={`transition ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      <div id={panelId} hidden={!open} className="mt-2">
        <div className="rounded-2xl border border-line bg-cream p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">Referral</p>
            <span className="rounded-full border border-dashed border-muted px-2 py-0.5 text-xs text-muted">
              Sample data
            </span>
          </div>
          <dl className="mt-3 grid gap-2 text-sm">
            {ROWS.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[6.5rem_1fr] gap-2">
                <dt className="text-muted">{label}</dt>
                <dd className="text-ink">{value}</dd>
              </div>
            ))}
            <div className="grid grid-cols-[6.5rem_1fr] gap-2">
              <dt className="text-muted">Status</dt>
              <dd>
                <span className="rounded-full bg-money/10 px-2 py-0.5 text-xs font-medium text-money">
                  Admitted
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
