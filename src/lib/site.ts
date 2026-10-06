export const site = {
  name: "Syclops",
  domain: "syclops.in",
  url: "https://syclops.in",
  tagline: "See the visit. Trace the referral. Keep the subscription.",
  description:
    "Referral management software for clinics, gyms, campuses, and field teams in India. Track partner and member referrals from intro to payout, with visits and subscriptions in one loop.",
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
    { label: "Compare", href: "/compare" },
    { label: "Guides", href: "/guides" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
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
    body: "Hot leads, call notes, conversions, and a pipeline that actually connects to the field.",
  },
  {
    title: "Referral partners",
    href: "/product/referrals",
    body: "A portal for members, alumni, KOLs, clinics, or channel partners. They send. They see status. They get paid.",
  },
  {
    title: "Management",
    href: "/product/analytics",
    body: "Who visited, who referred, who still pays. MRR, leakage, and at-risk accounts in one lens.",
  },
];

export const integrations = [
  { name: "WhatsApp Business", use: "Templates, campaigns, and conversation logs" },
  { name: "Razorpay & Stripe", use: "Plan enrollments, renewals, and referral rewards" },
  { name: "Google Maps", use: "Geocoding, routes, and visit map PDFs" },
  { name: "Billing / HIS / ERP", use: "Admissions, invoices, and membership ledgers" },
  { name: "Accounting", use: "TADA, collections, and payout exports" },
];
