import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "razorpay-memberships-field-dunning",
  title: "Managing failed subscription payments with field visits",
  date: "2026-10-14",
  updated: POST_UPDATED,
  category: "Subscriptions",
  excerpt:
    "Learn how to track failed membership payments, plan customer follow-up visits, recover pending fees, and reduce missed renewals through your field team.",
  hero: {
    src: "/blog/managing-failed-payments-field-visits.png",
    alt: "Managing failed subscription payments with field visits. A field officer reviewing failed membership payments with a member at a gym.",
    width: 1958,
    height: 803,
  },
  body: [
    {
      type: "p",
      text: "Managing failed subscription payments with field visits starts with a distinction. A failed debit is a billing event. A missed renewal is a person who stopped paying and may have stopped showing up. The payment gateway can retry the mandate, send a link, and ask for a new UPI pin or card. That recovers the customer who only needed a new instrument. Gym memberships, campus fees, care programmes, retainers, and policies often fail for a reason a link cannot see: they stopped coming, a parent is waiting on a counselor, or cash was always how they paid. Track the failure. Then send the person who owns the account.",
    },
    {
      type: "h2",
      text: "Track the failure before anyone leaves the office",
    },
    {
      type: "p",
      text: "Do not send a trainer or an agent because a debit failed once. Let the retry schedule you configured finish. A field task on the first bounce teaches the team to ignore tasks. Map the plans to the prices you actually sell, and read the [plans and billing guide](/guides/plans-billing) before you point a live mandate at the workspace. Paid, failed, and due soon should be statuses on the plan, not rows in a Monday export.",
    },
    {
      type: "p",
      text: "The handoff is the decision. After retries are exhausted, the fee is pending and someone still owns the relationship. [Subscriptions](/product/subscriptions) can write that follow-up: who to see, where they were last visited, and which referrer brought them in. The referrer is often the person who can save the plan. A reminder text does not know their name.",
    },
    {
      type: "h2",
      text: "Plan the visit around the pending fee",
    },
    {
      type: "p",
      text: "A follow-up without a last visit, an owner, and a reason is another email. The seat who closed the account, or who walks that patch, should get the task. Attach the failed payment and the next action: discuss the fee, update the status, or book the next visit. The field team should see the same list the desk sees, so a counselor does not walk a campus from last month’s sheet while accounts is chasing a different parent.",
    },
    {
      type: "ul",
      items: [
        "Track failed, unpaid, and due-soon payments on the plan, not in a shared inbox.",
        "When retries end, write the visit for the seat who owns the account, with the last visit attached.",
        "Keep the referrer on the plan so the follow-up has a person the customer already trusts.",
        "Mark cash and desk collections on the same plan. A renewal taken in person should not wipe the introduction.",
        "Let quiet usage write the next visit on a rule you set, so a missed renewal is not a surprise at month end.",
      ],
    },
    {
      type: "p",
      text: "Cash and desk collections still happen. Staff mark the collection. It attaches to the plan and the referrer. A gym that takes a renewal at reception, a campus that takes a term fee at the window, a clinic that takes a programme fee in person — none of those should look like an organic payment just because the gateway never saw the money.",
    },
    {
      type: "h2",
      text: "Missed renewals are a beat, not a spreadsheet",
    },
    {
      type: "p",
      text: "Some plans do not fail loudly. A member stops scanning in. A student stops attending. A policy sits until the next premium. Configure quiet usage to write a visit. Do not paste an at-risk list into Excel every Monday and assign it by hand. The rule is yours. The assignment follows the owner of the account, not whoever opened the spreadsheet first. That is how a pending fee becomes a planned visit instead of a missed renewal you notice after the month has closed.",
    },
    {
      type: "p",
      text: "The longer version of why a subscription still needs a person is [subscriptions need a field team](/blog/subscriptions-need-a-field-team). The gateway is the right first move. The visit is the move after the link has already failed. Recover the fee on the same record as the intro, and the field team stops reconstructing both from a chat.",
    },
    {
      type: "h2",
      text: "The visit is a follow-up, not a demand notice",
    },
    {
      type: "p",
      text: "This is not a collections-agency product and not a legal dunning stack. It does not draft demand notices or score borrowers. Tax labels, who can void a charge, and freeze rules live in Settings. You decide them. The field task is a visit, not a threat. If the relationship needs a lawyer, that work stays outside the beat.",
    },
    {
      type: "p",
      text: "Keys, webhooks, and WhatsApp templates are [integrations](/integrations), not a second billing suite. The gateway remains the place a card or UPI mandate is charged. Syclops remains the place the plan, the referrer, and the next visit agree. Mixing those jobs is how teams reconcile three exports to answer one question: does this person still pay, and who should go see them. Map one real plan, fail a test debit, and confirm the task names a person, a last visit, and a referrer. If any of those three are blank, you have a payment log. When they are filled, the beat learns about the failure from the product.",
    },
  ],
  faqs: [
    {
      q: "Should the first failed debit create a field task?",
      a: "No. Let the retry schedule you configured finish. Write the visit when those retries are exhausted, or when you already know the customer is not going to act on a link.",
    },
    {
      q: "What happens if they pay cash at the desk?",
      a: "Staff mark the collection on the plan. It stays attached to the referrer. The introduction does not disappear because the gateway did not process the money.",
    },
  ],
};
