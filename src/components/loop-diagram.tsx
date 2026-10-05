"use client";

import Link from "next/link";
import { useState } from "react";

const nodes = [
  {
    id: "field",
    label: "Field",
    copy: "Check-in, photo, route, TADA. Proof that the visit happened.",
    href: "/product/field",
  },
  {
    id: "referral",
    label: "Referral",
    copy: "A named partner or member sent someone. Status is not a guess.",
    href: "/product/referrals",
  },
  {
    id: "subscription",
    label: "Subscription",
    copy: "The referred person is on a plan. Renewals and failed payments are visible.",
    href: "/product/subscriptions",
  },
  {
    id: "revenue",
    label: "Revenue",
    copy: "MRR attributed to the visit and the referrer. Churn sends the field team back out.",
    href: "/product/analytics",
  },
] as const;

export function LoopDiagram() {
  const [active, setActive] = useState<(typeof nodes)[number]["id"]>("field");
  const current = nodes.find((node) => node.id === active) ?? nodes[0];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <svg
        viewBox="0 0 360 360"
        role="img"
        aria-label="Growth loop from field visit to referral, subscription, and revenue"
        className="mx-auto w-full max-w-md"
      >
        <circle
          cx="180"
          cy="180"
          r="118"
          fill="none"
          stroke="#ddd4c4"
          strokeWidth="1.5"
          className="sy-orbit"
        />
        <circle
          cx="180"
          cy="180"
          r="72"
          fill="none"
          stroke="#c45c26"
          strokeWidth="1.5"
          className="sy-orbit-rev sy-dash"
        />
        <text
          x="180"
          y="176"
          textAnchor="middle"
          className="fill-ink"
          fontSize="13"
          fontFamily="ui-sans-serif, system-ui"
        >
          syclops
        </text>
        <text
          x="180"
          y="196"
          textAnchor="middle"
          className="fill-[#5c574e]"
          fontSize="11"
          fontFamily="ui-sans-serif, system-ui"
        >
          the loop
        </text>
        {nodes.map((node, index) => {
          const angle = (index / nodes.length) * Math.PI * 2 - Math.PI / 2;
          const x = 180 + Math.cos(angle) * 118;
          const y = 180 + Math.sin(angle) * 118;
          const selected = node.id === active;
          return (
            <g key={node.id}>
              <circle
                cx={x}
                cy={y}
                r={selected ? 28 : 24}
                fill={selected ? "#c45c26" : "#fbf7f0"}
                stroke={selected ? "#c45c26" : "#12141a"}
                strokeWidth="1.5"
                className="cursor-pointer"
                onClick={() => setActive(node.id)}
              />
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fontSize="10"
                fontFamily="ui-sans-serif, system-ui"
                fill={selected ? "#fbf7f0" : "#12141a"}
                className="pointer-events-none"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-iris">
          {current.label}
        </p>
        <p className="display mt-3 text-3xl font-semibold tracking-tight">
          {current.copy}
        </p>
        <p className="mt-4 text-sm leading-6 text-muted">
          If a subscription churns, the loop does not end. It becomes a field
          task for the person who owns the relationship — often the original
          referrer.
        </p>
        <Link
          href={current.href}
          className="mt-6 inline-flex text-sm font-medium text-iris hover:text-iris-dark"
        >
          Open {current.label.toLowerCase()} →
        </Link>
        <div className="mt-6 flex flex-wrap gap-2">
          {nodes.map((node) => (
            <button
              key={node.id}
              type="button"
              onClick={() => setActive(node.id)}
              className={`rounded-full px-3 py-1 text-xs ${
                node.id === active
                  ? "bg-ink text-cream"
                  : "border border-line text-muted"
              }`}
            >
              {node.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
