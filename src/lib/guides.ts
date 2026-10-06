export const guides = [
  {
    slug: "create-workspace",
    title: "Create a Syclops workspace",
    scene: "start" as const,
    summary:
      "Pick an industry. Nouns for visits, referrers, and plans follow from that. No sales call.",
    intro: [
      "A Syclops workspace is the tenant your field staff, managers, and referral partners share. You create it on the web in a few minutes. Nothing is billed until you add a paid field seat.",
      "Industry is a label pack, not a fork of the product. Gyms get trainer visits, members, and memberships. Education gets counselor visits, alumni, and semester fees. You can rename objects later; history stays on the same records.",
    ],
    steps: [
      { title: "Use your work email", body: "That email becomes the owner. You can transfer ownership later in Settings → Team." },
      { title: "Name the workspace", body: "Usually the brand, not a person. Members and partners will see this name on the portal." },
      { title: "Pick an industry", body: "Gyms, education, healthcare, sales, fintech, or medtech. You can rename objects afterwards." },
      { title: "Land in Settings", body: "Regions, roles, and the empty beat list are ready. Nothing is billed until you add a paid field seat." },
    ],
    faqs: [
      { q: "Do I need a credit card to start?", a: "No. 14 days without a card. Seats bill when you add paid field or manager users." },
      { q: "Can I change industry later?", a: "Yes. Object labels are editable in Settings. Records do not fork." },
    ],
  },
  {
    slug: "invite-team",
    title: "Invite field seats and managers",
    scene: "mobile" as const,
    summary: "Paid seats are field and managers. Partners use a free portal link.",
    intro: [
      "Field seats check in, log visits, and appear on TADA. Managers see the loop, approve expenses, and change plans. Referral partners never consume a seat — they get a portal URL.",
      "The invite carries the tenant. Staff do not type a company code. iOS and Android both open the same workspace.",
    ],
    steps: [
      { title: "Copy the invite", body: "Settings → Team → Invite. One link per role, or unique emails." },
      { title: "Managers see the loop", body: "They get analytics, TADA approval, and plan settings. They do not need a beat." },
      { title: "Field installs the app", body: "The invite carries the tenant. They check in on the first working day." },
      { title: "Partners stay free", body: "Share the portal URL. They never consume a seat." },
    ],
    faqs: [
      { q: "What is a field seat?", a: "A paid user who checks in, logs visits, and appears on TADA. Managers can be seats. Referrers are not." },
      { q: "BYOD?", a: "Yes. Device GPS is used only on a checked-in working day." },
    ],
  },
  {
    slug: "field-day",
    title: "Run a field day with GPS check-in",
    scene: "field" as const,
    summary: "Check-in starts the clock. Visits attach to accounts. TADA writes itself.",
    intro: [
      "A field day in Syclops is not a live CCTV map. Check-in starts the working day. Each visit attaches to a partner, member, campus, or clinic. Checkout closes the route so mileage is the path, not a pin-to-pin guess.",
      "At-risk plans sit on top of the beat so the day is not random. Offline queue holds visits and photos until the radio returns — rural routes and clinic basements included.",
    ],
    steps: [
      { title: "Check in", body: "Geo required. Photo optional. The working day starts." },
      { title: "Open the beat", body: "Accounts with last-visit dates. Skip is logged. New accounts can be added from the phone." },
      { title: "Log the visit", body: "Notes, photo, duration. If a referral opened, it is the same object." },
      { title: "Check out", body: "Route closes. Mileage is the path, not a pin-to-pin guess." },
    ],
    faqs: [
      { q: "Is GPS always on?", a: "Only between check-in and check-out on a working day. Retention is a setting." },
      { q: "Who approves TADA?", a: "Managers, against the rate card you set (per km, daily cap)." },
    ],
  },
  {
    slug: "referral-portal",
    title: "Turn on the referral partner portal",
    scene: "referral" as const,
    summary: "One link. Status the sender can see. Rewards on the next invoice.",
    intro: [
      "Member-get-member, alumni intros, clinic partners, KOLs, and channel partners are the same referrer object with different reward rules if you want them. The portal is read-only for the sender: who they sent, where they are, when they pay.",
      "Nothing pays until the referred person stays past your qualification window. Duplicate phone or email cannot be referred twice into the same plan. Name mismatches sit in Pending until a manager assigns them.",
    ],
    steps: [
      { title: "Enable the portal", body: "Settings → Referrals. Choose member, partner, or both." },
      { title: "Set the reward", body: "Credit, extra days, or a percent of the first invoice. Add a qualification window." },
      { title: "Share the URL", body: "QR, WhatsApp, or print. Referrers sign in with phone or email." },
      { title: "Watch leakage", body: "Sent that never converted, converted that never paid, paying that churned." },
    ],
    faqs: [
      { q: "Do referrers need a paid seat?", a: "No. The portal is included on Growth and Scale." },
      { q: "Can members refer without an app?", a: "Yes. A link or QR is enough. They do not need the field app." },
    ],
  },
  {
    slug: "plans-billing",
    title: "Set up plans, Razorpay, and dunning",
    scene: "subscription" as const,
    summary: "Connect Razorpay or Stripe. Plans, dunning, and rewards attach to those payments.",
    intro: [
      "Subscriptions in Syclops remember who referred them and which visit closed. A failed debit is not only a retry email — after your retry schedule, it can write a field task for the owner of that beat.",
      "Cash and UPI collections marked by staff still attach to the plan and the referrer. If you already bill in another tool, connect the gateway or import invoices; origin still lives here.",
    ],
    steps: [
      { title: "Add keys", body: "Settings → Integrations. Test mode first." },
      { title: "Create a plan", body: "Name, interval, price, trial, failed-payment behaviour." },
      { title: "Map origin", body: "A new plan keeps the referrer and the last visit automatically." },
      { title: "At-risk queue", body: "Failed payment or quiet usage writes a field task. You do not assign it by hand." },
    ],
    faqs: [
      { q: "Can we collect cash at the desk?", a: "Yes. Staff mark the collection. It still attaches to the plan and the referrer." },
      { q: "Which gateways?", a: "Razorpay and Stripe. Tax labels and who can void live in Settings." },
    ],
  },
  {
    slug: "reports",
    title: "Loop health reports and CSV export",
    scene: "analytics" as const,
    summary: "Loop health, people, and CSV. No analyst in the middle.",
    intro: [
      "Loop health is visits that created referrals, referrals that became plans, and plans that renewed — for any date range, region, or campaign tag. People are ranked by paying outcome, not kilometres.",
      "CSV and PDF export from the same screen. TADA sheets for accounts. API on Scale if you already have a BI tool.",
    ],
    steps: [
      { title: "Loop health", body: "Visits → referrals → plans → renewals for any date range." },
      { title: "People", body: "Staff and referrers ranked by paying outcome, not kilometres." },
      { title: "Regions", body: "Filter by the hierarchy you set on day one." },
      { title: "Export", body: "CSV and PDF from the same screen. TADA sheets for accounts." },
    ],
    faqs: [
      { q: "Can referrers see company analytics?", a: "No. They see their own sends and payouts." },
      { q: "Can I embed this in BI?", a: "CSV on all plans. API on Scale." },
    ],
  },
  {
    slug: "import-beat-list",
    title: "Import a field beat list from CSV",
    scene: "field" as const,
    summary:
      "Upload accounts, campuses, clinics, or partners. Last-visit can be empty. The field app becomes the source of truth.",
    intro: [
      "Most teams still keep the beat in Excel: partner name, phone, area, last visit if anyone remembered to type it. Importing that sheet is how Syclops stops dual-running the route. After import, check-in, skips, and TADA attach to those rows.",
      "You do not need a perfect history. Empty last-visit dates are fine. The first working day writes the real dates. Duplicate phones are easier to clean in the sheet before upload than after staff add the same door twice from the phone.",
    ],
    steps: [
      {
        title: "Export or save CSV",
        body: "Columns that map cleanly: name, phone, email, address or area, owner if you have one. Last-visit can be blank.",
      },
      {
        title: "Open the import",
        body: "Settings → Accounts (or the industry noun: clinics, campuses, clubs). Choose CSV. Map columns once.",
      },
      {
        title: "Assign regions",
        body: "Put rows in the hierarchy you already set (city, cluster, club). Unassigned accounts sit in a queue, they do not vanish.",
      },
      {
        title: "Walk the first day",
        body: "Field seats see the beat on the phone. Skip is a status. New doors can still be added from the device with a geo stamp.",
      },
    ],
    faqs: [
      {
        q: "Can I import last year’s Excel beat?",
        a: "Yes. CSV of accounts, campuses, clinics, or partners. Last-visit can be empty. Then the field app is the source of truth — do not keep editing the sheet in parallel.",
      },
      {
        q: "What if two rows share a phone?",
        a: "Clean duplicates before upload when you can. After import, the same phone should not be referred twice into the same plan; accounts can still be merged by a manager.",
      },
      {
        q: "Does import start TADA?",
        a: "No. TADA starts when a field seat checks in. The CSV only gives the day a list of doors. Mileage still writes from the path at checkout.",
      },
    ],
  },
  {
    slug: "qualification-window",
    title: "Set a qualification window and block duplicate phones",
    scene: "referral" as const,
    summary:
      "Rewards wait until the referred customer stays. The same phone cannot be referred twice into the same plan. Pending names sit in a queue.",
    intro: [
      "Referral programmes fail when a reward fires on a rumour. A friend joins, bounces in a week, and the sender was already credited. Qualification windows, caps, and duplicate-phone rules are how you keep the portal honest without a phone call to the sender.",
      "Member-get-member, clinic partners, alumni, KOLs, and DSAs use the same referrer object. Reward type can differ. The window and the duplicate guard should not.",
    ],
    steps: [
      {
        title: "Open referral rules",
        body: "Settings → Referrals. Enable the portal for members, partners, or both.",
      },
      {
        title: "Set the window and cap",
        body: "Days the referred person must stay before credit, extra days, or a percent hits the next invoice. Add a cap per referrer if you need it.",
      },
      {
        title: "Keep the duplicate guard on",
        body: "Same phone or email cannot be referred twice into the same plan. Clean the beat CSV before import when you can.",
      },
      {
        title: "Work Pending matches",
        body: "Name mismatches sit in a queue. A manager assigns them. The sender sees status without calling the desk.",
      },
    ],
    faqs: [
      {
        q: "When does a reward actually pay?",
        a: "After the qualification window, on the next invoice. Nothing pays on a rumour that someone joined.",
      },
      {
        q: "Can I turn off duplicate blocking?",
        a: "You should not. Two intros to the same phone into one plan is how you pay twice for one customer. Merge accounts if staff created two doors.",
      },
      {
        q: "Do referrers see why they were not paid yet?",
        a: "They see status: sent, accepted, converted, paying. The window is your rule; they see that the plan is not paying yet, not your internal cap math.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((item) => item.slug === slug);
}

export const faqs = [
  {
    q: "What is referral management software?",
    a: "Software that records who sent a customer, whether they converted, and whether they paid. Syclops is referral management software that also keeps the field visit and the subscription on that same record.",
  },
  {
    q: "Is Syclops referral management software?",
    a: "Yes. Partners, members, alumni, clinics, and channel partners send through a portal, see status from sent to paying, and get rewards on the invoice. Referrers are not paid seats.",
  },
  {
    q: "Who is Syclops for?",
    a: "Any team that grows through field staff and people who refer — then keeps customers on a plan. Gyms, campuses, clinics, sales orgs, fintech, medtech.",
  },
  {
    q: "Is Syclops field tracking software or a CRM?",
    a: "Neither, fully. GPS check-in and TADA prove the visit. A CRM would stop at the deal. Syclops continues to the referral and the subscription.",
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
    q: "Does this replace gym, school, or clinic software?",
    a: "No. Keep vertical tools for classes, marks, or charts. Syclops owns field proof, referral origin, and whether the plan still pays.",
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
