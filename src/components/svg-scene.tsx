import type { ReactNode } from "react";

export type SceneKind =
  | "loop"
  | "field"
  | "tada"
  | "referral"
  | "portal"
  | "gym"
  | "subscription"
  | "analytics"
  | "mobile"
  | "integrations"
  | "industry"
  | "gyms"
  | "education"
  | "healthcare"
  | "sales"
  | "fintech"
  | "medtech"
  | "compare"
  | "compare-chat"
  | "compare-gps"
  | "compare-crm"
  | "compare-vertical"
  | "compare-gym"
  | "customers"
  | "pricing"
  | "security"
  | "blog"
  | "faq"
  | "guides"
  | "start"
  | "interested"
  | "login"
  | "legal"
  | "privacy"
  | "terms"
  | "cookies"
  | "refund"
  | "missing"
  | "import"
  | "qualify";

const font = "ui-sans-serif, system-ui, sans-serif";
const ink = "#12141A";
const muted = "#5C574E";
const iris = "#C45C26";
const quiet = "#EFE8DC";
const line = "#DDD4C4";
const cream = "#FBF7F0";
const paper = "#F6F1E8";
const money = "#1F6B4A";
const leak = "#7A2E1F";

const postScenes: Record<string, SceneKind> = {
  "channel-partner-portal-not-crm-source-field": "compare-crm",
  "clinic-referral-portal-vs-whatsapp": "compare-chat",
  "counselor-beat-unpaid-fee-installment": "education",
  "dpdp-employee-gps-retention": "privacy",
  "gps-is-not-a-growth-system": "compare-gps",
  "gym-referral-programme-without-replacing-erp": "compare-gym",
  "how-to-choose-referral-management-software": "portal",
  "kol-dsa-referral-loops": "industry",
  "razorpay-memberships-field-dunning": "subscription",
  "referral-leakage-is-a-systems-problem": "referral",
  "subscriptions-need-a-field-team": "subscription",
  "tada-is-the-path-not-the-pin": "tada",
};

const compareScenes: Record<string, SceneKind> = {
  "whatsapp-excel": "compare-chat",
  "gps-trackers": "compare-gps",
  crm: "compare-crm",
  "vertical-software": "compare-vertical",
  "gym-software": "compare-gym",
};

export function sceneForPost(slug: string): SceneKind {
  return postScenes[slug] ?? "blog";
}

export function sceneForCompare(slug: string): SceneKind {
  return compareScenes[slug] ?? "compare";
}

function T({
  x,
  y,
  children,
  size = 14,
  fill = muted,
  anchor = "start",
  weight = 500,
}: {
  x: number | string;
  y: number | string;
  children: ReactNode;
  size?: number;
  fill?: string;
  anchor?: "start" | "middle" | "end";
  weight?: number;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={fill}
      fontFamily={font}
      fontSize={size}
      fontWeight={weight}
    >
      {children}
    </text>
  );
}

