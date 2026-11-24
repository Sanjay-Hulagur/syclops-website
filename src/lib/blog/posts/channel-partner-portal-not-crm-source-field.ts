import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "channel-partner-portal-not-crm-source-field",
  title: "A channel partner login is not a CRM source field",
  date: "2026-10-17",
  updated: POST_UPDATED,
  category: "Sales",
  excerpt:
    "Why a CRM source dropdown cannot tell a channel partner what happened to their intro, and what a partner login records instead.",
  hero: {
    src: "/blog/channel-partner-meeting.jpg",
    alt: "A sales representative shaking hands with a distributor at the counter of a hardware shop in a market lane.",
    width: 1280,
    height: 640,
  },
  body: [
    {
      type: "p",
      text: "A channel partner login is not a CRM source field. Indian field sales teams still buy a CRM because the board asked for a pipeline, then keep the field day in WhatsApp. The partner who sent the account asks what happened to that intro. Someone pastes “Partner” into a dropdown. That picklist is a rumour. It does not show the sender where that intro stands, and it does not tell your team who introduced it.",
    },
    {
      type: "h2",
      text: "A source field is not a status the partner can open",
    },
    {
      type: "p",
      text: "CRM source fields were built for your team. A manager filters opportunities by how they arrived. The partner is not in that filter. They do not have a Salesforce or Zoho seat, and they should not. They want a read-only answer: I sent this contact, and here is what happened. A dropdown cannot be that answer. It only records what your rep remembered to type after the call.",
    },
    {
      type: "p",
      text: "The same gap shows up the week a partner chases a reward. Finance asks which opportunity the credit belongs to. The source field says Partner. It does not say which partner, which phone, or whether the account converted. The desk calls the partner to reconstruct a thread. That call is the product failing in public.",
    },
    {
      type: "h2",
      text: "Pipeline stages and referral status answer different questions",
    },
    {
      type: "p",
      text: "A deal pipeline answers whether a named opportunity moved stage. A partner referral answers whether the sender can see what happened to the contact they sent. Those are different objects. Bending a CRM into a field app usually means a customization ticket, a second object, and an empty source field the week the admin who built it leaves.",
    },
    {
      type: "p",
      text: "Stage names also lie about coverage. “Proposal sent” can be true while the partner who opened the door has no idea the proposal exists. “Closed won” can be true while nobody records who introduced the account. If you [compare a traditional CRM](/compare/crm) with a partner login, the test is not how many stages you can draw. The test is whether the person outside your company can see the status without calling your desk.",
    },
    {
      type: "h2",
      text: "What the partner actually needs to see",
    },
    {
      type: "p",
      text: "Give each partner their own login. They are not paid field seats. They sign in at app.syclops.in with a one-time code, see the contacts they sent, and stop there. They do not see other partners or GPS. [Referral management](/product/referrals) is that shared view: status the sender can open, and a rule that the same mobile number cannot be referred twice.",
    },
    {
      type: "ul",
      items: [
        "Pending, arrived, or stopped with a reason, such as not able to contact — the states a partner will ask about on a Monday.",
        "Notes, a photo, or a voice note with each lead, so the context travels with the name.",
        "One referral per mobile number, so two partners cannot claim the same contact.",
        "Different spellings of a partner’s name merged into one person, instead of a guess in a source field.",
        "Analytics by referrer, so you can see which partners actually send business.",
      ],
    },
    {
      type: "p",
      text: "If you pay partners, pay from the record. A fixed fee, a share of the deal, or a credit — the shape can differ by partner, and it is settled outside Syclops today. The rule does not change. Nothing pays because someone forwarded a visiting card. Something pays because the lead shows converted, with its final amount.",
    },
    {
      type: "h2",
      text: "Field seats, service plans, and the visit when a payment is due",
    },
    {
      type: "p",
      text: "The partner login does not replace the field day. Field seats still check in, cover their area, and get TA/DA from the distance travelled. When a service plan has a payment due, the visit belongs to the person who sold it — the plan names them. Check who referred the account before you go. The partner is not dispatched as a free field seat. They are the context the visit needs.",
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
      text: "If you are still deciding what “referral software” has to hold before you pick a vendor, start with [how to choose referral management software](/blog/how-to-choose-referral-management-software). The short version for channel sales: upload your team and areas, give each partner a login, and stop treating a source dropdown as a relationship. The partner can see what happened. The lead remembers who sent it. Your reps stop reconstructing both from a chat.",
    },
  ],
  faqs: [
    {
      q: "Do channel partners need a paid field seat?",
      a: "No. Partners log in at app.syclops.in in a browser. Paid seats are the people who check in, log visits, and get TA/DA. A partner who only needs status should not use a seat.",
    },
    {
      q: "Can we keep Salesforce or Zoho for named deals?",
      a: "Yes, if those deals are real pipeline. Use Syclops for partner status, field visits, and recurring plans. Do not expect a source field to do that second job.",
    },
  ],
};
