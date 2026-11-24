"use client";

import { Building, Chip, Person, tone, type BuildingKind } from "./figures";
import { lerp, pop, progress, useLoop } from "./clock";
import type { IndustryId } from "@/lib/industries";

const LOOP = 220;
const GROUND = 118;

type Cast = { body: string; hair?: "long" | "ponytail" | "bun"; pose?: "stand" | "phone" };

const scenes: Record<
  IndustryId,
  { kind: BuildingKind; label: string; lead: Cast; guest: Cast; chip: string; width: number; poster: number }
> = {
  healthcare: {
    kind: "hospital",
    label: "City Hospital",
    lead: { body: tone.sand },
    guest: { body: tone.muted, hair: "long" },
    chip: "Referred by Dr S. Rao · Admitted",
    width: 190,
    poster: 100,
  },
  gyms: {
    kind: "gym",
    label: "FitZone",
    lead: { body: tone.sand, hair: "ponytail" },
    guest: { body: tone.money, hair: "long" },
    chip: "Joined through Priya",
    width: 132,
    poster: 120,
  },
  education: {
    kind: "school",
    label: "St. Mary’s",
    lead: { body: tone.iris, pose: "phone" },
    guest: { body: tone.sand, hair: "ponytail" },
    chip: "Sent by a teacher · Admitted",
    width: 172,
    poster: 150,
  },
  sales: {
    kind: "shop",
    label: "Northwind",
    lead: { body: tone.iris, pose: "phone" },
    guest: { body: tone.muted },
    chip: "Lead from Northwind Retail",
    width: 160,
    poster: 180,
  },
  fintech: {
    kind: "bank",
    label: "Branch",
    lead: { body: tone.muted, pose: "phone" },
    guest: { body: tone.sand },
    chip: "Home loan lead · DSA North",
    width: 166,
    poster: 140,
  },
  medtech: {
    kind: "hospital",
    label: "City Heart",
    lead: { body: tone.iris, pose: "phone" },
    guest: { body: tone.cream },
    chip: "Visited Dr Mehta · City Heart",
    width: 176,
    poster: 170,
  },
};

/** Two people walk up to the business and the record keeps who sent whom. */
export function IndustryScene({ id }: { id: IndustryId }) {
  const scene = scenes[id];
  const [ref, frame] = useLoop<HTMLDivElement>(LOOP, scene.poster);
  const walk = progress(frame, 0, 42);
  const chip = pop(frame, 50);
  const out = 1 - progress(frame, 196, 14);
  const walking = walk > 0 && walk < 1;

  return (
    <div ref={ref} aria-hidden="true" className="-mx-5 -mt-5 mb-4 overflow-hidden rounded-t-2xl border-b border-line bg-cream">
      <svg viewBox="0 0 360 140" className="block h-auto w-full">
        <rect x={0} y={GROUND} width={360} height={22} fill={tone.quiet} />
        <Building x={276} y={GROUND} kind={scene.kind} label={scene.label} size={0.24} />
        <g opacity={out}>
          <Person
            x={lerp(-40, 150, walk)}
            y={GROUND}
            size={0.22}
            frame={frame}
            pose={walking ? "walk" : (scene.lead.pose ?? "stand")}
            body={scene.lead.body}
            hair={scene.lead.hair}
          />
          <Person
            x={lerp(-80, 108, walk)}
            y={GROUND}
            size={0.2}
            frame={frame + 7}
            pose={walking ? "walk" : "stand"}
            body={scene.guest.body}
            hair={scene.guest.hair}
          />
          <Chip
            x={Math.max(scene.width / 2 + 8, 100)}
            y={24}
            width={scene.width}
            label={scene.chip}
            fill={tone.ink}
            opacity={chip.opacity}
            scale={chip.scale}
            fontSize={10}
          />
        </g>
      </svg>
    </div>
  );
}
