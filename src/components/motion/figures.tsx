import type { ReactNode } from "react";

export const tone = {
  paper: "#F6F1E8",
  cream: "#FBF7F0",
  quiet: "#EFE8DC",
  line: "#DDD4C4",
  ink: "#12141A",
  muted: "#5C574E",
  iris: "#C45C26",
  irisDark: "#9A451C",
  money: "#1F6B4A",
  sand: "#B8AC98",
};

export const ui = "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif";

type Pose = "stand" | "walk" | "phone";

const LIMB = 22;

const limb = (fromX: number, fromY: number, angle: number, length: number) => {
  const rad = (angle * Math.PI) / 180;
  return { x1: fromX, y1: fromY, x2: fromX + Math.sin(rad) * length, y2: fromY + Math.cos(rad) * length };
};

/** The flat figure from the Syclops reels. Drawn in reel units, standing on y. */
export function Person({
  x,
  y,
  size = 1,
  body,
  frame,
  pose = "stand",
  flip = false,
  hair,
  opacity = 1,
}: {
  x: number;
  y: number;
  size?: number;
  body: string;
  frame: number;
  pose?: Pose;
  flip?: boolean;
  hair?: "long" | "ponytail" | "bun";
  opacity?: number;
}) {
  const swing = pose === "walk" ? Math.sin(frame * 0.3) * 24 : 0;
  const bob = pose === "walk" ? Math.abs(Math.cos(frame * 0.3)) * -6 : 0;
  const hipY = -110;
  const shoulderY = hipY - 108;
  const headY = shoulderY - 66;
  const armY = shoulderY + 14;
  const outline = body === tone.cream ? tone.ink : "none";

  const backArm = <line {...limb(-34, armY, -12 - swing * 0.8, 96)} stroke={tone.ink} strokeWidth={LIMB - 2} strokeLinecap="round" />;
  const frontArm: ReactNode =
    pose === "phone" ? (
      <>
        <path d={`M 34 ${armY} L 62 ${armY + 62} L 98 ${armY + 22}`} stroke={tone.ink} strokeWidth={LIMB - 2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x={90} y={armY - 30} width={34} height={58} rx={8} fill={tone.ink} />
        <rect x={95} y={armY - 24} width={24} height={42} rx={4} fill={tone.iris} opacity={0.85} />
      </>
    ) : (
      <line {...limb(34, armY, 12 + swing * 0.8, 96)} stroke={tone.ink} strokeWidth={LIMB - 2} strokeLinecap="round" />
    );

  return (
    <g opacity={opacity} transform={`translate(${x} ${y + bob * size}) scale(${flip ? -size : size} ${size})`}>
      <ellipse cx={0} cy={4} rx={70} ry={10} fill={tone.ink} opacity={0.08} />
      {hair === "long" && <rect x={-46} y={headY - 10} width={92} height={shoulderY - headY + 50} rx={40} fill={tone.ink} />}
      {hair === "ponytail" && (
        <path d={`M -30 ${headY - 26} Q -78 ${headY - 20} -70 ${headY + 46} Q -50 ${headY + 10} -26 ${headY + 6} Z`} fill={tone.ink} />
      )}
      {hair === "bun" && <circle cx={-22} cy={headY - 40} r={20} fill={tone.ink} />}
      {backArm}
      {pose !== "phone" && frontArm}
      <line {...limb(-8, hipY, swing, 110)} stroke={tone.ink} strokeWidth={LIMB} strokeLinecap="round" />
      <line {...limb(8, hipY, -swing, 110)} stroke={tone.ink} strokeWidth={LIMB} strokeLinecap="round" />
      <rect x={-40} y={shoulderY - 12} width={80} height={hipY - shoulderY + 30} rx={36} fill={body} stroke={outline} strokeWidth={outline === "none" ? 0 : 5} />
      {pose === "phone" && frontArm}
      <circle cx={0} cy={headY} r={40} fill={tone.ink} />
    </g>
  );
}

export type BuildingKind = "gym" | "school" | "shop" | "office" | "hospital";

const Sign = ({ y, width, label }: { y: number; width: number; label: string }) => (
  <>
    <rect x={-width / 2} y={y} width={width} height={46} rx={8} fill={tone.ink} />
    <text x={0} y={y + 32} textAnchor="middle" fontFamily={ui} fontWeight={600} fontSize={26} fill={tone.cream}>
      {label}
    </text>
  </>
);

const body = (w: number, h: number) => (
  <rect x={-w / 2} y={-h} width={w} height={h} rx={10} fill={tone.cream} stroke={tone.line} strokeWidth={5} />
);

/** Reel buildings, drawn in reel units with their base on y. */
export function Building({ x, y, kind, label, size = 1 }: { x: number; y: number; kind: BuildingKind; label: string; size?: number }) {
  let shape: ReactNode;
  if (kind === "gym") {
    shape = (
      <>
        {body(340, 280)}
        <g transform="translate(0 -185)">
          <rect x={-70} y={-6} width={140} height={12} rx={6} fill={tone.ink} />
          <rect x={-90} y={-34} width={22} height={68} rx={6} fill={tone.iris} />
          <rect x={68} y={-34} width={22} height={68} rx={6} fill={tone.iris} />
        </g>
        <rect x={-50} y={-110} width={100} height={110} rx={6} fill={tone.line} />
        <Sign y={-340} width={200} label={label} />
      </>
    );
  } else if (kind === "school") {
    shape = (
      <>
        <path d="M -200 -280 L 0 -380 L 200 -280 Z" fill={tone.ink} />
        {body(360, 280)}
        {[-120, -40, 40, 120].map((cx) => (
          <rect key={cx} x={cx - 12} y={-250} width={24} height={250} fill={tone.quiet} />
        ))}
        <rect x={-36} y={-110} width={72} height={110} rx={6} fill={tone.line} />
        <line x1={0} y1={-380} x2={0} y2={-450} stroke={tone.ink} strokeWidth={5} />
        <path d="M 0 -450 h 50 l -12 14 l 12 14 h -50 z" fill={tone.iris} />
        <Sign y={-240} width={250} label={label} />
      </>
    );
  } else if (kind === "shop") {
    shape = (
      <>
        {body(300, 260)}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M ${-160 + i * 53.3} -270 h 53.3 v 50 a 26.6 26.6 0 0 1 -53.3 0 z`}
            fill={i % 2 ? tone.cream : tone.iris}
            stroke={tone.line}
            strokeWidth={3}
          />
        ))}
        <rect x={-120} y={-170} width={110} height={90} rx={6} fill={tone.quiet} />
        <rect x={20} y={-150} width={80} height={150} rx={6} fill={tone.line} />
        <Sign y={-340} width={240} label={label} />
      </>
    );
  } else if (kind === "office") {
    shape = (
      <>
        {body(280, 420)}
        {[0, 1, 2].map((col) =>
          [0, 1, 2, 3].map((row) => (
            <rect key={`${col}${row}`} x={-105 + col * 78} y={-390 + row * 78} width={54} height={50} rx={5} fill={tone.quiet} />
          )),
        )}
        <rect x={-35} y={-80} width={70} height={80} rx={6} fill={tone.ink} />
        <Sign y={-470} width={220} label={label} />
      </>
    );
  } else {
    shape = (
      <>
        <rect x={-190} y={-430} width={380} height={430} rx={14} fill={tone.cream} stroke={tone.line} strokeWidth={5} />
        <rect x={-190} y={-430} width={380} height={64} rx={14} fill={tone.ink} />
        <text x={0} y={-387} textAnchor="middle" fontFamily={ui} fontWeight={600} fontSize={30} fill={tone.cream}>
          {label}
        </text>
        <g transform="translate(0 -300)">
          <rect x={-14} y={-42} width={28} height={84} rx={5} fill={tone.iris} />
          <rect x={-42} y={-14} width={84} height={28} rx={5} fill={tone.iris} />
        </g>
        {[0, 1, 2].map((col) =>
          [0, 1].map((row) => (
            <rect key={`${col}-${row}`} x={-140 + col * 105} y={-230 + row * 70} width={70} height={44} rx={6} fill={tone.quiet} />
          )),
        )}
        <rect x={-45} y={-90} width={90} height={90} rx={8} fill={tone.ink} />
      </>
    );
  }
  return <g transform={`translate(${x} ${y}) scale(${size})`}>{shape}</g>;
}

/** A map pin that drops in; `p` runs 0 → 1. */
export function Pin({ x, y, p, size = 1 }: { x: number; y: number; p: number; size?: number }) {
  return (
    <g opacity={p} transform={`translate(${x} ${y - (1 - p) * 40}) scale(${size})`}>
      <path d="M0 0 C -6 -14 -22 -24 -22 -40 A 22 22 0 0 1 22 -40 C 22 -24 6 -14 0 0 Z" fill={tone.iris} />
      <circle cx={0} cy={-40} r={8} fill={tone.cream} />
    </g>
  );
}

/** A pill drawn in SVG, centred on x. */
export function Chip({
  x,
  y,
  label,
  fill,
  color = tone.cream,
  opacity,
  scale = 1,
  fontSize = 13,
  width,
}: {
  x: number;
  y: number;
  label: string;
  fill: string;
  color?: string;
  opacity: number;
  scale?: number;
  fontSize?: number;
  width: number;
}) {
  const h = fontSize * 2;
  return (
    <g opacity={opacity} transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x={-width / 2} y={-h / 2} width={width} height={h} rx={h / 2} fill={fill} />
      <text x={0} y={fontSize * 0.36} textAnchor="middle" fontFamily={ui} fontWeight={600} fontSize={fontSize} fill={color}>
        {label}
      </text>
    </g>
  );
}
