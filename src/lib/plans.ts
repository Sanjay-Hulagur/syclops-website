/** Public field-seat prices. Pricing page, offers, and industry pages share this. */

export type PublicPlan = {
  name: "Team" | "Growth" | "Scale";
  priceInr: number;
  cadence: string;
  featured?: boolean;
  items: string[];
  gymItems: string[];
  offerDescription: string;
};

export const publicPlans: PublicPlan[] = [
  {
    name: "Team",
    priceInr: 1499,
    cadence: "per field seat / month",
    items: [
      "Field tracking, TADA, routes",
      "Referral workspace",
      "Up to 3 managers",
      "WhatsApp + Maps",
      "Setup guides and email support",
    ],
    gymItems: ["Field tracking", "TADA", "Referral workspace"],
    offerDescription:
      "Field tracking, TADA, routes, referral workspace, up to 3 managers, WhatsApp and Maps. Per field seat per month.",
  },
  {
    name: "Growth",
    priceInr: 2499,
    cadence: "per field seat / month",
    featured: true,
    items: [
      "Everything in Team",
      "Referral page for partners and members",
      "Membership plans with cash, UPI, EMI and Razorpay",
      "Referral payouts, approved before they are paid",
      "Analytics by referrer and region",
    ],
    gymItems: [
      "Everything in Team",
      "Member referral page",
      "Membership plans and EMI payments",
      "Referral rewards",
      "Analytics",
    ],
    offerDescription:
      "Team plus a referral page for partners and members, membership plans with cash, UPI, EMI and Razorpay payments, referral payouts with approval, and analytics by referrer and region. Per field seat per month.",
  },
  {
    name: "Scale",
    priceInr: 4499,
    cadence: "per field seat / month",
    items: [
      "Everything in Growth",
      "Regions and territories for large teams",
      "Audit logs",
      "HIS / ERP connector, set up for your system",
      "Setup with our team on a call",
    ],
    gymItems: [
      "Everything in Growth",
      "Regions for several locations",
      "Audit logs",
      "Setup with our team",
    ],
    offerDescription:
      "Growth plus regions and territories for large teams, audit logs, an HIS or ERP connector set up for your system, and setup with the Syclops team. Per field seat per month.",
  },
];

export function formatInr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
