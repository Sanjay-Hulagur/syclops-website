export const comparisons = [
  {
    slug: "whatsapp-excel",
    title: "Syclops vs WhatsApp + Excel",
    eyebrow: "Compare",
    summary:
      "Chat and spreadsheets start every growth team. They cannot keep visits, referrals, and plans in one place.",
    theirs: "WhatsApp + Excel",
    intro: [
      "Most gyms, campuses, clinics, and field sales teams still run growth on WhatsApp groups and a shared Excel. Photos of visits live in a chat. Referral names live in another. Who has paid lives in a sheet that is stale by Tuesday.",
      "Syclops is built for that exact stack — not to add a fourth tool, but to replace the joins those tools cannot keep. GPS check-ins, named referrals, and membership plans live in one app, so status is not something you scroll back to guess.",
    ],
    choose: [
      {
        title: "Keep WhatsApp for people",
        body: "Templates and announcements still go out on WhatsApp Business. The visit, the referral, and the plan do not live in the thread.",
      },
      {
        title: "Keep Excel for one-off exports",
        body: "Excel downloads from Syclops reports are fine. Running the team from a sheet is how missed visits and unpaid referrals come back.",
      },
    ],
    faqs: [
      {
        q: "Can I bring my Excel sheets?",
        a: "Yes, for staff and areas. Copy them into our Excel templates and upload them. Partners are added from the phone or in the admin console.",
      },
      {
        q: "Do staff still message on WhatsApp?",
        a: "They can. Referral updates, reminders, and campaigns can also go out from WhatsApp Business, which our team connects with you.",
      },
      {
        q: "Is this a WhatsApp CRM?",
        a: "No. WhatsApp is a channel. Syclops is the visit, the referrer, and the plan those messages were about.",
      },
    ],
    rows: [
      ["Visit proof", "Photos in a group chat", "GPS check-in, photos, TA/DA"],
      ["Referral status", "Scroll back and guess", "Awaiting arrival → arrived → converted, or why not"],
      ["Membership plans", "Another sheet, stale tomorrow", "Plan status, EMI schedules, payments due"],
      ["Who owns the account", "Whoever last typed", "Field staff + referrer + manager"],
      ["Reports", "Month-end paste", "Coverage and referrals by person, any date range"],
    ],
  },
  {
    slug: "gps-trackers",
    title: "Syclops vs GPS-only field trackers",
    eyebrow: "Compare",
    summary:
      "GeoProof-style tools prove a pin. Syclops uses the pin as evidence for the referral and the plan that followed.",
    theirs: "GPS-only trackers",
    intro: [
      "Indian field-force products are excellent at live maps, geo-fenced selfie attendance, mock-location flags, and route playback. That answers where someone was. It does not answer who they moved, or whether that person paid.",
      "Syclops is not a live-map product. Location is evidence: this visit opened a referral or sold a plan. Attendance % is a side effect, not the scoreboard.",
    ],
    choose: [
      {
        title: "If you only need attendance",
        body: "A GPS tracker or geo-fenced punch-in is enough. Syclops is for teams whose field day is supposed to bring in referrals and paying customers.",
      },
      {
        title: "If you already bought a tracker",
        body: "Use it until the contract ends if you must. The pin-as-product story is what Syclops replaces — not your payroll attendance if that lives elsewhere.",
      },
    ],
    faqs: [
      {
        q: "Does Syclops do live GPS?",
        a: "Managers see each person’s visits and route for the working day. Location is recorded only during the working day.",
      },
      {
        q: "Can staff fake a check-in?",
        a: "Each check-in records GPS and photos, and managers see every visit on that day’s route. The point is still the referral or plan that followed.",
      },
      {
        q: "Does TADA replace a payroll GPS app?",
        a: "No. Syclops works out TA/DA from the distance travelled. Payroll and statutory attendance can stay in HR software.",
      },
    ],
    rows: [
      ["Live location", "Core product", "Working day only, not the brand"],
      ["Fake check-ins", "Primary pitch", "GPS and photo proof, then the outcome"],
      ["Referrals", "Not in scope", "Referrer login and status"],
      ["Subscriptions", "Not in scope", "Plans, EMI, payments due"],
      ["Success metric", "Attendance %", "Referrals and paying customers"],
    ],
  },
  {
    slug: "crm",
    title: "Syclops vs traditional CRM",
    eyebrow: "Compare",
    summary:
      "A CRM is a pipeline of deals. It is not a field day, a partner referral, or a membership plan.",
    theirs: "Traditional CRM",
    intro: [
      "Salesforce, Zoho, and HubSpot are built for leads, opportunities, and long B2B cycles. Indian field execution — visit plans, GPS check-in, TADA, partner referrals — is a different object model. Bending a CRM into a field app usually means a partner, a quarter, and a customization ticket.",
      "Syclops ships visit, referrer, and member as first-class objects. Field work is not a note someone might log. Membership plans are not an add-on billing SKU.",
    ],
    choose: [
      {
        title: "Keep a CRM for long deals",
        body: "If you close five named contracts a quarter, a CRM still earns its keep. Add Syclops for the field day, the referrer login, and membership plans.",
      },
      {
        title: "Do not buy CRM for field coverage",
        body: "Visit plans, check-ins, and TADA are not stages on a deal. They are a working day.",
      },
    ],
    faqs: [
      {
        q: "Is Syclops a CRM?",
        a: "No. A CRM is deals. Syclops is field visits, referral partners, and membership plans, including TADA.",
      },
      {
        q: "Can I export to a CRM?",
        a: "Reports download as Excel. Who visited and who referred still lives in Syclops.",
      },
      {
        q: "Do we need an implementation partner?",
        a: "No. Create a workspace and add your team. We connect WhatsApp and Razorpay with you, without a separate onboarding project.",
      },
    ],
    rows: [
      ["Object model", "Lead / deal / company", "Visit / referrer / member"],
      ["Field work", "Notes, if anyone logs them", "Check-in, route, TADA built in"],
      ["Partner referrals", "Source field, usually empty", "Referrer login, status, payouts"],
      ["Recurring revenue", "Add-on or another product", "Membership plans and EMI built in"],
      ["India field reality", "Western office CRM", "Android field app + WhatsApp"],
    ],
  },
  {
    slug: "vertical-software",
    title: "Syclops vs gym, school, or clinic software",
    eyebrow: "Compare",
    summary:
      "Vertical tools bill well. They rarely run a field team or a B2B partner network.",
    theirs: "Vertical gym / school / clinic software",
    intro: [
      "Gym ERPs, school fee systems, and clinic billing are strong at memberships, class rosters, and GST invoices. Member-get-member is often a code at the desk. Field staff covering other clubs, campuses, or partner clinics are rarely first-class. A department head referring another hospital is out of scope.",
      "Syclops does not replace class booking, academic marks, or clinical charts. It covers who referred each customer, field proof, and whether they have paid for their plan.",
    ],
    choose: [
      {
        title: "Keep vertical software for operations",
        body: "Timetable, HIS, or gym floor software stays. Syclops sits beside it for visits, referrals, and plans.",
      },
      {
        title: "Use Syclops when referrals leak",
        body: "If nobody can say who referred each join, admit, or patient, or what that referrer is owed, the vertical tool is not doing that job.",
      },
    ],
    faqs: [
      {
        q: "Does this replace gym management software?",
        a: "No. Keep it for classes and door access if you want. Syclops tracks trainer visits, member referrals, and whether the member has paid.",
      },
      {
        q: "What about school ERPs or hospital HIS?",
        a: "Marks and clinical charts stay there. Counselor visits, alumni referrals, partner-clinic referrals, and fee or care plans belong in Syclops.",
      },
      {
        q: "Does the app use our words?",
        a: "Not yet. Syclops was built for hospitals, so some screens say doctors and patients where you would say members or students. The steps are the same.",
      },
    ],
    rows: [
      ["Memberships or fees", "Strong", "Plans with cash, UPI, EMI, and Razorpay"],
      ["Member-get-member", "Sometimes", "Member and partner referrals"],
      ["Field staff", "Rare", "First-class"],
      ["Built for", "One vertical", "Hospitals first, same steps elsewhere"],
      ["Referral page", "Uncommon", "Referrers see status without calling"],
    ],
  },
  {
    slug: "gym-software",
    title: "Syclops vs gym management software",
    eyebrow: "Compare",
    summary:
      "Gym ERPs own classes, the door, and GST invoices. Syclops owns who sent the member, the trainer visit, and whether the member has paid.",
    theirs: "Gym management software",
    intro: [
      "Gymdesk-style products, Indian GST gym ERPs, and class-booking suites are built for the floor: timetable, lockers, biometric punch-in, invoices. Member-get-member is usually a code at reception. A failed debit is an SMS from billing. Trainers covering a second centre are not a field team.",
      "Syclops is not a second floor system. Keep the ERP for classes and the door. Use Syclops to record who referred each member, reward the referrer, and see which memberships have a payment due.",
    ],
    choose: [
      {
        title: "Keep gym software for the floor",
        body: "Class occupancy, door access, and GST invoices stay where they work. Syclops does not do biometric gym attendance.",
      },
      {
        title: "Use Syclops when referrals leak",
        body: "If referred members lose the name of who sent them, or nobody follows up on payments due, the ERP is not doing that job.",
      },
    ],
    faqs: [
      {
        q: "Will this replace my gym ERP?",
        a: "No. Keep it for classes, lockers, and the door. Syclops tracks trainer visits, member referrals, and paying memberships.",
      },
      {
        q: "Can members refer without an app?",
        a: "Yes. They use your referral page in a browser. Members are not paid field seats.",
      },
      {
        q: "Multi-centre chains?",
        a: "Set up each centre as a region. Staff check in at visits, and TA/DA covers travel between centres. Floor punch-in can stay in the gym ERP at each door.",
      },
    ],
    rows: [
      ["Class booking / door", "Core product", "Out of scope — keep the ERP"],
      ["Member-get-member", "Code at the desk, often", "Referral page, status, rewards"],
      ["Trainer field days", "Rare", "Check-in, visits, TADA between centres"],
      ["Payment due", "Billing SMS", "The plan shows it, staff follow up"],
      ["GST invoices", "Strong", "Keep them in the ERP"],
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((item) => item.slug === slug);
}
