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
};

export const industries: Industry[] = [
  {
    id: "gyms",
    label: "Gyms",
    eyebrow: "Studios and gym chains",
    headline: "Member referrals that turn into paid memberships.",
    body: "Trainers visit. Members refer friends. Syclops tracks who sent each join, the membership, and its payments, so staff know whom to follow up with.",
    visit: "trainer visit",
    referrer: "member",
    plan: "membership",
    staff: "trainers",
  },
  {
    id: "education",
    label: "Education",
    eyebrow: "Schools, colleges, coaching",
    headline: "Turn student enquiries into admissions — and admissions into collected fees.",
    body: "Track counselor visits, parent and alumni referrals, admissions, and fee payments that are due. Keep your academic ERP.",
    visit: "counselor visit",
    referrer: "alumni / parent",
    plan: "semester fee",
    staff: "counselors",
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
  },
  {
    id: "sales",
    label: "Sales",
    eyebrow: "Field sales and channel partners",
    headline: "Turn field visits and partner referrals into revenue.",
    body: "Plan sales visits, manage channel partners, track referred leads, and record each conversion.",
    visit: "beat visit",
    referrer: "channel partner",
    plan: "conversion",
    staff: "reps",
  },
  {
    id: "fintech",
    label: "Fintech",
    eyebrow: "NBFC, insurance, wealth",
    headline: "Turn agent visits into referrals you can trace.",
    body: "Track agent check-ins, customer and DSA referrals, and the follow-up visits after them. Keep your core policy or loan system.",
    visit: "agent visit",
    referrer: "customer or DSA",
    plan: "issued policy",
    staff: "agents",
  },
  {
    id: "medtech",
    label: "Medtech",
    eyebrow: "Devices and diagnostics",
    headline: "See which KOL visits lead to referrals.",
    body: "Track department visits, the KOLs who refer, follow-up calls, and each conversion. Your ERP stays as it is.",
    visit: "KOL visit",
    referrer: "KOL",
    plan: "sale",
    staff: "clinical reps",
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
