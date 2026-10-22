"use client";

import { useEffect, useRef } from "react";

export function HeroLoop() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    svg.querySelectorAll("animate, animateMotion").forEach((node) => {
      if (node instanceof SVGAnimationElement) node.beginElement();
    });
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 420"
      role="img"
      aria-label="A field visit becomes a referral, then a subscription that stays."
      className="mx-auto w-full max-w-md lg:max-w-none"
    >
      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
            }
            .smil-draw {
              stroke-dashoffset: 0 !important;
            }
            .smil-show {
              opacity: 1 !important;
            }
            .smil-hide {
              opacity: 0 !important;
            }
            .smil-fill {
              width: 112px !important;
            }
          }
        `}
      </style>

      <g id="visit">
        <rect
          x="44"
          y="52"
          width="168"
          height="126"
          rx="22"
          fill="#EFE8DC"
          stroke="#DDD4C4"
          strokeWidth="1.5"
        />
        <line x1="44" y1="115" x2="212" y2="115" stroke="#DDD4C4" strokeWidth="1.5" />
        <line x1="128" y1="52" x2="128" y2="178" stroke="#DDD4C4" strokeWidth="1.5" />
        <text
          x="62"
          y="76"
          fill="#5C574E"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="11"
        >
          Visit
        </text>
        <path
          d="M 74 148 C 92 148, 98 96, 128 96 C 158 96, 158 134, 186 134"
          fill="none"
          stroke="#DDD4C4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          className="smil-draw"
          d="M 74 148 C 92 148, 98 96, 128 96 C 158 96, 158 134, 186 134"
          fill="none"
          stroke="#C45C26"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="100;0;0;100"
            keyTimes="0;0.20;0.92;1"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
        <circle cx="74" cy="148" r="3.5" fill="#FBF7F0" stroke="#5C574E" strokeWidth="1.5" />
        <circle cx="128" cy="96" r="3.5" fill="#FBF7F0" stroke="#5C574E" strokeWidth="1.5" />
        <circle cx="186" cy="134" r="3.5" fill="#FBF7F0" stroke="#5C574E" strokeWidth="1.5" />
        <circle
          className="smil-show"
          cx="74"
          cy="148"
          r="5"
          fill="#9A451C"
          stroke="#12141A"
          strokeWidth="1.5"
          opacity="1"
        >
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.03;0.92;1"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          className="smil-show"
          cx="128"
          cy="96"
          r="5"
          fill="#9A451C"
          stroke="#12141A"
          strokeWidth="1.5"
          opacity="1"
        >
          <animate
            attributeName="opacity"
            values="0;0;1;1;0"
            keyTimes="0;0.09;0.12;0.92;1"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
        <g className="smil-show" opacity="1">
          <animate
            attributeName="opacity"
            values="0;0;1;1;0"
            keyTimes="0;0.18;0.21;0.92;1"
            dur="8s"
            repeatCount="indefinite"
          />
          <circle cx="186" cy="134" r="9" fill="#EFE8DC" stroke="#C45C26" strokeWidth="1.5" />
          <circle cx="186" cy="134" r="4.5" fill="#C45C26" stroke="#12141A" strokeWidth="1.5" />
        </g>
      </g>

      <g id="referral">
        <text
          x="292"
          y="76"
          fill="#5C574E"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="11"
        >
          Referral
        </text>
        <path
          d="M 186 134 C 244 64, 336 64, 382 148"
          fill="none"
          stroke="#DDD4C4"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          strokeLinecap="round"
        />
        <path
          id="referral-arc"
          className="smil-draw"
          d="M 186 134 C 244 64, 336 64, 382 148"
          fill="none"
          stroke="#C45C26"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="100;100;0;0;100"
            keyTimes="0;0.22;0.42;0.92;1"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
        <circle cx="186" cy="134" r="14" fill="none" stroke="#12141A" strokeWidth="1.5" />
        <g>
          <circle cx="382" cy="148" r="22" fill="#EFE8DC" stroke="#DDD4C4" strokeWidth="1.5" />
          <circle cx="382" cy="148" r="14" fill="#FBF7F0" stroke="#12141A" strokeWidth="1.5" />
          <circle cx="382" cy="148" r="4.5" fill="#5C574E" />
          <circle
            className="smil-show"
            cx="382"
            cy="148"
            r="5.5"
            fill="#9A451C"
            stroke="#12141A"
            strokeWidth="1.5"
            opacity="1"
          >
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.41;0.44;0.92;1"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <circle
          className="smil-hide"
          r="4.5"
          fill="#C45C26"
          stroke="#12141A"
          strokeWidth="1.5"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;0;1;1;0;0"
            keyTimes="0;0.22;0.23;0.42;0.44;1"
            dur="8s"
            repeatCount="indefinite"
          />
          <animateMotion
            path="M 186 134 C 244 64, 336 64, 382 148"
            keyPoints="0;0;1;1"
            keyTimes="0;0.22;0.43;1"
            calcMode="linear"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      <g id="plan">
        <line x1="382" y1="170" x2="382" y2="232" stroke="#DDD4C4" strokeWidth="1.5" />
        <path
          className="smil-draw"
          d="M 382 170 L 382 232"
          fill="none"
          stroke="#12141A"
          strokeWidth="1.5"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="100;100;0;0;100"
            keyTimes="0;0.43;0.48;0.92;1"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
        <rect
          x="236"
          y="232"
          width="192"
          height="124"
          rx="20"
          fill="#FBF7F0"
          stroke="#12141A"
          strokeWidth="1.5"
        />
        <text
          x="256"
          y="260"
          fill="#12141A"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="11"
        >
          Plan
        </text>
        <line
          x1="256"
          y1="276"
          x2="348"
          y2="276"
          stroke="#DDD4C4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="256"
          y1="290"
          x2="316"
          y2="290"
          stroke="#DDD4C4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <rect
          x="256"
          y="312"
          width="112"
          height="22"
          rx="11"
          fill="#EFE8DC"
          stroke="#DDD4C4"
          strokeWidth="1.5"
        />
        <mask id="plan-fill-mask">
          <rect
            className="smil-fill"
            x="256"
            y="312"
            width="112"
            height="22"
            rx="11"
            fill="#FFFFFF"
          >
            <animate
              attributeName="width"
              values="0;0;112;112;0"
              keyTimes="0;0.48;0.60;0.92;1"
              dur="8s"
              repeatCount="indefinite"
            />
          </rect>
        </mask>
        <rect
          x="256"
          y="312"
          width="112"
          height="22"
          rx="11"
          fill="#1F6B4A"
          mask="url(#plan-fill-mask)"
        />
        <rect
          x="256"
          y="312"
          width="112"
          height="22"
          rx="11"
          fill="none"
          stroke="#12141A"
          strokeWidth="1.5"
        />
        <circle cx="396" cy="323" r="14" fill="#EFE8DC" stroke="#DDD4C4" strokeWidth="1.5" />
        <g className="smil-show" opacity="1">
          <animate
            attributeName="opacity"
            values="0;0;1;1;0"
            keyTimes="0;0.58;0.62;0.92;1"
            dur="8s"
            repeatCount="indefinite"
          />
          <circle cx="396" cy="323" r="14" fill="#1F6B4A" stroke="#12141A" strokeWidth="1.5" />
          <path
            className="smil-draw"
            d="M 390 323.5 L 394.2 327.5 L 402.5 318.5"
            fill="none"
            stroke="#FBF7F0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="100"
            strokeDasharray="100"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="100;100;0;0;100"
              keyTimes="0;0.59;0.65;0.92;1"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>

      <g id="return">
        <path
          d="M 236 294 C 128 294, 74 242, 74 157"
          fill="none"
          stroke="#DDD4C4"
          strokeWidth="1.5"
          strokeDasharray="3 5"
          strokeLinecap="round"
        />
        <path
          className="smil-draw"
          d="M 236 294 C 128 294, 74 242, 74 157"
          fill="none"
          stroke="#12141A"
          strokeWidth="1.5"
          strokeLinecap="round"
          pathLength="100"
          strokeDasharray="100"
          strokeDashoffset="0"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="100;100;0;0;100"
            keyTimes="0;0.66;0.82;0.92;1"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
        <path
          className="smil-show"
          d="M 69.5 163 L 74 156.5 L 78.5 163"
          fill="none"
          stroke="#12141A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="1"
        >
          <animate
            attributeName="opacity"
            values="0;0;1;1;0"
            keyTimes="0;0.80;0.83;0.92;1"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
}
