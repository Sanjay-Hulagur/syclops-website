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
  hero: {
    src: "/blog/referral-paths-lane.jpg",
    alt: "A small town seen from above, with a winding lane linking a gym, a school and a corner shop, and a rider on a scooter.",
    width: 1280,
    height: 640,
  },
  body: [
    {
      type: "p",
      text: "Referral leakage is a systems problem, not a people problem. A field visit that never becomes a named referral is wasted mileage. A referral that never becomes a paying plan is wasted trust. A plan with a payment due that nobody follows up is wasted revenue. Most teams do not lose those joins because staff are lazy. They lose them because the visit, the intro, and the plan live in three tools that never meet.",
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
      text: "The speed is the trap. A chat does not refuse a duplicate. A sheet does not know that this mobile number was already referred. Billing does not know the visit that produced the name. When you [compare WhatsApp and Excel](/compare/whatsapp-excel) with one app, the honest difference is not “modern versus old.” It is whether the joins survive the week they were made.",
    },
    {
      type: "h2",
      text: "The same leak, four different nouns",
    },
    {
      type: "p",
      text: "Gym referral programmes, alumni intros, clinic partners, and channel leads fail the same way. The sender has no status. The field team has no proof the visit happened. Finance has a plan that looks organic. Leakage is booked as “marketing did not convert,” which sends the next quarter’s budget at the wrong problem.",
    },
    {
      type: "ul",
      items: [
        "The visit is in a GPS app or a personal note. It never becomes a named referral.",
        "The intro is in a chat. The sender cannot see whether the person ever arrived.",
        "The plan is in billing, with nobody named as the person who sold it.",
        "Nobody notices when the same person is sent twice, by two different referrers.",
        "Payments due arrive as a list, not as a follow-up for the person who owns the account.",
      ],
    },
    {
      type: "p",
      text: "Blaming the front desk, the counselor, or the rep trains people to type harder into the same three tools. The next hire inherits the leak on day one. If you want a worked example in one industry, [a gym referral programme beside the ERP](/blog/gym-referral-programme-without-replacing-erp) is the same failure with a member’s login and a membership. The structure does not change when the logo on the door does.",
    },
    {
      type: "h2",
      text: "Make the joins the product",
    },
    {
      type: "p",
      text: "[Referral management](/product/referrals) is those joins: who sent each person and what happened next. Member referrals and B2B partners follow the same steps. The same mobile number cannot be referred twice. The sender logs in to see status without a paid seat. Plans sit in the same app, so you see who paid without a month-end paste.",
    },
    {
      type: "p",
      text: "A referral should not count on a rumour. Update its status when the person actually comes in, record the sale as a conversion, or record why it stopped, such as not able to contact or did not visit. Different spellings of a referrer’s name can be merged into one person, instead of a phone call to the sender asking them to repeat a spelling you already lost. If you reward referrers, that record tells you who earned it. Paying the reward happens outside Syclops today.",
    },
    {
      type: "h2",
      text: "Single-purpose tools keep the leak",
    },
    {
      type: "p",
      text: "If you only track GPS, you will get better attendance and the same leakage. If you only track CRM stages, you will get a prettier pipeline and the same no-shows. If you only run gym or school software, you will bill well and still not know which intro became a paying customer. Each team can be competent inside its tool. The customer still falls through the gap between tools.",
    },
    {
      type: "p",
      text: "Fixing leakage by hiring a coordinator to reconcile the three exports is a permanent job you did not mean to create. The coordinator becomes the integration. When they are on leave, the leak returns the same day. Software does not take leave. The visit, the referrer, and the plan are either in one system or they are a project someone has to remember.",
    },
    {
      type: "h2",
      text: "One system, then a view",
    },
    {
      type: "p",
      text: "The loop has to live in one system before it can be a dashboard. Add your referrers, give them a login, and watch referrals move from pending to arrived, or stop with a reason, instead of a month-end paste. The view is not the fix. It is what you can see after the fix. If the underlying records still live apart, the chart will be a picture of the paste.",
    },
    {
      type: "p",
      text: "Start with one motion you already run. One partner type, one plan, one field seat who owns the accounts. Prove the sender can see status and a payment due has a person. Then add the next noun. Leakage shrinks when the joins are stored, not when the team is told to care more.",
    },
  ],
  faqs: [
    {
      q: "Is leakage just a training problem?",
      a: "Training helps people use a system. It does not create one. If the visit, the introduction, and the plan are in three tools, a careful team still loses the joins.",
    },
    {
      q: "When should a referral count?",
      a: "When the person has actually joined and the sale is recorded as a conversion. A forwarded name is not proof the customer joined or paid. If you reward referrers, pay from that record. The payment itself happens outside Syclops.",
    },
  ],
};
