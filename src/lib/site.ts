const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://syclops.in").replace(/\/$/, "");

export const site = {
  name: "Syclops",
  domain: siteUrl.replace(/^https?:\/\//, ""),
  url: siteUrl,
  tagline: "See the visit. Trace the referral. Keep the subscription.",
  description:
    "Referral management software for clinics, gyms, campuses, and field teams in India. Track partner and member referrals from intro to payout, with visits and subscriptions in one loop.",
};

export const supportEmail = "syclops.team@gmail.com";

export const androidApp = {
  href: "/downloads/syclops.apk",
  filename: "Syclops.apk",
  page: "/product/mobile#download",
};

export const nav = {
  primary: [
    {
      label: "Product",
      href: "/product",
      children: [
        { label: "Overview", href: "/product" },
        { label: "Field tracking", href: "/product/field" },
        { label: "TADA software", href: "/tada-software" },
        { label: "Referral management", href: "/product/referrals" },
        {
          label: "Referral management software",
          href: "/referral-management-software",
        },
        { label: "Gym referral software", href: "/gym-referral-software" },
        { label: "Subscription management", href: "/product/subscriptions" },
        { label: "Analytics", href: "/product/analytics" },
        { label: "Mobile app", href: "/product/mobile" },
        { label: "Integrations", href: "/integrations" },
      ],
    },
    {
      label: "Industries",
      href: "/industries",
      children: [
        { label: "All industries", href: "/industries" },
        { label: "Gyms", href: "/industries/gyms" },
        { label: "Education", href: "/industries/education" },
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Sales & marketing", href: "/industries/sales" },
        { label: "Fintech", href: "/industries/fintech" },
        { label: "Medtech", href: "/industries/medtech" },
      ],
    },
    { label: "Pricing", href: "/pricing" },
  ],
};

export const loopNodes = [
  { id: "field", label: "Field visit", href: "/product/field" },
  { id: "referral", label: "Referral", href: "/product/referrals" },
  { id: "subscription", label: "Subscription", href: "/product/subscriptions" },
  { id: "revenue", label: "Revenue", href: "/product/analytics" },
] as const;

export const roles = [
  {
    title: "Field staff",
    href: "/product/field",
    body: "Geo check-in, visit photos, routes, daily reports, and TADA — without turning the app into a CCTV feed.",
  },
  {
    title: "Sales teams",
    href: "/product/analytics",
    body: "Leads, call notes, and conversions, in the same app as the field visits.",
  },
  {
    title: "Referral partners",
    href: "/product/referrals",
    body: "A referral page for members, alumni, KOLs, clinics, or channel partners. They send. They see status. They get paid.",
  },
  {
    title: "Management",
    href: "/product/analytics",
    body: "Who visited, who referred, and who has paid. Coverage, referrals by referrer and region, and Excel exports.",
  },
];

export const integrations = [
  { name: "WhatsApp Business", use: "Templates, campaigns, a shared inbox and delivery reports" },
  { name: "Razorpay", use: "Online payments for plan enrollments" },
  { name: "Google Maps", use: "Locations and routes for the field day" },
  { name: "Hospital billing (HIS)", use: "Admissions and bills, matched to referrals for payouts" },
  { name: "Excel exports", use: "TA/DA, visit, sales and referral payout reports" },
];
