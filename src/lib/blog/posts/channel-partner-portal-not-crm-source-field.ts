import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "channel-partner-portal-not-crm-source-field",
  title: "A channel partner portal is not a CRM source field",
  date: "2026-10-17",
  updated: POST_UPDATED,
  category: "Sales",
  excerpt:
    "Field sales still paste “partner” into a CRM. The partner cannot see status, and the retainer has no memory of who sent it.",
  body: [
    {
      type: "p",
      text: "A channel partner portal is not a CRM source field. Indian field sales teams still buy a CRM because the board asked for a pipeline, then keep the beat in WhatsApp. The partner who sent the account asks what happened to that intro. Someone pastes “Partner” into a dropdown. That picklist is a rumour. It does not tell the sender whether the account was accepted, converted, or is still paying, and it does not tell the retainer who introduced it.",
    },
    {
      type: "h2",
      text: "A source field is not a status the partner can open",
    },
    {
      type: "p",
      text: "CRM source fields were built for your team. A manager filters opportunities by how they arrived. The partner is not in that filter. They do not have a Salesforce or Zoho seat, and they should not. They want a read-only answer: I sent this company, you accepted it, a contract started, the retainer is still live. A dropdown cannot be that answer. It only records what your rep remembered to type after the call.",
    },
    {
      type: "p",
      text: "The same gap shows up the week a partner chases a reward. Finance asks which opportunity the credit belongs to. The source field says Partner. It does not say which partner, which phone, or whether that account is still inside a qualification window. The desk calls the partner to reconstruct a thread. That call is the product failing in public.",
    },
    {
      type: "h2",
      text: "Pipeline stages and referral status answer different questions",
    },
    {
      type: "p",
      text: "A deal pipeline answers whether a named opportunity moved stage. A partner referral answers whether the sender can see sent, accepted, converted, and paying, and whether a retainer or AMC still renews. Those are different objects. Bending a CRM into a beat usually means a customization ticket, a second object, and an empty source field the week the admin who built it leaves.",
    },
    {
      type: "p",
      text: "Stage names also lie about coverage. “Proposal sent” can be true while the partner who opened the door has no idea the proposal exists. “Closed won” can be true while the first invoice never mentions them. If you [compare a traditional CRM](/compare/crm) with a portal, the test is not how many stages you can draw. The test is whether the person outside your company can see the loop without calling your desk.",
    },
    {
      type: "h2",
      text: "What the partner actually needs to see",
    },
    {
      type: "p",
      text: "Give partners one URL. They are not paid field seats. They sign in with a phone or an email, see the accounts they sent, and stop there. They do not see other partners, GPS, or your rate card. [Referral management](/product/referrals) is that shared record: status the sender can open, a reward that waits, and a duplicate rule so the same phone cannot be referred twice into the same plan.",
    },
    {
      type: "ul",
      items: [
        "Sent, accepted, converted, and paying — the four states a partner will ask about on a Monday.",
        "A qualification window before any credit, so a bounced intro does not become a payout.",
        "One phone or email per plan, so two partners cannot claim the same account.",
        "Name mismatches held in Pending until a manager assigns them, instead of a guess in a source field.",
        "The partner still attached when a retainer is at risk, because they are often the person who can save it.",
      ],
    },
    {
      type: "p",
      text: "Rewards wait on that window. A percentage of the first invoice, a credit, or a fixed fee — the shape can differ by partner tier. The rule does not. Nothing pays because someone forwarded a visiting card. Something pays because the account stayed.",
    },
    {
      type: "h2",
      text: "Field seats, retainers, and the visit when a contract is at risk",
    },
    {
      type: "p",
      text: "The portal does not replace the beat. Field seats still check in, walk the patch, and write TADA from the path between check-in and checkout. When a retainer or AMC is at risk, the visit belongs to the owner of that account, with the partner still on the record. The partner is not dispatched as a free field seat. They are the context the visit needs.",
    },
    {
      type: "p",
      text: "That split is what a [sales and marketing](/industries/sales) workspace is for. Regions are territories. Visits attach to accounts. The intro that opened the account stays visible after the opportunity stage has been forgotten. Coverage, partner status, and a renewal visit live on one object instead of a CRM, a WhatsApp group, and a billing export that do not know each other.",
    },
    {
      type: "h2",
      text: "When a CRM is still the right buy",
    },
    {
      type: "p",
      text: "Keep a CRM if you close a small number of named contracts a quarter and the work really is stage, forecast, and quote. Do not buy a CRM for coverage, TADA, or a partner who needs status without calling your desk. Syclops is not an FMCG distributor system and not a live-map sales-force app. It will not replace a quoting tool that your finance team already trusts.",
    },
    {
      type: "p",
      text: "If you are still deciding what “referral software” has to hold before you pick a vendor, start with [how to choose referral management software](/blog/how-to-choose-referral-management-software). The short version for channel sales: import the beat, share one portal URL, and stop treating a source dropdown as a relationship. The partner can see what happened. The retainer remembers who sent it. Your reps stop reconstructing both from a chat.",
    },
  ],
  faqs: [
    {
      q: "Do channel partners need a paid field seat?",
      a: "No. Partners use a portal link. Paid seats are the people who check in, log visits, and appear on TADA. A partner who only needs status should not consume a seat.",
    },
    {
      q: "Can we keep Salesforce or Zoho for named deals?",
      a: "Yes, if those deals are real pipeline. Use the portal for partner status, the beat, and the retainer. Do not expect a source field to do that second job.",
    },
  ],
};
