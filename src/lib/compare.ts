export const comparisons = [
  {
    slug: "whatsapp-excel",
    title: "Syclops vs WhatsApp + Excel",
    eyebrow: "Compare",
    summary:
      "Chat and spreadsheets start every growth team. They cannot hold a visit, a referral, and a plan as one record.",
    theirs: "WhatsApp + Excel",
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
    rows: [
      ["Memberships or fees", "Strong", "Strong, and tied to visits"],
      ["Member-get-member", "Sometimes", "Member and partner referrals"],
      ["Field staff", "Rare", "First-class"],
      ["Cross-industry", "Locked to one vertical", "Same loop, swapped nouns"],
      ["Partner portal", "Uncommon", "Referrers see status without calling"],
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((item) => item.slug === slug);
}
