import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "referral-leakage-is-a-systems-problem",
  title: "Referral leakage is a systems problem, not a people problem",
  date: "2026-09-12",
  updated: POST_UPDATED,
  category: "Referrals",
  excerpt:
    "Most teams do not lose referrals because staff are lazy. They lose them because the visit, the intro, and the plan live in three tools.",
  body: [
    {
      type: "p",
      text: "Referral leakage is a systems problem, not a people problem. A field visit that never becomes a named referral is wasted mileage. A referral that never becomes a paying plan is wasted trust. A plan that churns without a task for the field team is wasted revenue. Most teams do not lose those joins because staff are lazy. They lose them because the visit, the intro, and the plan live in three tools that never meet.",
    },
    {
      type: "h2",
      text: "WhatsApp and Excel feel fast because they hide the joins",
    },
    {
      type: "p",
      text: "Someone forwards a name. Someone else pastes it into a sheet. Billing creates a membership, a semester fee, a care plan, or a policy with no memory of who sent them. By the time a manager asks what happened to that introduction, the thread has scrolled off the phone and the sheet has three spellings of the same person. Each step felt quick. The join was never stored.",
    },
    {
      type: "p",
      text: "The speed is the trap. A chat does not refuse a duplicate. A sheet does not know that this phone was already referred into this plan. Billing does not know the visit that produced the name. When you [compare WhatsApp and Excel](/compare/whatsapp-excel) with a single record, the honest difference is not “modern versus old.” It is whether the joins survive the week they were made.",
    },
    {
      type: "h2",
      text: "The same leak, four different nouns",
    },
    {
      type: "p",
      text: "Gym referral programmes, alumni intros, clinic partners, and channel leads fail the same way. The sender has no status. The field team has no proof the visit happened on the same object as the intro. Finance has a plan that looks organic. Leakage is booked as “marketing did not convert,” which sends the next quarter’s budget at the wrong problem.",
    },
    {
      type: "ul",
      items: [
        "The visit is in a GPS app or a personal note. It never becomes a named referral.",
        "The intro is in a chat. The sender cannot see sent, accepted, converted, or paying.",
        "The plan is in billing. It has no referrer, so a reward and a save visit have nobody to attach to.",
        "The reward pays on a rumour, before anyone knows whether the customer stayed.",
        "Churn arrives as a list, not as a task for the person who owns the account.",
      ],
    },
    {
      type: "p",
      text: "Blaming the front desk, the counselor, or the rep trains people to type harder into the same three tools. The next hire inherits the leak on day one. If you want a worked example in one industry, [a gym referral programme beside the ERP](/blog/gym-referral-programme-without-replacing-erp) is the same failure with a reception QR and a membership. The structure does not change when the logo on the door does.",
    },
    {
      type: "h2",
      text: "Make the joins the product",
    },
    {
      type: "p",
      text: "[Referral management](/product/referrals) is those joins: visit, referrer, subscriber, and the next action when the loop breaks. Member-get-member and B2B partners are the same referrer object with different reward rules if you want them. Duplicate phone or email cannot be referred twice into the same plan. The sender sees status without a paid seat. You see whether the customer paid without a month-end paste.",
    },
    {
      type: "p",
      text: "Rewards should not fire on a rumour. A [qualification window](/guides/qualification-window), a cap, and credit on the next invoice are how you avoid paying for joins that bounce. Pending name matches sit in a queue until a manager assigns them, instead of a phone call to the sender asking them to repeat a spelling you already lost. The window is not bureaucracy. It is the difference between a programme and a discount you cannot audit.",
    },
    {
      type: "h2",
      text: "Single-purpose tools keep the leak",
    },
    {
      type: "p",
      text: "If you only track GPS, you will get better attendance and the same leakage. If you only track CRM stages, you will get a prettier pipeline and the same no-shows. If you only run gym or school software, you will bill well and still not know which intro still pays. Each team can be competent inside its tool. The customer still falls through the gap between tools.",
    },
    {
      type: "p",
      text: "Fixing leakage by hiring a coordinator to reconcile the three exports is a permanent job you did not mean to create. The coordinator becomes the integration. When they are on leave, the leak returns the same day. A record does not take leave from the join. The visit, the referrer, and the plan are either the same object or they are a project someone has to remember.",
    },
    {
      type: "h2",
      text: "One object, then a view",
    },
    {
      type: "p",
      text: "The loop has to be one object before it can be a dashboard. Turn the portal on, share a QR or a URL, and watch sent, converted, paying, and churned as a leakage view rather than a month-end paste. The view is not the fix. It is what you can see after the fix. If the underlying records still live apart, the chart will be a picture of the paste.",
    },
    {
      type: "p",
      text: "Start with one motion you already run. One partner type, one plan, one field seat who owns the accounts. Prove the sender can see status and a failed plan can see a person. Then add the next noun. Leakage shrinks when the joins are stored, not when the team is told to care more.",
    },
  ],
  faqs: [
    {
      q: "Is leakage just a training problem?",
      a: "Training helps people use a record. It does not create one. If the visit, the introduction, and the plan are in three tools, a careful team still loses the joins.",
    },
    {
      q: "When should a reward be paid?",
      a: "After the customer stays past a qualification window you set, and within a cap. A forwarded name is not proof they paid or stayed.",
    },
  ],
};
