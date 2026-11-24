"use client";

import type { ReactNode } from "react";
import { Building, Chip, Person, Pin, tone, ui } from "./figures";
import { lerp, pop, progress, useLoop } from "./clock";

const LOOP = 240;
const GROUND = 160;

function Panel({ label, frame, children }: { label: string; frame: number; children: ReactNode }) {
  const out = 1 - progress(frame, 214, 14);
  return (
    <svg viewBox="0 0 320 190" role="img" aria-label={label} className="block h-auto w-full">
      <rect x={0} y={GROUND} width={320} height={30} fill={tone.quiet} />
      <g opacity={out}>{children}</g>
    </svg>
  );
}

function Rows({
  frame,
  title,
  rows,
}: {
  frame: number;
  title: string;
  rows: { name: string; at: number; status?: { label: string; fill: string; color?: string; width: number; at: number } }[];
}) {
  const card = progress(frame, 0, 12);
  return (
    <g opacity={card} transform={`translate(0 ${(1 - card) * 10})`}>
      <rect x={150} y={18} width={156} height={128} rx={12} fill={tone.cream} stroke={tone.line} strokeWidth={1.5} />
      <text x={164} y={40} fontFamily={ui} fontSize={9} fontWeight={600} letterSpacing="0.08em" fill={tone.muted}>
        {title.toUpperCase()}
      </text>
      {rows.map((row, index) => {
        const p = progress(frame, row.at, 12);
        const status = row.status ? pop(frame, row.status.at) : null;
        const y = 64 + index * 28;
        return (
          <g key={row.name}>
            <g opacity={p} transform={`translate(${(1 - p) * 8} 0)`}>
              <text x={164} y={y + 4} fontFamily={ui} fontSize={11} fontWeight={500} fill={tone.ink}>
                {row.name}
              </text>
            </g>
            {index < rows.length - 1 && <line x1={164} x2={292} y1={y + 14} y2={y + 14} stroke={tone.line} strokeWidth={1} />}
            {row.status && status && (
              <Chip
                x={292 - row.status.width / 2}
                y={y}
                width={row.status.width}
                label={row.status.label}
                fill={row.status.fill}
                color={row.status.color}
                opacity={status.opacity}
                scale={status.scale}
                fontSize={9}
              />
            )}
          </g>
        );
      })}
    </g>
  );
}

/** Step 1: the field team joins, then the people who send referrals. */
export function TeamScene() {
  const [ref, frame] = useLoop<HTMLDivElement>(LOOP, 160);
  const upload = pop(frame, 96);
  return (
    <div ref={ref}>
      <Panel label="Three field staff join, and a list of referrers fills in." frame={frame}>
        {[34, 76, 118].map((x, index) => {
          const p = progress(frame, 8 + index * 10, 14);
          return <Person key={x} x={x} y={GROUND - (1 - p) * 12} size={0.28} body={tone.iris} frame={frame} opacity={p} />;
        })}
        <Rows
          frame={frame}
          title="Referrers"
          rows={[
            { name: "Greenwood High", at: 44 },
            { name: "Northwind Retail", at: 56 },
            { name: "Priya, member", at: 68 },
          ]}
        />
        <Chip x={228} y={164} width={156} label="Uploaded from a spreadsheet" fill={tone.ink} opacity={upload.opacity} scale={upload.scale} fontSize={9} />
      </Panel>
    </div>
  );
}

/** Step 2: a rep checks in at a partner with GPS and a photo. */
export function VisitScene() {
  const [ref, frame] = useLoop<HTMLDivElement>(LOOP, 170);
  const walk = progress(frame, 0, 44);
  const pin = progress(frame, 48, 12);
  const gps = pop(frame, 56);
  const photo = pop(frame, 68);
  return (
    <div ref={ref}>
      <Panel label="A rep walks to a partner store and checks in with GPS and a photo." frame={frame}>
        <Building x={258} y={GROUND} kind="shop" label="Northwind" size={0.32} />
        <Person
          x={lerp(-30, 112, walk)}
          y={GROUND}
          size={0.3}
          body={tone.iris}
          pose={walk < 1 ? "walk" : "phone"}
          frame={frame}
        />
        <Pin x={112} y={56} p={pin} size={0.6} />
        <Chip x={250} y={14} width={118} label="✓ GPS checked in" fill={tone.money} opacity={gps.opacity} scale={gps.scale} fontSize={10} />
        <Chip x={250} y={38} width={118} label="Photo · 10:42" fill={tone.ink} opacity={photo.opacity} scale={photo.scale} fontSize={10} />
      </Panel>
    </div>
  );
}

/** Step 3: each referral shows where it stands, and a conversion is recorded. */
export function OutcomeScene() {
  const [ref, frame] = useLoop<HTMLDivElement>(LOOP, 180);
  const convert = pop(frame, 104);
  return (
    <div ref={ref}>
      <Panel label="Three referrals show pending, arrived and did not visit, and one is marked as a conversion." frame={frame}>
        <Person x={60} y={GROUND} size={0.3} body={tone.muted} pose="phone" frame={frame} />
        <Rows
          frame={frame}
          title="Referrals"
          rows={[
            { name: "Neha Joshi", at: 10, status: { label: "Pending", fill: tone.quiet, color: tone.ink, width: 52, at: 30 } },
            { name: "Ravi Shah", at: 18, status: { label: "Arrived", fill: tone.money, width: 52, at: 50 } },
            { name: "Amit Rao", at: 26, status: { label: "Did not visit", fill: tone.muted, width: 66, at: 70 } },
          ]}
        />
        <Chip x={228} y={164} width={150} label="✓ Ravi Shah · conversion" fill={tone.iris} opacity={convert.opacity} scale={convert.scale} fontSize={9} />
      </Panel>
    </div>
  );
}