function Figure({
  label,
  caption,
  children,
}: {
  label: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="mx-auto w-full max-w-2xl">
      <svg
        viewBox="0 0 720 500"
        role="img"
        aria-label={label}
        className="h-auto w-full"
      >
        <rect width="720" height="500" rx="32" fill={paper} />
        <rect
          x="16"
          y="16"
          width="688"
          height="468"
          rx="26"
          fill={cream}
          stroke={line}
          strokeWidth="1.5"
        />
        {children}
      </svg>
      <figcaption className="mt-3 text-center text-xs font-medium leading-5 text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

function Arc({ d, color = iris }: { d: string; color?: string }) {
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke={line}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength={100}
        className="scene-draw"
      />
    </>
  );
}

function Traveler({ d, dur = "9s" }: { d: string; dur?: string }) {
  return (
    <circle r="6.5" fill={iris} stroke={ink} strokeWidth="1.5" className="sy-motion-only">
      <animateMotion dur={dur} repeatCount="indefinite" path={d} />
    </circle>
  );
}

function LoopWatermark() {
  return (
    <svg viewBox="0 0 320 220" aria-hidden="true" className="mx-auto w-full max-w-sm">
      <rect x="12" y="18" width="296" height="184" rx="28" fill={cream} stroke={line} />
      <g className="sy-orbit">
        <circle cx="160" cy="110" r="62" fill="none" stroke={line} strokeWidth="1.2" />
      </g>
      <circle
        cx="160"
        cy="110"
        r="36"
        fill="none"
        stroke={iris}
        strokeWidth="1.4"
        className="sy-orbit-rev sy-dash"
      />
      <circle cx="160" cy="110" r="8" fill={iris} className="sy-breathe" />
    </svg>
  );
}

function LoopScene() {
  const ring = "M 360 78 A 152 152 0 1 1 359.5 78";
  return (
    <Figure
      label="Visit, referral, plan, and revenue on one loop"
      caption="A visit opens a referral. The plan pays. Revenue sends the team back out."
    >
      <circle cx="360" cy="230" r="152" fill="none" stroke={line} strokeWidth="1.5" />
      <circle
        cx="360"
        cy="230"
        r="108"
        fill="none"
        stroke={iris}
        strokeWidth="1.5"
        className="sy-dash"
        pathLength={100}
      />
      <path d={ring} fill="none" stroke={iris} strokeWidth="1.5" pathLength={100} className="scene-draw" />
      <Traveler d={ring} dur="11s" />
      <g className="sy-float">
        <circle cx="360" cy="78" r="36" fill={quiet} stroke={ink} strokeWidth="1.5" />
        <path d="M 344 86 C 352 70, 368 70, 376 86" fill="none" stroke={iris} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="350" cy="74" r="3" fill={iris} />
        <circle cx="370" cy="80" r="3" fill={ink} />
      </g>
      <T x="360" y="128" anchor="middle" fill={ink} weight={600}>Visit</T>
      <g className="sy-float-d">
        <circle cx="512" cy="230" r="36" fill={quiet} stroke={iris} strokeWidth="1.5" />
        <circle cx="500" cy="230" r="8" fill={cream} stroke={ink} strokeWidth="1.5" />
        <circle cx="524" cy="230" r="8" fill={cream} stroke={iris} strokeWidth="1.5" className="sy-breathe" />
      </g>
      <T x="512" y="284" anchor="middle" fill={ink} weight={600}>Referral</T>
      <g>
        <circle cx="360" cy="382" r="36" fill={quiet} stroke={ink} strokeWidth="1.5" />
        <rect x="346" y="370" width="28" height="18" rx="5" fill={cream} stroke={line} />
        <rect x="350" y="376" width="16" height="4" rx="2" fill={money} className="sy-dot" />
      </g>
      <T x="360" y="432" anchor="middle" fill={ink} weight={600}>Plan</T>
      <g className="sy-breathe">
        <circle cx="208" cy="230" r="36" fill={quiet} stroke={money} strokeWidth="1.5" />
        <rect x="196" y="226" width="8" height="16" rx="2" fill={line} />
        <rect x="208" y="218" width="8" height="24" rx="2" fill={iris} />
        <rect x="220" y="210" width="8" height="32" rx="2" fill={money} />
      </g>
      <T x="208" y="284" anchor="middle" fill={ink} weight={600}>Revenue</T>
      <circle cx="360" cy="230" r="10" fill={iris} className="sy-breathe" />
    </Figure>
  );
}

function FieldScene() {
  const route = "M 92 360 C 140 300, 150 250, 210 240 C 280 228, 250 160, 330 150 C 400 140, 390 240, 470 220";
  return (
    <Figure
      label="A field route with a check-in, not a live surveillance map"
      caption="Check-in proves the visit. The pin then belongs to a referral or a plan."
    >
      <rect x="48" y="48" width="400" height="390" rx="24" fill={quiet} />
      <path d="M 80 120 H 420 M 80 200 H 420 M 80 280 H 420 M 80 360 H 420 M 140 70 V 420 M 240 70 V 420 M 340 70 V 420" stroke={line} strokeWidth="1.5" />
      <Arc d={route} />
      <Traveler d={route} />
      <circle cx="92" cy="360" r="7" fill={cream} stroke={ink} strokeWidth="1.5" />
      <circle cx="330" cy="150" r="7" fill={cream} stroke={ink} strokeWidth="1.5" />
      <g className="sy-breathe">
        <circle cx="470" cy="220" r="16" fill={quiet} stroke={iris} strokeWidth="1.5" />
        <circle cx="470" cy="220" r="5" fill={iris} />
      </g>
      <g className="sy-float">
        <rect x="478" y="78" width="190" height="150" rx="20" fill={cream} stroke={iris} strokeWidth="1.5" />
        <circle cx="508" cy="118" r="10" fill={iris} className="sy-dot" />
        <T x="528" y="114" fill={ink} weight={600}>Checked in</T>
        <T x="528" y="134" size={12}>GPS + photo</T>
        <rect x="502" y="156" width="142" height="46" rx="10" fill={quiet} />
        <T x="573" y="184" anchor="middle" size={12}>Visit proof</T>
      </g>
      <T x="248" y="418" anchor="middle" size={13}>Route closes at checkout</T>
    </Figure>
  );
}

function TadaScene() {
  return (
    <Figure
      label="Straight pin-to-pin mileage beside the path that was actually walked"
      caption="TADA pays the path you walked. A straight line between pins is a guess."
    >
      <rect x="44" y="64" width="300" height="360" rx="22" fill={quiet} />
      <rect x="376" y="64" width="300" height="360" rx="22" fill={cream} stroke={iris} strokeWidth="1.5" />
      <T x="194" y="108" anchor="middle" fill={leak} weight={600}>Pin to pin</T>
      <T x="526" y="108" anchor="middle" fill={ink} weight={600}>The path</T>
      <line x1="110" y1="300" x2="278" y2="160" stroke={leak} strokeWidth="1.5" strokeDasharray="4 6" />
      <circle cx="110" cy="300" r="7" fill={cream} stroke={leak} strokeWidth="1.5" />
      <circle cx="278" cy="160" r="7" fill={cream} stroke={leak} strokeWidth="1.5" />
      <T x="194" y="360" anchor="middle" fill={leak} size={13}>Guessed kilometres</T>
      <Arc d="M 430 320 C 470 300, 480 210, 530 200 C 590 188, 600 250, 630 240" />
      <circle cx="430" cy="320" r="7" fill={cream} stroke={ink} strokeWidth="1.5" />
      <circle cx="630" cy="240" r="7" fill={iris} className="sy-breathe" />
      <rect x="456" y="300" width="150" height="78" rx="16" fill={quiet} />
      <T x="531" y="332" anchor="middle" fill={ink} weight={600}>₹ / km</T>
      <T x="531" y="356" anchor="middle" size={12} fill={money}>Manager approves</T>
    </Figure>
  );
}

function ReferralScene() {
  const handoff = "M 168 210 C 260 90, 460 90, 552 210";
  return (
    <Figure
      label="A referral moving from the sender to the person who joins"
      caption="The sender can see sent, accepted, and paying — without calling the desk."
    >
      <Arc d={handoff} />
      <Traveler d={handoff} dur="7s" />
      <circle cx="168" cy="230" r="46" fill={quiet} stroke={ink} strokeWidth="1.5" />
      <circle cx="168" cy="214" r="12" fill={cream} stroke={ink} strokeWidth="1.5" />
      <path d="M 140 258 Q 168 242 196 258" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" />
      <T x="168" y="300" anchor="middle" fill={ink} weight={600}>Sender</T>
      <g className="sy-breathe">
        <circle cx="552" cy="230" r="46" fill={quiet} stroke={iris} strokeWidth="1.5" />
        <circle cx="552" cy="214" r="12" fill={cream} stroke={iris} strokeWidth="1.5" />
        <path d="M 524 258 Q 552 242 580 258" fill="none" stroke={iris} strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <T x="552" y="300" anchor="middle" fill={ink} weight={600}>Joined</T>
      {[
        ["Sent", quiet, ink, 150],
        ["Accepted", quiet, ink, 310],
        ["Paying", money, cream, 490],
      ].map(([label, bg, color, x]) => (
        <g key={String(label)} className={label === "Paying" ? "sy-float" : undefined}>
          <rect x={Number(x)} y="360" width="120" height="44" rx="22" fill={String(bg)} />
          <T x={Number(x) + 60} y="388" anchor="middle" fill={String(color)} weight={600}>
            {label}
          </T>
        </g>
      ))}
    </Figure>
  );
}

function PortalScene() {
  const rows = [
    ["Priya K.", "Paying", money],
    ["Aditi S.", "Accepted", iris],
    ["Northwind", "Sent", muted],
  ] as const;
  return (
    <Figure
      label="A referral portal listing each intro and whether it is paying"
      caption="Referral software keeps the sender, the status, and the invoice on one record."
    >
      <rect x="70" y="48" width="580" height="400" rx="24" fill={quiet} />
      <T x="100" y="92" fill={ink} size={18} weight={600}>Partner portal</T>
      <T x="430" y="92" fill={muted} size={13}>Status the sender sees</T>
      {rows.map(([name, status, color], index) => (
        <g key={name} className={index === 0 ? "sy-float" : undefined}>
          <rect x="100" y={124 + index * 96} width="520" height="78" rx="16" fill={cream} stroke={index === 0 ? iris : line} strokeWidth="1.5" />
          <circle cx="142" cy={163 + index * 96} r="16" fill={quiet} stroke={ink} strokeWidth="1.5" />
          <T x="176" y={158 + index * 96} fill={ink} weight={600}>{name}</T>
          <T x="176" y={180 + index * 96} size={12}>Intro → plan</T>
          <rect x="470" y={142 + index * 96} width="120" height="36" rx="18" fill={index === 0 ? money : quiet} />
          <T x="530" y={166 + index * 96} anchor="middle" fill={index === 0 ? cream : color} weight={600}>
            {status}
          </T>
        </g>
      ))}
    </Figure>
  );
}

function GymScene() {
  const pass = "M 150 210 C 250 120, 360 120, 430 200";
  return (
    <Figure
      label="A member sending a friend onto a gym membership"
      caption="The member who sent the join stays on the membership. Churn writes a trainer visit."
    >
      <circle cx="140" cy="220" r="42" fill={quiet} stroke={ink} strokeWidth="1.5" />
      <T x="140" y="290" anchor="middle" fill={ink} weight={600}>Member</T>
      <Arc d={pass} />
      <Traveler d={pass} dur="7s" />
      <g className="sy-float">
        <rect x="400" y="150" width="250" height="180" rx="22" fill={cream} stroke={iris} strokeWidth="1.5" />
        <T x="424" y="190" fill={muted} size={12}>Membership</T>
        <T x="424" y="222" fill={ink} size={20} weight={600}>Gold annual</T>
        <T x="424" y="252" size={13}>Referred by Rahul</T>
        <rect x="424" y="272" width="140" height="32" rx="16" fill={money} />
        <T x="494" y="294" anchor="middle" fill={cream} weight={600}>Still paying</T>
      </g>
      <path d="M 400 360 C 280 400, 180 360, 150 300" fill="none" stroke={ink} strokeWidth="1.5" strokeLinecap="round" pathLength={100} className="scene-draw" />
      <T x="250" y="430" anchor="middle" size={13}>At risk → trainer visit</T>
    </Figure>
  );
}

function SubscriptionScene() {
  return (
    <Figure
      label="A failed renewal turning into a field visit"
      caption="Retries run in billing. When they fail, the field team gets the visit."
    >
      <g className="sy-float-d">
        <rect x="70" y="70" width="280" height="150" rx="20" fill={quiet} />
      </g>
      <rect x="90" y="130" width="300" height="170" rx="22" fill={cream} stroke={iris} strokeWidth="1.5" />
      <T x="114" y="170" fill={muted} size={12}>Plan</T>
      <T x="114" y="204" fill={ink} size={22} weight={600}>₹2,499 / mo</T>
      <rect x="114" y="228" width="150" height="36" rx="18" fill={leak} className="sy-dot" />
      <T x="189" y="252" anchor="middle" fill={cream} weight={600}>Payment failed</T>
      <Arc d="M 390 220 C 460 220, 470 250, 500 280" />
      <g className="sy-float">
        <rect x="470" y="260" width="190" height="140" rx="20" fill={cream} stroke={ink} strokeWidth="1.5" />
        <circle cx="506" cy="312" r="12" fill={iris} className="sy-breathe" />
        <T x="530" y="308" fill={ink} weight={600}>Field visit</T>
        <T x="530" y="332" size={12}>Written from churn</T>
        <T x="498" y="368" size={12} fill={money}>On tomorrow’s beat</T>
      </g>
    </Figure>
  );
}

function AnalyticsScene() {
  const bars = [
    { x: 90, h: 120, label: "Visits", fill: quiet },
    { x: 210, h: 170, label: "Referrals", fill: quiet },
    { x: 330, h: 220, label: "Plans", fill: iris },
    { x: 450, h: 260, label: "Renewed", fill: money },
  ];
  return (
    <Figure
      label="Revenue bars for visits, referrals, plans, and renewals"
      caption="MRR sits on the same record as the visit and the person who referred."
    >
      <line x1="70" y1="390" x2="640" y2="390" stroke={line} strokeWidth="1.5" />
      {bars.map((bar) => (
        <g key={bar.label} className={bar.label === "Renewed" ? "sy-float" : undefined}>
          <rect x={bar.x} y={390 - bar.h} width="72" height={bar.h} rx="12" fill={bar.fill} />
          <T x={bar.x + 36} y="418" anchor="middle" size={13} fill={ink} weight={600}>
            {bar.label}
          </T>
        </g>
      ))}
      <g className="sy-float-d">
        <rect x="530" y="56" width="150" height="64" rx="16" fill={cream} stroke={money} strokeWidth="1.5" />
        <T x="605" y="82" anchor="middle" fill={money} weight={600}>Same record</T>
        <T x="605" y="102" anchor="middle" size={12}>Visit → MRR</T>
      </g>
    </Figure>
  );
}

function MobileScene() {
  const phones = [
    { x: 70, label: "Refer", accent: false },
    { x: 255, label: "Check in", accent: true },
    { x: 470, label: "Plan", accent: false },
  ];
  return (
    <Figure
      label="Three phones for a visit, a referral, and a plan"
      caption="Staff log the visit. Partners send the person. The plan stays on the phone."
    >
      {phones.map((phone) => (
        <g key={phone.label} className={phone.accent ? "sy-float" : "sy-float-d"}>
          <rect
            x={phone.x}
            y={phone.accent ? 48 : 78}
            width="170"
            height={phone.accent ? 360 : 320}
            rx="28"
            fill={quiet}
            stroke={phone.accent ? iris : line}
            strokeWidth="1.5"
          />
          <circle cx={phone.x + 85} cy={(phone.accent ? 48 : 78) + 28} r="5" fill={phone.accent ? iris : ink} className="sy-dot" />
          <rect x={phone.x + 22} y={(phone.accent ? 48 : 78) + 70} width="126" height="78" rx="14" fill={cream} />
          <T x={phone.x + 85} y={(phone.accent ? 48 : 78) + 200} anchor="middle" fill={ink} weight={600}>
            {phone.label}
          </T>
          <rect
            x={phone.x + 28}
            y={(phone.accent ? 48 : 78) + (phone.accent ? 280 : 240)}
            width="114"
            height="36"
            rx="18"
            fill={phone.accent ? iris : cream}
          />
        </g>
      ))}
    </Figure>
  );
}

function IntegrationsScene() {
  const nodes = [
    { x: 360, y: 78, label: "WhatsApp" },
    { x: 560, y: 230, label: "Razorpay" },
    { x: 360, y: 390, label: "Maps" },
    { x: 160, y: 230, label: "Stripe" },
  ];
  return (
    <Figure
      label="WhatsApp, Razorpay, Stripe, and Maps around Syclops"
      caption="Messages, payments, and the map write back to the same visit and plan."
    >
      <circle cx="360" cy="230" r="150" fill="none" stroke={line} strokeWidth="1.5" className="sy-dash" />
      <g className="scene-spin" style={{ transformOrigin: "360px 230px" }}>
        <circle cx="360" cy="80" r="7" fill={iris} />
      </g>
      <circle cx="360" cy="230" r="54" fill={iris} className="sy-breathe" />
      <T x="360" y="236" anchor="middle" fill={cream} weight={600}>Syclops</T>
      {nodes.map((node) => (
        <g key={node.label}>
          <circle cx={node.x} cy={node.y} r="28" fill={quiet} stroke={ink} strokeWidth="1.5" />
          <T
            x={node.x}
            y={node.y > 230 ? node.y + 52 : node.y < 230 ? node.y - 40 : node.y + 52}
            anchor="middle"
            fill={ink}
            weight={600}
          >
            {node.label}
          </T>
        </g>
      ))}
    </Figure>
  );
}

function IndustryIndexScene() {
  const rows = [
    "Trainer → member → membership",
    "Counselor → alumni → fee",
    "Clinic → partner → care plan",
  ];
  return (
    <Figure
      label="One loop with the nouns of gyms, campuses, and clinics"
      caption="Same cycle. Gyms, campuses, clinics, sales, fintech, and medtech swap the nouns."
    >
      <circle cx="210" cy="230" r="110" fill="none" stroke={line} strokeWidth="1.5" />
      <circle cx="210" cy="230" r="70" fill="none" stroke={iris} strokeWidth="1.5" className="sy-dash scene-spin" style={{ transformOrigin: "210px 230px" }} />
      <circle cx="210" cy="230" r="12" fill={iris} className="sy-breathe" />
      <T x="210" y="370" anchor="middle" fill={ink} weight={600}>One loop</T>
      {rows.map((row, index) => (
        <g key={row} className={index === 1 ? "sy-float" : "sy-dot"}>
          <rect x="360" y={110 + index * 90} width="300" height="64" rx="16" fill={index === 1 ? cream : quiet} stroke={index === 1 ? iris : line} strokeWidth="1.5" />
          <T x="510" y={148 + index * 90} anchor="middle" fill={ink} size={13} weight={600}>
            {row}
          </T>
        </g>
      ))}
    </Figure>
  );
}

function NounScene({
  label,
  caption,
  visit,
  referrer,
  plan,
}: {
  label: string;
  caption: string;
  visit: string;
  referrer: string;
  plan: string;
}) {
  const forward = "M 250 150 C 340 80, 430 80, 500 150";
  const down = "M 560 230 C 620 300, 520 340, 430 340";
  return (
    <Figure label={label} caption={caption}>
      <rect x="48" y="90" width="210" height="130" rx="20" fill={quiet} />
      <T x="72" y="132" size={12}>Visit</T>
      <T x="72" y="166" fill={ink} size={18} weight={600}>{visit}</T>
      <rect x="470" y="90" width="200" height="130" rx="20" fill={quiet} stroke={iris} strokeWidth="1.5" className="sy-float" />
      <T x="494" y="132" size={12}>Referral</T>
      <T x="494" y="166" fill={ink} size={18} weight={600}>{referrer}</T>
      <rect x="200" y="300" width="280" height="120" rx="20" fill={cream} stroke={money} strokeWidth="1.5" />
      <T x="224" y="342" size={12}>Plan</T>
      <T x="224" y="376" fill={ink} size={18} weight={600}>{plan}</T>
      <Arc d={forward} />
      <Traveler d={forward} dur="8s" />
      <Arc d={down} color={money} />
    </Figure>
  );
}

function CompareIndexScene() {
  return (
    <Figure
      label="Scattered tools on the left, one Syclops record on the right"
      caption="WhatsApp, a sheet, a pin, or a CRM — then the visit, referral, and plan together."
    >
      <rect x="40" y="56" width="300" height="380" rx="22" fill={quiet} />
      <rect x="380" y="56" width="300" height="380" rx="22" fill={cream} stroke={iris} strokeWidth="1.5" />
      <T x="190" y="100" anchor="middle" fill={muted} weight={600}>Scattered</T>
      <T x="530" y="100" anchor="middle" fill={ink} weight={600}>One record</T>
      {["WhatsApp", "Excel", "A pin", "Another login"].map((item, index) => (
        <rect key={item} x="78" y={130 + index * 68} width="224" height="48" rx="14" fill={cream} />
      ))}
      {["WhatsApp", "Excel", "A pin", "Another login"].map((item, index) => (
        <T key={`${item}-label`} x="190" y={160 + index * 68} anchor="middle" fill={muted}>
          {item}
        </T>
      ))}
      <circle cx="530" cy="250" r="70" fill="none" stroke={iris} strokeWidth="1.5" className="sy-dash" />
      <T x="530" y="246" anchor="middle" fill={ink} weight={600}>Visit</T>
      <T x="530" y="268" anchor="middle" size={13}>Referral · Plan</T>
    </Figure>
  );
}

function CompareChatScene() {
  return (
    <Figure
      label="Chat bubbles and a spreadsheet beside one joined record"
      caption="A thread and a sheet go stale. One record keeps the visit, the intro, and the plan."
    >
      <rect x="44" y="60" width="300" height="370" rx="22" fill={quiet} />
      <rect x="376" y="60" width="300" height="370" rx="22" fill={cream} stroke={iris} strokeWidth="1.5" />
      <T x="194" y="100" anchor="middle" weight={600}>Chat + sheet</T>
      <T x="526" y="100" anchor="middle" fill={ink} weight={600}>One record</T>
      <rect x="72" y="130" width="160" height="44" rx="16" fill={cream} />
      <rect x="150" y="186" width="160" height="44" rx="16" fill={cream} className="sy-dot" />
      <T x="194" y="270" anchor="middle" fill={leak} size={13}>Scroll back and guess</T>
      <rect x="80" y="300" width="228" height="90" rx="12" fill={paper} stroke={line} />
      {["Visit", "Referral", "Plan"].map((item, index) => (
        <g key={item} className={index === 2 ? "sy-float" : undefined}>
          <rect x="404" y={140 + index * 84} width="244" height="64" rx="16" fill={quiet} stroke={index === 2 ? money : line} />
          <T x="428" y={178 + index * 84} fill={ink} weight={600}>{item}</T>
        </g>
      ))}
    </Figure>
  );
}

function CompareGpsScene() {
  return (
    <Figure
      label="A lone map pin beside a pin attached to a paying plan"
      caption="GPS shows where someone was. The loop shows who they moved, and who still pays."
    >
      <rect x="44" y="60" width="300" height="370" rx="22" fill={quiet} />
      <rect x="376" y="60" width="300" height="370" rx="22" fill={cream} stroke={iris} strokeWidth="1.5" />
      <T x="194" y="104" anchor="middle" weight={600}>Where</T>
      <T x="526" y="104" anchor="middle" fill={ink} weight={600}>Who still pays</T>
      <g className="sy-breathe">
        <path d="M 194 180 C 150 180 140 250 194 300 C 248 250 238 180 194 180 Z" fill={cream} stroke={leak} strokeWidth="1.5" />
        <circle cx="194" cy="230" r="14" fill={leak} />
      </g>
      <T x="194" y="360" anchor="middle" fill={leak} size={13}>Attendance only</T>
      <circle cx="526" cy="200" r="16" fill={iris} className="sy-dot" />
      <T x="526" y="250" anchor="middle" fill={ink} weight={600}>Visit</T>
      <Arc d="M 526 270 C 526 300, 526 310, 526 330" />
      <rect x="430" y="330" width="192" height="56" rx="16" fill={money} />
      <T x="526" y="364" anchor="middle" fill={cream} weight={600}>Plan still paying</T>
    </Figure>
  );
}

function CompareCrmScene() {
  return (
    <Figure
      label="A deal funnel beside visit, referrer, and subscriber"
      caption="A CRM stores deals. Syclops stores the beat, the partner intro, and the plan."
    >
      <rect x="44" y="60" width="300" height="370" rx="22" fill={quiet} />
      <rect x="376" y="60" width="300" height="370" rx="22" fill={cream} stroke={iris} strokeWidth="1.5" />
      <T x="194" y="104" anchor="middle" weight={600}>Lead → deal</T>
      <T x="526" y="104" anchor="middle" fill={ink} weight={600}>The work</T>
      {[220, 170, 120].map((width, index) => (
        <rect key={width} x={194 - width / 2} y={140 + index * 70} width={width} height="48" rx="12" fill={cream} />
      ))}
      <T x="194" y="170" anchor="middle">Lead</T>
      <T x="194" y="240" anchor="middle">Opportunity</T>
      <T x="194" y="310" anchor="middle">Deal</T>
      {["Visit", "Referrer", "Subscriber"].map((item, index) => (
        <g key={item}>
          <circle cx="470" cy={170 + index * 80} r="16" fill={index === 2 ? money : iris} className={index === 1 ? "sy-breathe" : undefined} />
          <T x="500" y={176 + index * 80} fill={ink} weight={600}>{item}</T>
        </g>
      ))}
    </Figure>
  );
}

function CompareVerticalScene() {
  return (
    <Figure
      label="An invoice that stays, with field proof and a portal added beside it"
      caption="Gym, school, and clinic software can keep billing. The loop covers visits and intros."
    >
      <rect x="70" y="80" width="220" height="300" rx="20" fill={quiet} />
      <T x="180" y="124" anchor="middle" fill={ink} weight={600}>Invoice</T>
      <rect x="100" y="150" width="160" height="10" rx="5" fill={line} />
      <rect x="100" y="176" width="120" height="10" rx="5" fill={line} />
      <rect x="100" y="202" width="140" height="10" rx="5" fill={line} />
      <T x="180" y="280" anchor="middle" size={13}>Stays put</T>
      <Arc d="M 290 220 C 340 180, 380 180, 420 220" />
      <g className="sy-float">
        <rect x="420" y="120" width="230" height="100" rx="18" fill={cream} stroke={iris} strokeWidth="1.5" />
        <T x="444" y="164" fill={ink} weight={600}>Field visit</T>
        <T x="444" y="188" size={12}>Proof, not a chart</T>
      </g>
      <g className="sy-float-d">
        <rect x="420" y="250" width="230" height="100" rx="18" fill={cream} stroke={money} strokeWidth="1.5" />
        <T x="444" y="294" fill={ink} weight={600}>Partner portal</T>
        <T x="444" y="318" size={12}>Status without a call</T>
      </g>
    </Figure>
  );
}

function CompareGymScene() {
  return (
    <Figure
      label="Class and door staying in the gym system while origin sits on the membership"
      caption="Keep the floor system. Put the member who referred, and the trainer visit, on the plan."
    >
      <rect x="48" y="70" width="250" height="150" rx="20" fill={quiet} />
      <T x="72" y="116" fill={ink} weight={600}>Classes</T>
      <T x="72" y="142" size={13}>Stay in the gym ERP</T>
      <rect x="48" y="250" width="250" height="150" rx="20" fill={quiet} />
      <T x="72" y="296" fill={ink} weight={600}>The door</T>
      <T x="72" y="322" size={13}>Punch-in stays there</T>
      <g className="sy-float">
        <rect x="360" y="120" width="300" height="250" rx="24" fill={cream} stroke={iris} strokeWidth="1.5" />
        <T x="388" y="170" size={12}>Membership</T>
        <T x="388" y="206" fill={ink} size={20} weight={600}>Origin: member</T>
        <T x="388" y="240" size={13}>Trainer visit if it lapses</T>
        <rect x="388" y="270" width="160" height="40" rx="20" fill={money} />
        <T x="468" y="296" anchor="middle" fill={cream} weight={600}>Still paying</T>
      </g>
    </Figure>
  );
}

function CustomersScene() {
  const cards = [
    { title: "Gyms", line: "Member → Gold" },
    { title: "Campuses", line: "Alumni → fee" },
    { title: "Clinics", line: "Partner → plan" },
  ];
  return (
    <Figure
      label="Three customer loops for gyms, campuses, and clinics"
      caption="The same cycle, in the wild: a visit, an intro, and a plan that still pays."
    >
      {cards.map((card, index) => (
        <g key={card.title} className={index === 1 ? "sy-float" : "sy-float-d"}>
          <rect x={48 + index * 220} y={90} width="200" height="280" rx="22" fill={index === 1 ? cream : quiet} stroke={index === 1 ? iris : line} strokeWidth="1.5" />
          <circle cx={148 + index * 220} cy="190" r="36" fill="none" stroke={iris} strokeWidth="1.5" className="sy-dash" />
          <circle cx={148 + index * 220} cy="190" r="8" fill={iris} className="sy-breathe" />
          <T x={148 + index * 220} y="270" anchor="middle" fill={ink} weight={600}>{card.title}</T>
          <T x={148 + index * 220} y="298" anchor="middle" size={13}>{card.line}</T>
        </g>
      ))}
    </Figure>
  );
}

function PricingScene() {
  const plans = [
    { name: "Team", y: 64, h: 250, featured: false },
    { name: "Growth", y: 40, h: 290, featured: true },
    { name: "Scale", y: 64, h: 250, featured: false },
  ];
  return (
    <Figure
      label="Three self-serve plans with a free trial and no card"
      caption="Start the free trial with no card. Add field seats when the loop is on."
    >
      {plans.map((plan, index) => (
        <g key={plan.name} className={plan.featured ? "sy-float" : undefined}>
          <rect
            x={70 + index * 210}
            y={plan.y}
            width="180"
            height={plan.h}
            rx="22"
            fill={plan.featured ? cream : quiet}
            stroke={plan.featured ? iris : line}
            strokeWidth="1.5"
          />
          <T x={160 + index * 210} y={plan.y + 48} anchor="middle" fill={ink} size={18} weight={600}>
            {plan.name}
          </T>
          <rect x={100 + index * 210} y={plan.y + 80} width="120" height="14" rx="7" fill={line} />
          <rect x={100 + index * 210} y={plan.y + 110} width="90" height="14" rx="7" fill={line} />
        </g>
      ))}
      <g className="sy-breathe">
        <rect x="250" y="400" width="220" height="44" rx="22" fill={iris} />
        <T x="360" y="428" anchor="middle" fill={cream} weight={600}>Free trial · no card</T>
      </g>
    </Figure>
  );
}

function SecurityScene() {
  return (
    <Figure
      label="An iris that keeps working-day GPS inside, and a leak outside"
      caption="Location is evidence for a working day. Partners never see it. Retention is a setting."
    >
      <circle cx="300" cy="240" r="150" fill="none" stroke={ink} strokeWidth="1.5" />
      <circle cx="300" cy="240" r="90" fill="none" stroke={iris} strokeWidth="1.5" className="sy-dash scene-spin" style={{ transformOrigin: "300px 240px" }} />
      <circle cx="300" cy="240" r="16" fill={iris} className="sy-breathe" />
      <circle cx="250" cy="200" r="5" fill={muted} className="sy-dot" />
      <circle cx="280" cy="250" r="5" fill={muted} className="sy-dot-d" />
      <circle cx="330" cy="210" r="5" fill={muted} className="sy-dot-e" />
      <T x="300" y="430" anchor="middle" fill={ink} weight={600}>Working-day GPS</T>
      <g>
        <circle cx="560" cy="160" r="28" fill={quiet} stroke={leak} strokeWidth="1.5" />
        <T x="560" y="220" anchor="middle" fill={leak} weight={600}>Leak</T>
        <T x="560" y="244" anchor="middle" size={12}>Stays outside</T>
      </g>
    </Figure>
  );
}

function BlogScene() {
  return (
    <Figure
      label="Stacked notes that draw back into the visit-referral-plan loop"
      caption="Notes on leakage, TADA, gym referrals, and why a plan still needs a field team."
    >
      {[0, 1, 2].map((index) => (
        <g key={index} className={index === 0 ? "sy-float" : "sy-float-d"}>
          <rect x={80 + index * 28} y={70 + index * 36} width="360" height="90" rx="18" fill={index === 2 ? cream : quiet} stroke={line} strokeWidth="1.5" />
          <rect x={108 + index * 28} y={100 + index * 36} width="180" height="10" rx="5" fill={line} />
          <rect x={108 + index * 28} y={122 + index * 36} width="120" height="10" rx="5" fill={line} />
        </g>
      ))}
      <Arc d="M 470 250 C 540 250, 560 180, 560 150" />
      <circle cx="590" cy="230" r="70" fill="none" stroke={iris} strokeWidth="1.5" className="sy-dash" />
      <T x="590" y="226" anchor="middle" fill={ink} weight={600}>Loop</T>
      <T x="590" y="248" anchor="middle" size={12}>Visit → plan</T>
    </Figure>
  );
}

function FaqScene() {
  const answers = [
    { q: "Who is a field seat?", hot: false },
    { q: "Is GPS always on?", hot: true },
    { q: "How do I cancel?", hot: false },
  ];
  return (
    <Figure
      label="Three questions, with the GPS answer highlighted"
      caption="Seats, GPS, and cancel — answered on the page. The trial still needs no card."
    >
      <T x="70" y="90" fill={ink} size={22} weight={600}>Questions</T>
      {answers.map((item, index) => (
        <g key={item.q} className={item.hot ? "sy-float" : undefined}>
          <rect x="60" y={120 + index * 100} width="600" height="80" rx="18" fill={item.hot ? cream : quiet} stroke={item.hot ? iris : line} strokeWidth="1.5" />
          <T x="90" y={166 + index * 100} fill={ink} weight={600}>{item.q}</T>
          {item.hot ? <T x="520" y={166 + index * 100} fill={iris} weight={600}>Only a working day</T> : null}
        </g>
      ))}
    </Figure>
  );
}

function GuidesScene() {
  const steps = ["Workspace", "Invite", "Portal", "Billing"];
  return (
    <Figure
      label="Four setup steps from workspace to billing"
      caption="Create the workspace, invite seats, share the portal, connect billing. No call."
    >
      <Arc d="M 100 230 H 620" />
      {steps.map((step, index) => (
        <g key={step} className={index === 0 ? "sy-breathe" : "sy-dot"}>
          <circle cx={110 + index * 170} cy="230" r="28" fill={index === 3 ? money : cream} stroke={index === 3 ? money : iris} strokeWidth="1.5" />
          <T x={110 + index * 170} y="236" anchor="middle" fill={index === 3 ? cream : ink} weight={600}>
            {index + 1}
          </T>
          <T x={110 + index * 170} y="300" anchor="middle" fill={ink} weight={600}>{step}</T>
        </g>
      ))}
    </Figure>
  );
}

function StartScene() {
  return (
    <Figure
      label="A workspace form with a free trial and no card"
      caption="Work email, a workspace name, an industry. The free trial does not need a card."
    >
      <rect x="150" y="50" width="420" height="400" rx="24" fill={quiet} />
      <T x="360" y="100" anchor="middle" fill={ink} size={20} weight={600}>New workspace</T>
      {["Work email", "Workspace name", "Industry"].map((field, index) => (
        <g key={field}>
          <T x="190" y={150 + index * 78} size={12}>{field}</T>
          <rect x="190" y={162 + index * 78} width="340" height="40" rx="12" fill={cream} stroke={line} strokeWidth="1.5" />
        </g>
      ))}
      <g className="sy-breathe">
        <rect x="190" y="390" width="200" height="40" rx="20" fill={iris} />
        <T x="290" y="416" anchor="middle" fill={cream} weight={600}>Start free trial</T>
      </g>
    </Figure>
  );
}

function InterestedScene() {
  const path = "M 180 250 C 300 180, 420 180, 520 250";
  return (
    <Figure
      label="A note with your industry traveling to the Syclops team"
      caption="Tell us the business. Or skip the note and open a free trial yourself."
    >
      <g className="sy-float">
        <rect x="60" y="140" width="220" height="180" rx="20" fill={quiet} stroke={line} strokeWidth="1.5" />
        <T x="84" y="184" fill={ink} weight={600}>Your note</T>
        <T x="84" y="216" size={13}>Name</T>
        <T x="84" y="244" size={13}>Industry</T>
        <T x="84" y="272" size={13}>Business</T>
      </g>
      <Arc d={path} />
      <Traveler d={path} dur="6s" />
      <circle cx="560" cy="250" r="54" fill={iris} className="sy-breathe" />
      <T x="560" y="246" anchor="middle" fill={cream} weight={600}>Syclops</T>
      <T x="560" y="268" anchor="middle" fill={cream} size={12}>We’ll reply</T>
    </Figure>
  );
}

function LoginScene() {
  return (
    <Figure
      label="A workspace opening around an iris, with a trial beside it"
      caption="Log in if the workspace exists. Start a free trial if it does not."
    >
      <rect x="70" y="80" width="340" height="320" rx="24" fill={quiet} stroke={ink} strokeWidth="1.5" />
      <T x="100" y="130" fill={ink} size={20} weight={600}>Workspace</T>
      <circle cx="240" cy="250" r="70" fill="none" stroke={ink} strokeWidth="1.5" />
      <circle cx="240" cy="250" r="36" fill="none" stroke={iris} strokeWidth="1.5" className="sy-dash scene-spin" style={{ transformOrigin: "240px 250px" }} />
      <circle cx="240" cy="250" r="10" fill={iris} className="sy-breathe" />
      <g className="sy-float">
        <rect x="450" y="170" width="200" height="140" rx="20" fill={cream} stroke={iris} strokeWidth="1.5" />
        <T x="550" y="220" anchor="middle" fill={ink} weight={600}>No workspace?</T>
        <T x="550" y="250" anchor="middle" size={13}>Free trial</T>
        <T x="550" y="274" anchor="middle" size={12}>No card</T>
      </g>
    </Figure>
  );
}

function PrivacyScene() {
  return (
    <Figure
      label="Personal data and GPS staying inside a tenant boundary"
      caption="GPS is kept for a working day. You set how long it stays. It does not cross tenants."
    >
      <rect x="80" y="70" width="400" height="340" rx="28" fill={quiet} stroke={ink} strokeWidth="1.5" />
      <T x="280" y="120" anchor="middle" fill={ink} weight={600}>Your tenant</T>
      <circle cx="200" cy="220" r="10" fill={iris} className="sy-dot" />
      <circle cx="280" cy="260" r="10" fill={ink} className="sy-dot-d" />
      <circle cx="360" cy="200" r="10" fill={iris} className="sy-dot-e" />
      <T x="280" y="340" anchor="middle" size={13}>Visits, plans, referrals</T>
      <path d="M 520 300 C 560 240, 600 220, 640 160" fill="none" stroke={line} strokeWidth="1.5" strokeDasharray="3 6" />
      <T x="600" y="340" anchor="middle" fill={leak} size={13} weight={600}>Not a forever trail</T>
    </Figure>
  );
}

function TermsScene() {
  return (
    <Figure
      label="Terms accepted when a workspace is created"
      caption="Creating a workspace accepts the terms. Seats are for the people you invite."
    >
      <rect x="140" y="60" width="300" height="370" rx="20" fill={quiet} />
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <rect key={index} x="176" y={110 + index * 36} width={index % 2 ? 180 : 220} height="10" rx="5" fill={line} className={index % 2 ? "sy-dot" : undefined} />
      ))}
      <g className="sy-breathe">
        <circle cx="520" cy="250" r="70" fill={cream} stroke={iris} strokeWidth="1.5" />
        <T x="520" y="246" anchor="middle" fill={iris} weight={600}>Accepted</T>
        <T x="520" y="270" anchor="middle" size={12}>At signup</T>
      </g>
    </Figure>
  );
}

