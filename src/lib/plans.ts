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
      "Membership plans with cash, UPI and Razorpay",
      "Leads, call outcomes and conversions",
      "Analytics by referrer and region",
      "Referral page for referring clinics",
    ],
    gymItems: [
      "Everything in Team",
      "Membership plans with UPI, cash and Razorpay",
      "Leads and call outcomes",
      "Analytics by referrer",
    ],
    offerDescription:
      "Team plus membership plans with cash, UPI and Razorpay payments, leads with call outcomes and conversions, analytics by referrer and region, and a referral page for referring clinics. Per field seat per month.",
  },
  {
    name: "Scale",
    priceInr: 4499,
    cadence: "per field seat / month",
    items: [
      "Everything in Growth",
      "Regions and territories for large teams",
      "Cluster leaders who see their own region",
      "Hospital system (HIS) sync, scoped on a call",
      "Setup with our team on a call",
    ],
    gymItems: [
      "Everything in Growth",
      "Regions for several locations",
      "A lead for each region who sees their own team",
      "Setup with our team",
    ],
    offerDescription:
      "Growth plus regions and territories for large teams, cluster leaders who see their own region, a hospital system (HIS) sync scoped on a call, and setup with the Syclops team. Per field seat per month.",
  },
];

export function formatInr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
