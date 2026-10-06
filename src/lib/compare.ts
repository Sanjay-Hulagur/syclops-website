export const comparisons = [
  {
    slug: "whatsapp-excel",
    title: "Syclops vs WhatsApp + Excel",
    eyebrow: "Compare",
    summary:
      "Chat and spreadsheets start every growth team. They cannot hold a visit, a referral, and a plan as one record.",
    theirs: "WhatsApp + Excel",
    intro: [
      "Most gyms, campuses, clinics, and field sales teams still run growth on WhatsApp groups and a shared Excel. Photos of visits live in a chat. Referral names live in another. Renewals live in a sheet that is stale by Tuesday.",
      "Syclops is built for that exact stack — not to add a fourth tool, but to replace the joins those tools cannot keep. A geo check-in, a named intro, and a paying plan share one record, so status is not something you scroll back to guess.",
    ],
    choose: [
      {
        title: "Keep WhatsApp for people",
        body: "Templates and announcements still go out on WhatsApp Business. The loop — visit, referral, plan — does not live in the thread.",
      },
      {
        title: "Keep Excel for one-off exports",
        body: "CSV out of analytics is fine. Dual-running the beat in a sheet is how skipped accounts and unpaid intros return.",
      },
    ],
    faqs: [
      {
        q: "Can I import my Excel beat list?",
        a: "Yes. CSV of accounts, campuses, clinics, or partners. Last-visit can be empty. Then the field app is the source of truth.",
      },
      {
        q: "Do staff still message on WhatsApp?",
        a: "They can. Referral status and failed-payment templates can also send from WhatsApp Business keys you paste in Settings.",
      },
      {
        q: "Is this a WhatsApp CRM?",
        a: "No. WhatsApp is a channel. Syclops is the visit, the referrer, and the subscription those messages were about.",
      },
    ],
    rows: [
      ["Visit proof", "Photos in a group chat", "Geo check-in, photo, route, TADA"],
      ["Referral status", "Scroll back and guess", "Sent → accepted → converted → paying"],
      ["Subscriptions", "Another sheet, stale tomorrow", "Live plans, renewals, at-risk list"],
      ["Who owns the account", "Whoever last typed", "Field staff + referrer + manager"],
      ["Revenue lens", "Month-end paste", "Visit → referral → MRR, same day"],
    ],
  },
  {
    slug: "gps-trackers",
    title: "Syclops vs GPS-only field trackers",
    eyebrow: "Compare",
    summary:
      "GeoProof-style tools prove a pin. Syclops uses the pin as evidence inside a referral and subscription loop.",
    theirs: "GPS-only trackers",
    intro: [
      "Indian field-force products are excellent at live maps, geo-fenced selfie attendance, mock-location flags, and route playback. That answers where someone was. It does not answer who they moved, or whether that person still pays.",
      "Syclops is not a live-map product. Location is evidence: this visit opened a referral, sold a plan, or was written because a subscription is at risk. Attendance % is a side effect, not the scoreboard.",
    ],
    choose: [
      {
        title: "If you only need attendance",
        body: "A GPS tracker or geo-fenced punch-in is enough. Syclops is for teams whose field day is supposed to create intros and renewals.",
      },
      {
        title: "If you already bought a tracker",
        body: "Use it until the contract ends if you must. The pin-as-product story is what Syclops replaces — not your payroll attendance if that lives elsewhere.",
      },
    ],
    faqs: [
      {
        q: "Does Syclops do live GPS?",
        a: "Managers can see location on a working day between check-in and check-out. History is the route. The product still ranks staff by paying outcomes, not kilometres.",
      },
      {
        q: "Can staff fake a check-in?",
        a: "Mock locations are flagged. Photo EXIF can be required. Geofence radius is a setting. The point is still the referral or plan that followed.",
      },
      {
        q: "Does TADA replace a payroll GPS app?",
        a: "Mileage writes from the path you walked. You approve the sheet in the web app. Payroll and statutory attendance can stay in HR software.",
      },
    ],
    rows: [
      ["Live location", "Core product", "Available, not the brand"],
      ["Fake check-ins", "Primary pitch", "Proof of work, then outcome"],
      ["Referrals", "Not in scope", "Partner and member portals"],
      ["Subscriptions", "Not in scope", "Plans, renewals, dunning tasks"],
      ["Success metric", "Attendance %", "Paying loop, not just presence"],
    ],
  },
  {
    slug: "crm",
    title: "Syclops vs traditional CRM",
    eyebrow: "Compare",
    summary:
      "A CRM is a pipeline of deals. It is not a beat, a partner intro, or a membership that renews.",
    theirs: "Traditional CRM",
    intro: [
      "Salesforce, Zoho, and HubSpot are built for leads, opportunities, and long B2B cycles. Indian field execution — beat lists, geo check-in, TADA, partner intros that become retainers — is a different object model. Bending a CRM into a field app usually means a partner, a quarter, and a customization ticket.",
      "Syclops ships visit, referrer, and subscriber as first-class objects. Field work is not a note someone might log. Recurring revenue is not an add-on billing SKU.",
    ],
    choose: [
      {
        title: "Keep a CRM for long deals",
        body: "If you close five named contracts a quarter, a CRM still earns its keep. Attach Syclops for the beat, the partner portal, and the retainer that renews.",
      },
      {
        title: "Do not buy CRM for field coverage",
        body: "Beat adherence, offline visits, and TADA are not stages on a deal. They are a working day.",
      },
    ],
    faqs: [
      {
        q: "Is Syclops a CRM?",
        a: "No. A CRM is deals. Syclops is field visits, referral partners, and subscriptions — including TADA and dunning that writes the next visit.",
      },
      {
        q: "Can I export to a CRM?",
        a: "CSV on all plans. Public API on Scale. Origin — who visited, who referred — still lives in Syclops.",
      },
      {
        q: "Do we need an implementation partner?",
        a: "No. Create a workspace, invite seats, connect billing. There is no onboarding call.",
      },
    ],
    rows: [
      ["Object model", "Lead / deal / company", "Visit / referrer / subscriber"],
      ["Field work", "Notes, if anyone logs them", "Check-in, route, TADA built in"],
      ["Partner referrals", "Source field, usually empty", "Portal, status, rewards"],
      ["Recurring revenue", "Add-on or another product", "Native plans and churn tasks"],
      ["India field reality", "Western office CRM", "Offline-tolerant field + WhatsApp"],
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
      "Syclops does not replace class booking, academic marks, or clinical charts. It owns referral origin, field proof, and whether the plan still pays — then sends staff back out when it does not.",
    ],
    choose: [
      {
        title: "Keep vertical software for operations",
        body: "Timetable, HIS, or gym floor software stays. Syclops sits beside it for the growth loop.",
      },
      {
        title: "Use Syclops when intros leak",
        body: "If referred joins, alumni admits, or partner patients never stay attached to a plan, the vertical tool is not the loop.",
      },
    ],
    faqs: [
      {
        q: "Does this replace gym management software?",
        a: "No. Keep it for classes and door access if you want. Syclops tracks trainer visits, member referrals, and whether the membership still pays.",
      },
      {
        q: "What about school ERPs or hospital HIS?",
        a: "Marks and clinical charts stay there. Counselor visits, alumni intros, partner-clinic referrals, and fee or care plans are the Syclops loop.",
      },
      {
        q: "Can one workspace serve more than one vertical?",
        a: "Pick an industry at signup, then rename visit / referrer / plan labels. Multi-brand is Scale.",
      },
    ],
    rows: [
      ["Memberships or fees", "Strong", "Strong, and tied to visits"],
      ["Member-get-member", "Sometimes", "Member and partner referrals"],
      ["Field staff", "Rare", "First-class"],
      ["Cross-industry", "Locked to one vertical", "Same loop, swapped nouns"],
      ["Partner portal", "Uncommon", "Referrers see status without calling"],
    ],
  },
  {
    slug: "gym-software",
    title: "Syclops vs gym management software",
    eyebrow: "Compare",
    summary:
      "Gym ERPs own classes, the door, and GST invoices. Syclops owns who sent the member, the trainer visit, and whether the membership still pays.",
    theirs: "Gym management software",
    intro: [
      "Gymdesk-style products, Indian GST gym ERPs, and class-booking suites are built for the floor: timetable, lockers, biometric punch-in, invoices. Member-get-member is usually a code at reception. A failed debit is an SMS from billing. Trainers covering a second centre are not a beat.",
      "Syclops is not a second floor system. Keep the ERP for classes and the door. Put origin on the membership, pay rewards after a qualification window, and write a trainer visit when usage goes quiet or the mandate fails.",
    ],
    choose: [
      {
        title: "Keep gym software for the floor",
        body: "Class occupancy, door access, and GST invoices stay where they work. Syclops does not do biometric gym attendance.",
      },
      {
        title: "Use Syclops when intros and churn leak",
        body: "If referred joins lose the sender, or unused memberships never become a trainer task, the ERP is not the growth loop.",
      },
    ],
    faqs: [
      {
        q: "Will this replace my gym ERP?",
        a: "No. Keep it for classes, lockers, and the door. Syclops tracks trainer visits, member referrals, and paying memberships.",
      },
      {
        q: "Can members refer without an app?",
        a: "Yes. A portal link or QR at reception. Members are not paid field seats.",
      },
      {
        q: "Multi-centre chains?",
        a: "Clubs as regions. Trainers check in per centre. TADA if they travel. Floor punch-in can stay in the gym ERP at each door.",
      },
    ],
    rows: [
      ["Class booking / door", "Core product", "Out of scope — keep the ERP"],
      ["Member-get-member", "Code at the desk, often", "Portal, origin on the plan, rewards after a window"],
      ["Trainer field days", "Rare", "Check-in, visits, TADA between centres"],
      ["Failed debit", "Billing SMS", "Trainer task on the beat"],
      ["GST invoices", "Strong", "Gateway invoices; origin still on the plan"],
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((item) => item.slug === slug);
}