function CookiesScene() {
  return (
    <Figure
      label="One essential cookie, with advertising cookies crossed out"
      caption="Essential cookies keep you signed in. Advertising cookies are not set."
    >
      <g className="sy-float">
        <circle cx="220" cy="230" r="80" fill={iris} />
        <T x="220" y="226" anchor="middle" fill={cream} weight={600}>Essential</T>
        <T x="220" y="250" anchor="middle" fill={cream} size={12}>Sign-in only</T>
      </g>
      <g>
        <circle cx="480" cy="170" r="54" fill={quiet} stroke={leak} strokeWidth="1.5" />
        <path d="M 456 146 L 504 194 M 504 146 L 456 194" stroke={leak} strokeWidth="1.5" />
        <T x="480" y="260" anchor="middle" fill={leak} weight={600}>Ads</T>
      </g>
      <g className="sy-dot">
        <circle cx="560" cy="320" r="40" fill={quiet} stroke={line} strokeWidth="1.5" />
        <T x="560" y="390" anchor="middle" fill={muted} size={13}>Not used</T>
      </g>
    </Figure>
  );
}

function RefundScene() {
  return (
    <Figure
      label="A seven-day window and a refund returning"
      caption="Ask within 7 days of the order. An approved refund is sent within 14 days."
    >
      {Array.from({ length: 7 }, (_, index) => (
        <g key={index}>
          <rect
            x={48 + index * 70}
            y="120"
            width="56"
            height="56"
            rx="14"
            fill={index < 7 ? cream : quiet}
            stroke={index === 6 ? iris : line}
            strokeWidth="1.5"
            className={index === 6 ? "sy-breathe" : undefined}
          />
          <T x={76 + index * 70} y="154" anchor="middle" fill={ink} weight={600}>
            {index + 1}
          </T>
        </g>
      ))}
      <T x="360" y="220" anchor="middle" fill={ink} weight={600}>Seven days to ask</T>
      <Arc d="M 160 300 C 280 360, 440 360, 560 300" color={money} />
      <circle cx="560" cy="300" r="28" fill={money} className="sy-breathe" />
      <T x="560" y="306" anchor="middle" fill={cream} weight={600}>₹</T>
      <T x="360" y="420" anchor="middle" size={13}>Approved refunds return within 14 days</T>
    </Figure>
  );
}

