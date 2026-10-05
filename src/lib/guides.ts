export const guides = [
  {
    slug: "create-workspace",
    title: "Create a workspace",
    scene: "start" as const,
    summary: "Pick an industry. Nouns for visits, referrers, and plans follow from that.",
    steps: [
      { title: "Use your work email", body: "That email becomes the owner. You can transfer ownership later in Settings → Team." },
      { title: "Name the workspace", body: "Usually the brand, not a person. Members and partners will see this name on the portal." },
      { title: "Pick an industry", body: "Gyms, education, healthcare, sales, fintech, or medtech. You can rename objects afterwards." },
      { title: "Land in Settings", body: "Regions, roles, and the empty beat list are ready. Nothing is billed until you add a paid field seat." },
    ],
  },
  {
    slug: "invite-team",
    title: "Invite field seats and managers",
    scene: "mobile" as const,
    summary: "Paid seats are field and managers. Partners use a free portal link.",
    steps: [
      { title: "Copy the invite", body: "Settings → Team → Invite. One link per role, or unique emails." },
      { title: "Managers see the loop", body: "They get analytics, TADA approval, and plan settings. They do not need a beat." },
      { title: "Field installs the app", body: "The invite carries the tenant. They check in on the first working day." },
      { title: "Partners stay free", body: "Share the portal URL. They never consume a seat." },
    ],
  },
  {
    slug: "field-day",
    title: "Run a field day",
    scene: "field" as const,
    summary: "Check-in starts the clock. Visits attach to accounts. TADA writes itself.",
    steps: [
      { title: "Check in", body: "Geo required. Photo optional. The working day starts." },
      { title: "Open the beat", body: "Accounts with last-visit dates. Skip is logged. New accounts can be added from the phone." },
      { title: "Log the visit", body: "Notes, photo, duration. If a referral opened, it is the same object." },
      { title: "Check out", body: "Route closes. Mileage is the path, not a pin-to-pin guess." },
    ],
  },
  {
    slug: "referral-portal",
    title: "Turn on the referral portal",
    scene: "referral" as const,
    summary: "One link. Status the sender can see. Rewards on the next invoice.",
    steps: [
      { title: "Enable the portal", body: "Settings → Referrals. Choose member, partner, or both." },
      { title: "Set the reward", body: "Credit, extra days, or a percent of the first invoice. Add a qualification window." },
      { title: "Share the URL", body: "QR, WhatsApp, or print. Referrers sign in with phone or email." },
      { title: "Watch leakage", body: "Sent that never converted, converted that never paid, paying that churned." },
    ],
  },
  {
    slug: "plans-billing",
    title: "Plans and billing",
    scene: "subscription" as const,
    summary: "Connect Razorpay or Stripe. Plans, dunning, and rewards attach to those payments.",
    steps: [
      { title: "Add keys", body: "Settings → Integrations. Test mode first." },
      { title: "Create a plan", body: "Name, interval, price, trial, failed-payment behaviour." },
      { title: "Map origin", body: "A new plan keeps the referrer and the last visit automatically." },
      { title: "At-risk queue", body: "Failed payment or quiet usage writes a field task. You do not assign it by hand." },
    ],
  },
  {
    slug: "reports",
    title: "Reports and export",
    scene: "analytics" as const,
    summary: "Loop health, people, and CSV. No analyst in the middle.",
    steps: [
      { title: "Loop health", body: "Visits → referrals → plans → renewals for any date range." },
      { title: "People", body: "Staff and referrers ranked by paying outcome, not kilometres." },
      { title: "Regions", body: "Filter by the hierarchy you set on day one." },
      { title: "Export", body: "CSV and PDF from the same screen. TADA sheets for accounts." },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((item) => item.slug === slug);
}

export const faqs = [
  {
    q: "Who is Syclops for?",
    a: "Any team that grows through field staff and people who refer — then keeps customers on a plan. Gyms, campuses, clinics, sales orgs, fintech, medtech.",
  },
  {
    q: "Is there a sales call?",
    a: "No. Create a workspace, invite seats, connect billing. Guides cover the rest.",
  },
  {
    q: "What is a field seat?",
    a: "A paid user who checks in, logs visits, and appears on TADA. Managers can be seats. Referrers are not seats.",
  },
  {
    q: "Can partners use it without paying?",
    a: "Yes. The portal is included. They send referrals and see status. They never consume a seat.",
  },
  {
    q: "Does it work offline?",
    a: "Visits, photos, and check-in queue on the device and sync when the signal returns.",
  },
  {
    q: "How is this different from GPS tracking?",
    a: "GPS is evidence. Syclops continues to the referral and the subscription. A pin with no paying plan is still leakage.",
  },
  {
    q: "How is this different from a CRM?",
    a: "A CRM is deals. Syclops is visit, referrer, and plan as one loop — including TADA and dunning.",
  },
  {
    q: "Where is data hosted?",
    a: "India region is the default on Scale. You pick it in Settings → Security after you upgrade.",
  },
  {
    q: "How do I cancel?",
    a: "Settings → Billing. Credits follow the refund policy. There is no desk to email.",
  },
  {
    q: "Can I change industry later?",
    a: "Yes. Object labels (visit, referrer, plan) are editable. History stays attached to the same records.",
  },
];
