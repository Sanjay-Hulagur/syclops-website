import type { ReactNode } from "react";
import type { IndustryId } from "@/lib/industries";

const stroke = {
  fill: "none",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "stroke-ink",
};

function Pin() {
  return (
    <g {...stroke}>
      <path d="M8 1.7a4.3 4.3 0 0 0-4.3 4.3c0 3 4.3 8.1 4.3 8.1s4.3-5.1 4.3-8.1A4.3 4.3 0 0 0 8 1.7z" />
      <circle cx="8" cy="6" r="1.45" />
    </g>
  );
}

function Person() {
  return (
    <g {...stroke}>
      <circle cx="8" cy="5" r="2.15" />
      <path d="M3.3 14.2c.45-2.9 2.25-4.5 4.7-4.5s4.25 1.6 4.7 4.5" />
    </g>
  );
}

function Pair() {
  return (
    <g {...stroke}>
      <circle cx="5.4" cy="5.4" r="1.7" />
      <path d="M2.1 13.4c.35-2.2 1.6-3.4 3.3-3.4s2.95 1.2 3.3 3.4" />
      <circle cx="10.8" cy="6.1" r="1.7" />
      <path d="M7.6 13.8c.3-2.05 1.5-3.15 3.2-3.15s2.9 1.1 3.2 3.15" />
    </g>
  );
}

function Doctor() {
  return (
    <g>
      <Person />
      <path
        d="M12.1 2.6v3.1M10.55 4.15h3.1"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
        className="stroke-iris"
      />
    </g>
  );
}

function Partners() {
  return (
    <g {...stroke}>
      <circle cx="4.7" cy="8" r="2.15" />
      <circle cx="11.3" cy="8" r="2.15" />
      <path d="M6.85 8h2.3" />
    </g>
  );
}

function Campus() {
  return (
    <g {...stroke}>
      <path d="M2.2 7.2 8 3.4l5.8 3.8" />
      <path d="M3.6 7.4V13h8.8V7.4" />
      <path d="M6.6 13V9.6h2.8V13" />
    </g>
  );
}

function Card() {
  return (
    <g {...stroke}>
      <rect x="2.2" y="4" width="11.6" height="8" rx="1.3" />
      <path d="M2.2 7h11.6" />
    </g>
  );
}

function Fee() {
  return (
    <g {...stroke}>
      <path d="M4 2.2h5.1L12.6 5.6V14H4z" />
      <path d="M9.1 2.4V5.6h3.3" />
      <path d="M6.1 8.3h4.4M6.1 10.9h2.8" />
    </g>
  );
}

function Slip() {
  return (
    <g {...stroke}>
      <rect x="3.8" y="3.7" width="8.4" height="10.2" rx="1.2" />
      <rect x="6" y="2" width="4" height="2.5" rx="0.6" />
      <path d="M6 8h4M6 10.5h2.6" />
    </g>
  );
}

function Renew() {
  return (
    <g {...stroke}>
      <path d="M11.6 6.1A4.1 4.1 0 1 0 12 9.4" />
      <path d="M11.2 3.8v2.6h2.5" />
    </g>
  );
}

function Shield() {
  return (
    <g {...stroke}>
      <path d="M8 2.1 13 4.1v3.5c0 3.15-2.15 5.15-5 6.35C5.15 12.75 3 10.75 3 7.6V4.1z" />
    </g>
  );
}

function Device() {
  return (
    <g {...stroke}>
      <rect x="2.3" y="3.1" width="11.4" height="7.5" rx="1.1" />
      <path d="M6.2 13.3h3.6M8 10.6v2.7" />
    </g>
  );
}

const nouns: Record<IndustryId, [ReactNode, ReactNode, ReactNode]> = {
  gyms: [<Pin key="v" />, <Person key="r" />, <Card key="p" />],
  education: [<Pin key="v" />, <Pair key="r" />, <Fee key="p" />],
  healthcare: [<Pin key="v" />, <Doctor key="r" />, <Slip key="p" />],
  sales: [<Pin key="v" />, <Partners key="r" />, <Renew key="p" />],
  fintech: [<Pin key="v" />, <Person key="r" />, <Shield key="p" />],
  medtech: [<Pin key="v" />, <Campus key="r" />, <Device key="p" />],
};

const begin: Record<IndustryId, string> = {
  gyms: "0s",
  education: "0.45s",
  healthcare: "0.9s",
  sales: "1.35s",
  fintech: "1.8s",
  medtech: "2.25s",
};

const pulses = ["sy-dot stroke-iris", "sy-dot-d stroke-iris", "sy-dot-e stroke-money"] as const;
const xs = [20, 84, 148] as const;

export function IndustryMark({ id }: { id: IndustryId }) {
  const [visit, referrer, plan] = nouns[id];

  return (
    <svg
      viewBox="0 0 168 56"
      aria-hidden="true"
      className="mb-4 h-12 w-auto"
    >
      <path d="M20 18H148" className="fill-none stroke-line" strokeWidth="1.25" />
      <path
        d="M148 28C112 50 56 50 20 28"
        className="sy-dash-loop fill-none stroke-iris"
        strokeWidth="1.25"
        strokeLinecap="round"
        style={{ animationDelay: begin[id] }}
      />
      {[visit, referrer, plan].map((icon, index) => (
        <g key={xs[index]}>
          <circle
            cx={xs[index]}
            cy={18}
            r={13}
            className={`fill-none ${pulses[index]}`}
            strokeWidth="1.25"
          />
          <circle
            cx={xs[index]}
            cy={18}
            r={10}
            className="fill-cream stroke-ink"
            strokeWidth="1.15"
          />
          <g transform={`translate(${xs[index]} 18) scale(0.68) translate(-8 -8)`}>{icon}</g>
        </g>
      ))}
      <circle r="2.35" className="industry-move fill-iris">
        <animateMotion
          dur="3.2s"
          begin={begin[id]}
          repeatCount="indefinite"
          path="M20,18 L148,18"
        />
      </circle>
    </svg>
  );
}