function MissingScene() {
  return (
    <Figure
      label="A loop with a gap where this page should be"
      caption="This page is off the loop. Start a free trial, or go back to the homepage."
    >
      <path
        d="M 360 90 A 150 150 0 1 1 250 360"
        fill="none"
        stroke={line}
        strokeWidth="1.5"
      />
      <path
        d="M 360 90 A 150 150 0 1 1 250 360"
        fill="none"
        stroke={iris}
        strokeWidth="1.5"
        pathLength={100}
        className="scene-draw"
      />
      <circle cx="430" cy="340" r="10" fill={leak} className="sy-breathe" />
      <T x="360" y="240" anchor="middle" fill={ink} size={28} weight={600}>404</T>
      <T x="360" y="420" anchor="middle">The loop does not land here</T>
    </Figure>
  );
}

function ImportScene() {
  return (
    <Figure
      label="A spreadsheet turning into pins on a field route"
      caption="Import the beat from CSV. The phone becomes the source of truth."
    >
      <rect x="48" y="80" width="250" height="300" rx="20" fill={quiet} />
      <T x="72" y="120" fill={ink} weight={600}>Excel beat</T>
      {[0, 1, 2, 3, 4].map((index) => (
        <rect key={index} x="72" y={146 + index * 40} width="200" height="24" rx="8" fill={cream} className={index === 1 ? "sy-dot" : undefined} />
      ))}
      <Arc d="M 300 230 C 360 180, 400 180, 450 230" />
      <Traveler d="M 300 230 C 360 180, 400 180, 450 230" dur="6s" />
      <rect x="450" y="100" width="210" height="280" rx="20" fill={cream} stroke={iris} strokeWidth="1.5" />
      <path d="M 490 320 C 520 260, 560 280, 600 180" fill="none" stroke={iris} strokeWidth="1.5" className="scene-draw" pathLength={100} />
      <circle cx="490" cy="320" r="6" fill={ink} />
      <circle cx="600" cy="180" r="6" fill={iris} className="sy-breathe" />
      <T x="555" y="150" anchor="middle" fill={ink} weight={600}>Today’s beat</T>
    </Figure>
  );
}

