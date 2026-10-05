import type { ReactNode } from "react";

export type SceneKind =
  | "loop"
  | "field"
  | "referral"
  | "subscription"
  | "analytics"
  | "mobile"
  | "integrations"
  | "industry"
  | "compare"
  | "customers"
  | "pricing"
  | "security"
  | "blog"
  | "start"
  | "legal";

function Frame({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <svg
      viewBox="0 0 320 220"
      role="img"
      aria-label={label}
      className="mx-auto w-full max-w-sm"
    >
      {children}
    </svg>
  );
}

export function SvgScene({ kind }: { kind: SceneKind }) {
  if (kind === "field") {
    return (
      <Frame label="Field visits on a quiet map">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        <path
          d="M40 160 C80 90, 140 170, 190 110 S280 80, 292 120"
          fill="none"
          stroke="#c45c26"
          strokeWidth="1.4"
          className="sy-draw"
        />
        <circle cx="72" cy="128" r="5" fill="#c45c26" className="sy-dot" />
        <circle cx="168" cy="132" r="5" fill="#12141a" className="sy-dot-d" />
        <circle cx="248" cy="96" r="5" fill="#c45c26" className="sy-dot-e" />
        <g className="sy-float">
          <rect x="48" y="36" width="92" height="36" rx="12" fill="#efe8dc" />
          <circle cx="66" cy="54" r="6" fill="#c45c26" />
        </g>
      </Frame>
    );
  }

  if (kind === "referral") {
    return (
      <Frame label="A referral passing from one person to another">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        <path
          d="M70 110 C120 70, 200 70, 250 110"
          fill="none"
          stroke="#c45c26"
          strokeWidth="1.5"
          className="sy-draw"
        />
        <circle cx="70" cy="110" r="22" fill="#efe8dc" stroke="#12141a" />
        <circle cx="250" cy="110" r="22" fill="#efe8dc" stroke="#c45c26" className="sy-breathe" />
        <circle cx="160" cy="78" r="6" fill="#c45c26" className="sy-dot" />
      </Frame>
    );
  }

  if (kind === "subscription") {
    return (
      <Frame label="Stacked subscription plans">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        <g className="sy-float">
          <rect x="70" y="48" width="180" height="44" rx="12" fill="#efe8dc" stroke="#ddd4c4" />
        </g>
        <g className="sy-float-d">
          <rect x="58" y="88" width="204" height="52" rx="14" fill="#fbf7f0" stroke="#c45c26" />
          <circle cx="86" cy="114" r="8" fill="#c45c26" className="sy-breathe" />
        </g>
        <rect x="82" y="148" width="156" height="28" rx="10" fill="#efe8dc" />
      </Frame>
    );
  }

  if (kind === "analytics") {
    return (
      <Frame label="Quiet revenue bars">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x={48 + i * 40}
            y={70 + (i % 3) * 12}
            width="22"
            height={90 - (i % 3) * 12}
            rx="6"
            fill={i === 3 ? "#c45c26" : "#efe8dc"}
            className={i % 2 ? "sy-float" : "sy-float-d"}
          />
        ))}
      </Frame>
    );
  }

  if (kind === "mobile") {
    return (
      <Frame label="Three quiet phone frames">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        {[0, 1, 2].map((i) => (
          <g
            key={i}
            className={i === 1 ? "sy-float" : "sy-float-d"}
            transform={`translate(${58 + i * 78} 42)`}
          >
            <rect width="56" height="136" rx="14" fill="#efe8dc" stroke="#ddd4c4" />
            <circle cx="28" cy="14" r="3" fill="#c45c26" className="sy-dot" />
          </g>
        ))}
      </Frame>
    );
  }

  if (kind === "integrations") {
    return (
      <Frame label="Named systems around Syclops">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        <circle cx="160" cy="110" r="28" fill="#c45c26" className="sy-breathe" />
        <circle cx="160" cy="110" r="70" fill="none" stroke="#ddd4c4" className="sy-orbit sy-dash" />
        <circle cx="160" cy="40" r="8" fill="#efe8dc" stroke="#12141a" />
        <circle cx="230" cy="110" r="8" fill="#efe8dc" stroke="#12141a" />
        <circle cx="160" cy="180" r="8" fill="#efe8dc" stroke="#12141a" />
        <circle cx="90" cy="110" r="8" fill="#efe8dc" stroke="#12141a" />
      </Frame>
    );
  }

  if (kind === "industry") {
    return (
      <Frame label="Same loop, different nouns">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        <g className="sy-orbit-rev">
          <circle cx="160" cy="110" r="54" fill="none" stroke="#c45c26" className="sy-dash" />
        </g>
        <text x="160" y="106" textAnchor="middle" fontSize="11" fill="#12141a">
          visit
        </text>
        <text x="160" y="122" textAnchor="middle" fontSize="11" fill="#5c574e">
          plan
        </text>
      </Frame>
    );
  }

  if (kind === "compare") {
    return (
      <Frame label="Two columns, one loop">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        <rect x="36" y="48" width="112" height="124" rx="16" fill="#efe8dc" />
        <rect x="172" y="48" width="112" height="124" rx="16" fill="#fbf7f0" stroke="#c45c26" />
        <circle cx="228" cy="110" r="16" fill="#c45c26" className="sy-breathe" />
      </Frame>
    );
  }

  if (kind === "pricing") {
    return (
      <Frame label="Self-serve plans">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        <rect x="40" y="58" width="70" height="108" rx="16" fill="#efe8dc" className="sy-float" />
        <rect x="124" y="42" width="78" height="132" rx="16" fill="#fbf7f0" stroke="#c45c26" className="sy-float-d" />
        <rect x="216" y="58" width="70" height="108" rx="16" fill="#efe8dc" />
      </Frame>
    );
  }

  if (kind === "security") {
    return (
      <Frame label="A closed iris, not a lock cliché">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        <circle cx="160" cy="110" r="58" fill="none" stroke="#12141a" />
        <circle cx="160" cy="110" r="28" fill="none" stroke="#c45c26" className="sy-orbit sy-dash" />
        <circle cx="160" cy="110" r="8" fill="#c45c26" className="sy-breathe" />
      </Frame>
    );
  }

  if (kind === "blog" || kind === "customers") {
    return (
      <Frame label="Quiet stacked notes">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        <rect x="52" y="48" width="216" height="36" rx="10" fill="#efe8dc" className="sy-float" />
        <rect x="52" y="94" width="176" height="36" rx="10" fill="#efe8dc" className="sy-float-d" />
        <rect x="52" y="140" width="196" height="36" rx="10" fill="#efe8dc" />
      </Frame>
    );
  }

  if (kind === "start") {
    return (
      <Frame label="Create a workspace">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        <rect x="70" y="54" width="180" height="112" rx="18" fill="#efe8dc" />
        <circle cx="160" cy="100" r="18" fill="#c45c26" className="sy-breathe" />
        <rect x="110" y="132" width="100" height="10" rx="5" fill="#ddd4c4" />
      </Frame>
    );
  }

  if (kind === "legal") {
    return (
      <Frame label="Simple document lines">
        <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
        <rect x="70" y="44" width="180" height="132" rx="12" fill="#efe8dc" />
        <rect x="90" y="68" width="140" height="6" rx="3" fill="#ddd4c4" className="sy-dot" />
        <rect x="90" y="88" width="110" height="6" rx="3" fill="#ddd4c4" />
        <rect x="90" y="108" width="128" height="6" rx="3" fill="#ddd4c4" className="sy-dot-d" />
      </Frame>
    );
  }

  return (
    <Frame label="The Syclops loop">
      <rect x="12" y="18" width="296" height="184" rx="28" fill="#fbf7f0" stroke="#ddd4c4" />
      <g className="sy-orbit">
        <circle
          cx="160"
          cy="110"
          r="62"
          fill="none"
          stroke="#ddd4c4"
          strokeWidth="1.2"
        />
      </g>
      <circle
        cx="160"
        cy="110"
        r="36"
        fill="none"
        stroke="#c45c26"
        strokeWidth="1.4"
        className="sy-orbit-rev sy-dash"
      />
      <circle cx="160" cy="110" r="8" fill="#c45c26" className="sy-breathe" />
      <circle cx="160" cy="48" r="6" fill="#12141a" className="sy-dot" />
      <circle cx="222" cy="110" r="6" fill="#12141a" className="sy-dot-d" />
      <circle cx="160" cy="172" r="6" fill="#12141a" className="sy-dot-e" />
      <circle cx="98" cy="110" r="6" fill="#12141a" />
    </Frame>
  );
}
