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
    headline: "Counselor visits and alumni referrals, billed by the semester.",
    body: "Field counselors cover campuses and tuition centres. Alumni and parents refer. Syclops follows the student from enquiry to fee plan.",
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
    eyebrow: "Clinics and care networks",
    headline: "Field outreach, referred patients, and care plans in one loop.",
    body: "For clinics, diagnostics, and care programmes — not a hospital HIS. Partners refer. Plans renew. Field staff close the loop.",
    visit: "field visit",
    referrer: "partner clinic",
    plan: "care plan",
    staff: "health officers",
    metrics: {
      visits: "89 visits today",
      referrals: "31 plan enrollments",
      mrr: "₹6.4L plans",
      risk: "9 lapsed plans",
    },
    stage: {
      person: "Meera Nair",
      role: "Health officer · Cluster B",
      visitTitle: "Partner clinic check-in",
      visitMeta: "Geo + visiting card photo",
      referralFrom: "Dr. Shah Clinic",
      referralTo: "Kiran P.",
      referralStatus: "Enrolled · 90-day plan",
      planName: "Metabolic 90-day",
      planState: "Active · week 4",
      amount: "₹8,999",
    },
    pain: "Referrals in WhatsApp, field notes in a diary, plans in the billing desk.",
    outcome: "Every referred patient is on a plan you can see — or a task to win back.",
  },
  {
    id: "sales",
    label: "Sales",
    eyebrow: "Sales and marketing teams",
    headline: "Beat visits and partner referrals that become retainers.",
    body: "Field reps cover accounts. Channel partners send leads. Syclops connects the visit to the close and the recurring contract.",
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
      visitMeta: "Route 14 · TADA auto",
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
    headline: "Agent visits, customer referrals, and policies that keep paying.",
    body: "Field agents enroll. Customers refer family. Syclops tracks the policy or SIP from the doorstep visit to the next premium.",
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
    headline: "KOL visits and hospital referrals that become device contracts.",
    body: "Reps visit KOLs and departments. Referrals become evaluations, then contracted placements with service plans.",
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
