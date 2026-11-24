"use client";

import { Building, Chip, Person, Pin, tone, ui } from "./figures";
import { lerp, pop, progress, rise, useLoop } from "./clock";

const LOOP = 400;
const POSTER = 310;
const GROUND = 300;
const SIZE = 0.4;

const STAGES = [
  { label: "Pending", date: "9 Nov", at: 200 },
  { label: "Admitted", date: "11 Nov", at: 255 },
  { label: "Discharged", date: "14 Nov", at: 290 },
];

/** A made-up hospital referral played out like the reels. Show only fields and statuses the app records today. */
export function HeroScene() {
  const [ref, frame] = useLoop<HTMLElement>(LOOP, POSTER);
  const out = 1 - progress(frame, 372, 14);
  const walkIn = progress(frame, 0, 48);
  const pin = progress(frame, 52, 12);
  const gps = pop(frame, 60);
  const photo = pop(frame, 72);
  const bubble = pop(frame, 110, 14);
  const patientIn = progress(frame, 150, 10);
  const patientWalk = progress(frame, 205, 45);
  const patientGone = progress(frame, 250, 12);
  const card = rise(frame, 185, 24, 16);
  const reached = STAGES.filter((stage) => frame >= stage.at).length;

  return (
    <figure ref={ref} className="mx-auto w-full max-w-lg lg:max-w-none">
      <figcaption className="sr-only">
        A sample hospital referral in Syclops: a PRO checks in at a doctor’s clinic with GPS and a
        photo, the doctor refers a patient, and the referral moves from pending to admitted to
        discharged.
      </figcaption>
      <div className="overflow-hidden rounded-3xl border border-line bg-cream">
        <svg viewBox="0 0 560 380" aria-hidden="true" className="block h-auto w-full">
          <rect x={0} y={GROUND} width={560} height={80} fill={tone.quiet} />
          <Building x={300} y={GROUND} kind="clinic" label="Rao Clinic" size={0.4} />
          <Building x={478} y={GROUND} kind="hospital" label="City Hospital" size={0.3} />
          <Person x={222} y={GROUND} size={SIZE} body={tone.cream} frame={frame} />
          <Person
            x={lerp(372, 478, patientWalk)}
            y={GROUND}
            size={0.3}
            body={tone.sand}
            pose={patientWalk > 0 && patientWalk < 1 ? "walk" : "stand"}
            frame={frame}
            opacity={Math.min(out, patientIn, 1 - patientGone)}
          />
          <Person
            x={lerp(-50, 124, walkIn)}
            y={GROUND}
            size={SIZE}
            body={tone.iris}
            pose={walkIn < 1 ? "walk" : "phone"}
            frame={frame}
            opacity={out}
          />
          <Pin x={140} y={160} p={pin * out} size={0.8} />
          <Chip x={130} y={40} width={224} label="✓ GPS checked in · 9 Nov, 10:42" fill={tone.money} opacity={gps.opacity * out} scale={gps.scale} fontSize={12} />
          <Chip x={130} y={72} width={224} label="Photo with place and time" fill={tone.ink} opacity={photo.opacity * out} scale={photo.scale} fontSize={12} />
          <g opacity={bubble.opacity * out} transform={`translate(300 124) scale(${bubble.scale})`}>
            <rect x={-108} y={-24} width={216} height={44} rx={16} fill={tone.cream} stroke={tone.ink} strokeWidth={2} />
            <path d="M -70 19 l -8 10 l 20 -10" fill={tone.cream} stroke={tone.ink} strokeWidth={2} strokeLinejoin="round" />
            <rect x={-76} y={16} width={24} height={4} fill={tone.cream} />
            <text x={0} y={2} textAnchor="middle" fontFamily={ui} fontWeight={600} fontSize={12} fill={tone.ink}>
              “Sending Mr Kumar for cardiology.”
            </text>
          </g>
        </svg>
      </div>

      <div
        className="relative mx-3 -mt-10 rounded-2xl border border-line bg-paper p-4 shadow-[0_18px_40px_-24px_rgba(18,20,26,0.35)] sm:ml-10 sm:mr-0"
        style={{ opacity: card.opacity * out, transform: card.transform }}
      >
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">Patient referral</p>
          <span className="rounded-full border border-dashed border-muted px-2 py-0.5 text-xs text-muted">
            Sample data
          </span>
        </div>
        <p className="display mt-2 text-lg font-semibold">R. Kumar</p>
        <p className="text-sm text-muted">
          Referred by Dr S. Rao, Rao Clinic · logged by Kiran, PRO
        </p>
        <ol aria-label="Status" className="mt-4 grid grid-cols-3 gap-2">
          {STAGES.map((stage, index) => {
            const fill = progress(frame, stage.at, 10);
            const current = index === reached - 1;
            return (
              <li key={stage.label} aria-current={current ? "step" : undefined}>
                <span aria-hidden="true" className="block h-1.5 overflow-hidden rounded-full bg-ink/10">
                  <span
                    className={`block h-full rounded-full ${current ? "bg-money" : "bg-ink/60"}`}
                    style={{ width: `${fill * 100}%` }}
                  />
                </span>
                <p className={`mt-2 text-xs font-medium ${current ? "text-money" : ""}`} style={{ opacity: 0.35 + fill * 0.65 }}>
                  {stage.label}
                </p>
                <p className="text-xs text-muted" style={{ opacity: 0.35 + fill * 0.65 }}>
                  {stage.date}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </figure>
  );
}