function QualifyScene() {
  return (
    <Figure
      label="A qualification window holding a reward, and a duplicate phone blocked"
      caption="The reward waits until they stay. The same phone cannot be referred twice."
    >
      <circle cx="230" cy="230" r="100" fill="none" stroke={line} strokeWidth="1.5" />
      <path d="M 230 130 A 100 100 0 0 1 320 270" fill="none" stroke={iris} strokeWidth="1.5" pathLength={100} className="scene-draw" />
      <T x="230" y="224" anchor="middle" fill={ink} weight={600}>Window</T>
      <T x="230" y="248" anchor="middle" size={13}>Reward waits</T>
      <g className="sy-float">
        <rect x="420" y="120" width="230" height="90" rx="18" fill={cream} stroke={money} strokeWidth="1.5" />
        <T x="444" y="162" fill={money} weight={600}>Stayed · pay</T>
        <T x="444" y="186" size={12}>After the window</T>
      </g>
      <g>
        <rect x="420" y="250" width="230" height="90" rx="18" fill={quiet} stroke={leak} strokeWidth="1.5" />
        <T x="444" y="292" fill={leak} weight={600}>Same phone</T>
        <T x="444" y="316" size={12}>Blocked</T>
      </g>
    </Figure>
  );
}

const scenes: Record<SceneKind, () => ReactNode> = {
  loop: LoopScene,
  field: FieldScene,
  tada: TadaScene,
  referral: ReferralScene,
  portal: PortalScene,
  gym: GymScene,
  subscription: SubscriptionScene,
  analytics: AnalyticsScene,
  mobile: MobileScene,
  integrations: IntegrationsScene,
  industry: IndustryIndexScene,
  gyms: () => (
    <NounScene
      label="Trainer visit, member referral, and a membership"
      caption="Trainers visit. Members refer. The membership stays attached to the person who sent it."
      visit="Trainer visit"
      referrer="Member"
      plan="Membership"
    />
  ),
  education: () => (
    <NounScene
      label="Counselor visit, alumni referral, and a semester fee"
      caption="Counselors cover campuses. Alumni refer. An unpaid fee becomes the next visit."
      visit="Counselor visit"
      referrer="Alumni"
      plan="Semester fee"
    />
  ),
  healthcare: () => (
    <NounScene
      label="Clinic visit, partner referral, and a care plan"
      caption="Officers visit partner clinics. Patients enroll. A lapsed plan goes back on the beat."
      visit="Clinic visit"
      referrer="Partner"
      plan="Care plan"
    />
  ),
  sales: () => (
    <NounScene
      label="Dealer visit, channel partner lead, and a retainer"
      caption="Reps walk the beat. Partners send the lead. The retainer still names who introduced it."
      visit="Dealer visit"
      referrer="Partner lead"
      plan="Retainer"
    />
  ),
  fintech: () => (
    <NounScene
      label="Home visit, family referral, and a premium that keeps paying"
      caption="Agents enroll at the door. Customers refer family. A lapse is a visit, not only a portal."
      visit="Home visit"
      referrer="Family"
      plan="Premium"
    />
  ),
  medtech: () => (
    <NounScene
      label="KOL visit, department referral, and a device contract"
      caption="Reps visit KOLs. Departments refer. The service plan still shows the visit that opened it."
      visit="KOL visit"
      referrer="Department"
      plan="Service plan"
    />
  ),
  compare: CompareIndexScene,
  "compare-chat": CompareChatScene,
  "compare-gps": CompareGpsScene,
  "compare-crm": CompareCrmScene,
  "compare-vertical": CompareVerticalScene,
  "compare-gym": CompareGymScene,
  customers: CustomersScene,
  pricing: PricingScene,
  security: SecurityScene,
  blog: BlogScene,
  faq: FaqScene,
  guides: GuidesScene,
  start: StartScene,
  interested: InterestedScene,
  login: LoginScene,
  legal: TermsScene,
  privacy: PrivacyScene,
  terms: TermsScene,
  cookies: CookiesScene,
  refund: RefundScene,
  missing: MissingScene,
  import: ImportScene,
  qualify: QualifyScene,
};

export function SvgScene({
  kind,
  decorative = false,
}: {
  kind: SceneKind;
  decorative?: boolean;
}) {
  if (decorative) return <LoopWatermark />;
  const Scene = scenes[kind] ?? scenes.loop;
  return (
    <div className="page-scene w-full">
      <style>
        {`@media (prefers-reduced-motion: reduce) {
          .page-scene .sy-motion-only { display: none !important; }
        }`}
      </style>
      <Scene />
    </div>
  );
}
