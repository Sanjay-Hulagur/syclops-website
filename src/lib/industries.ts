export type IndustryId =
  | "gyms"
  | "education"
  | "healthcare"
  | "sales"
  | "fintech"
  | "medtech";

export type Industry = {
  id: IndustryId;
  label: string;
  eyebrow: string;
  headline: string;
  body: string;
  visit: string;
  referrer: string;
  plan: string;
  staff: string;
  metrics: {
    visits: string;
    referrals: string;
    mrr: string;
    risk: string;
  };
  stage: {
    person: string;
    role: string;
    visitTitle: string;
    visitMeta: string;
    referralFrom: string;
    referralTo: string;
    referralStatus: string;
    planName: string;
    planState: string;
    amount: string;
  };
  pain: string;
  outcome: string;
};

export const industries: Industry[] = [
  {
    id: "gyms",
    label: "Gyms",
    eyebrow: "Studios and gym chains",
    headline: "Member referrals that turn into memberships you can keep.",
    body: "Trainers visit. Members refer friends. Syclops tracks the join, the plan, and the renewal — then sends staff back out when someone is about to churn.",
    visit: "trainer visit",
    referrer: "member",
    plan: "membership",
    staff: "trainers",
    metrics: {
      visits: "42 visits today",
      referrals: "18 referral joins",
      mrr: "₹4.1L MRR",
      risk: "7 at-risk memberships",
    },
    stage: {
      person: "Ananya Rao",
      role: "Floor trainer · Indiranagar",
      visitTitle: "Checked in at Clubhouse West",
      visitMeta: "12 min · photo + GPS",
      referralFrom: "Rahul M.",
      referralTo: "Priya K.",
      referralStatus: "Converted · Gold annual",
      planName: "Gold annual",
      planState: "Renews 12 Nov",
      amount: "₹18,000",
    },
    pain: "Walk-ins in WhatsApp, referrals on a whiteboard, renewals in the gym software.",
    outcome: "Every referred join is tied to a membership that still pays.",
  },
  {
    id: "education",
    label: "Education",
    eyebrow: "Schools, colleges, coaching",
    headline: "Turn student enquiries into admissions — and admissions into collected fees.",
    body: "Track counselor visits, parent and alumni referrals, admissions, and pending fee installments. Keep your academic ERP.",
    visit: "counselor visit",
    referrer: "alumni / parent",
    plan: "semester fee",
    staff: "counselors",
    metrics: {
      visits: "61 campus visits",
      referrals: "24 admitted referrals",
      mrr: "₹12.8L fees",
      risk: "11 unpaid installments",
    },
    stage: {
      person: "Farhan Iqbal",
      role: "Counselor · South cluster",
      visitTitle: "Visit at St. Mary's PU",
      visitMeta: "28 min · notes logged",
      referralFrom: "Class of 2022",
      referralTo: "Aditi S.",
      referralStatus: "Admitted · Term 1 paid",
      planName: "NEET crash · Term 1",
      planState: "Next installment 01 Dec",
      amount: "₹42,500",
    },
    pain: "Enquiry Excel, counselor calls, and the accounts office never agree.",
    outcome: "A referred student is visible from campus visit to the last fee.",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    eyebrow: "Hospitals and diagnostic centres",
    headline: "Turn doctor referrals into measurable hospital growth.",
    body: "Manage referral doctors, track PRO visits, and follow patient referrals. Keep your existing HIS.",
    visit: "PRO visit",
    referrer: "referral doctor",
    plan: "patient referral",
    staff: "PROs",
    metrics: {
      visits: "PRO visits logged",
      referrals: "Doctor referrals",
      mrr: "Source still attached",
      risk: "Follow-up gaps",
    },
    stage: {
      person: "Meera Nair",
      role: "PRO · North territory",
      visitTitle: "Doctor clinic check-in",
      visitMeta: "GPS · notes · follow-up",
      referralFrom: "Dr. Shah",
      referralTo: "Patient referral",
      referralStatus: "Source still attached",
      planName: "Cardiology referral",
      planState: "Status on the record",
      amount: "OP match if HIS connected",
    },
    pain: "Doctor relationships, PRO visits, and patient referrals live apart.",
    outcome: "Field activity stays connected to the doctor who sent the patient.",
  },
  {
    id: "sales",
    label: "Sales",
    eyebrow: "Field sales and channel partners",
    headline: "Turn field visits and partner referrals into revenue.",
    body: "Plan sales visits, manage channel partners, track referred leads, and follow every opportunity through to conversion and renewal.",
    visit: "beat visit",
    referrer: "channel partner",
    plan: "retainer",
    staff: "reps",
    metrics: {
      visits: "54 beat visits",
      referrals: "16 partner leads",
      mrr: "₹9.2L retainers",
      risk: "5 at-risk accounts",
    },
    stage: {
      person: "Vikram Sethi",
      role: "Key account · West",
      visitTitle: "Dealer visit · Andheri",
      visitMeta: "Route 14 · notes logged",
      referralFrom: "Orbit Media",
      referralTo: "Northwind Retail",
      referralStatus: "Won · 12-month retainer",
      planName: "Growth retainer",
      planState: "Invoice due 5th",
      amount: "₹75,000",
    },
    pain: "CRM for deals, WhatsApp for partners, GPS app that stops at the pin.",
    outcome: "The partner who sent the lead is still attached when the retainer renews.",
  },
  {
    id: "fintech",
    label: "Fintech",
    eyebrow: "NBFC, insurance, wealth",
    headline: "Turn agent visits into policies that keep paying.",
    body: "Track agent check-ins, customer and DSA referrals, and premium or SIP follow-ups. Keep your core policy or loan system.",
    visit: "agent visit",
    referrer: "customer",
    plan: "policy / SIP",
    staff: "agents",
    metrics: {
      visits: "73 agent visits",
      referrals: "22 family referrals",
      mrr: "₹21.0L AUM flow",
      risk: "14 lapsed premiums",
    },
    stage: {
      person: "Lakshmi Iyer",
      role: "Agent · Coimbatore",
      visitTitle: "Home visit · Peelamedu",
      visitMeta: "KYC photo · geo verified",
      referralFrom: "Suresh I.",
      referralTo: "Nandini I.",
      referralStatus: "Policy issued",
      planName: "Term + health bundle",
      planState: "Premium due 18 Nov",
      amount: "₹2,140 / mo",
    },
    pain: "MIS in Excel, lapses in the insurer portal, agents reporting on a call.",
    outcome: "A referred policy is a living subscription, not a one-time form.",
  },
  {
    id: "medtech",
    label: "Medtech",
    eyebrow: "Devices and diagnostics",
    headline: "Turn KOL visits into device contracts that stay in service.",
    body: "Track department visits, hospital referrals, evaluations, and service-plan follow-ups. Keep your ERP and the hospital HIS.",
    visit: "KOL visit",
    referrer: "department head",
    plan: "device contract",
    staff: "clinical reps",
    metrics: {
      visits: "19 KOL visits",
      referrals: "6 eval conversions",
      mrr: "₹38L contracted",
      risk: "3 service lapses",
    },
    stage: {
      person: "Dr. Ajay Menon (rep)",
      role: "Clinical specialist · APAC",
      visitTitle: "Cath lab visit",
      visitMeta: "Badge photo · 41 min",
      referralFrom: "Dept. of Cardiology",
      referralTo: "City Heart Centre",
      referralStatus: "Converted · 24-mo plan",
      planName: "Analyzer + service",
      planState: "Q3 service window",
      amount: "₹4.2L / qtr",
    },
    pain: "Visit logs in a field app, evaluations in email, contracts in another system.",
    outcome: "The KOL visit is still on the contract when service revenue lands.",
  },
];

export function getIndustry(id: string) {
  return industries.find((item) => item.id === id);
}

/** Start-form choices. "Others" is not an industry page. */
export const startFormIndustries: { id: string; label: string }[] = [
  ...industries.map((item) => ({ id: item.id, label: item.label })),
  { id: "others", label: "Others" },
];

export function isStartFormIndustry(value: string): boolean {
  if (startFormIndustries.some((item) => item.id === value)) return true;
  if (!value.startsWith("others:")) return false;
  const detail = value.slice("others:".length).trim();
  return detail.length > 0 && value.length <= 50 && !/[\r\n]/.test(value);
}
