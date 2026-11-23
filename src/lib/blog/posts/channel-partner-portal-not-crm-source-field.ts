import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "channel-partner-portal-not-crm-source-field",
  title: "A channel partner referral page is not a CRM source field",
  date: "2026-10-17",
  updated: POST_UPDATED,
  category: "Sales",
  excerpt:
    "Why a CRM source dropdown cannot tell a channel partner what happened to their intro, and what a partner referral page records instead.",
  body: [
    {
      type: "p",
      text: "A channel partner referral page is not a CRM source field. Indian field sales teams still buy a CRM because the board asked for a pipeline, then keep the field day in WhatsApp. The partner who sent the account asks what happened to that intro. Someone pastes “Partner” into a dropdown. That picklist is a rumour. It does not tell the sender whether the account was accepted or converted, and it does not tell your team who introduced it.",
    },
    {
      type: "h2",
      text: "A source field is not a status the partner can open",
    },
    {
      type: "p",
      text: "CRM source fields were built for your team. A manager filters opportunities by how they arrived. The partner is not in that filter. They do not have a Salesforce or Zoho seat, and they should not. They want a read-only answer: I sent this company, you worked it, it converted. A dropdown cannot be that answer. It only records what your rep remembered to type after the call.",
    },
    {
      type: "p",
      text: "The same gap shows up the week a partner chases a reward. Finance asks which opportunity the credit belongs to. The source field says Partner. It does not say which partner, which phone, or whether anyone approved the payout. The desk calls the partner to reconstruct a thread. That call is the product failing in public.",
    },
    {
      type: "h2",
      text: "Pipeline stages and referral status answer different questions",
    },
    {
      type: "p",
      text: "A deal pipeline answers whether a named opportunity moved stage. A partner referral answers whether the sender can see what happened to the account they sent, and what they are owed for it. Those are different objects. Bending a CRM into a field app usually means a customization ticket, a second object, and an empty source field the week the admin who built it leaves.",
    },
    {
      type: "p",
      text: "Stage names also lie about coverage. “Proposal sent” can be true while the partner who opened the door has no idea the proposal exists. “Closed won” can be true while nobody records who introduced the account. If you [compare a traditional CRM](/compare/crm) with a referral page, the test is not how many stages you can draw. The test is whether the person outside your company can see the status without calling your desk.",
    },
    {
      type: "h2",
      text: "What the partner actually needs to see",
    },
    {
      type: "p",
      text: "Give partners one link. They are not paid field seats. They sign in with a one-time code sent to their email, see the accounts they sent, and stop there. They do not see other partners or GPS. [Referral management](/product/referrals) is that shared view: status the sender can open, a reward that is approved before it is paid, and a rule that blocks a second open referral for the same mobile number.",
    },
    {
      type: "ul",
      items: [
        "Sent, converted, or lost with a reason — the states a partner will ask about on a Monday.",
        "A reward that is approved before it is paid, so a bounced intro does not become a payout.",
        "One open referral per mobile number, so two partners cannot claim the same account.",
        "Different spellings of a partner’s name linked to one person, instead of a guess in a source field.",
        "Analytics by referrer, so you can see which partners actually send business.",
      ],
    },
    {
      type: "p",
      text: "Rewards wait on approval. A fixed fee, a share of the bill, or a credit — the shape can differ by partner. The rule does not. Nothing pays because someone forwarded a visiting card. Something pays because a manager checked that the account converted.",
    },
    {
      type: "h2",
      text: "Field seats, retainers, and the visit when a payment is due",
    },
    {
      type: "p",
      text: "The referral page does not replace the field day. Field seats still check in, cover their area, and get TA/DA from the distance travelled. When a retainer has a payment due, the visit belongs to the person who sold it — the plan names them. Check who referred the account before you go. The partner is not dispatched as a free field seat. They are the context the visit needs.",
    },
    {
      type: "p",
      text: "That split is what a [sales and marketing](/industries/sales) workspace is for. Regions are territories. Visits stay on accounts. The partner who opened the account stays on the lead after the opportunity stage has been forgotten. Coverage, partner status, and plans live in one app instead of a CRM, a WhatsApp group, and a billing export that do not know each other.",
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
      text: "If you are still deciding what “referral software” has to hold before you pick a vendor, start with [how to choose referral management software](/blog/how-to-choose-referral-management-software). The short version for channel sales: upload your team and areas, share one referral page link, and stop treating a source dropdown as a relationship. The partner can see what happened. The lead remembers who sent it. Your reps stop reconstructing both from a chat.",
    },
  ],
  faqs: [
    {
      q: "Do channel partners need a paid field seat?",
      a: "No. Partners use your referral page in the browser. Paid seats are the people who check in, log visits, and get TA/DA. A partner who only needs status should not use a seat.",
    },
    {
      q: "Can we keep Salesforce or Zoho for named deals?",
      a: "Yes, if those deals are real pipeline. Use Syclops for partner status, field visits, and recurring plans. Do not expect a source field to do that second job.",
    },
  ],
};
