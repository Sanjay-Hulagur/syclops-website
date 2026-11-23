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
      text: "Managing failed subscription payments with field visits starts with a distinction. A failed payment is a billing event. A missed renewal is a person who stopped paying and may have stopped showing up. The payment gateway can retry, send a link, and ask for a new UPI pin or card. That recovers the customer who only needed a new instrument. Gym memberships, campus fees, care programmes, retainers, and policies often fail for a reason a link cannot see: they stopped coming, a parent is waiting on a counselor, or cash was always how they paid. Track the failure. Then send the person who owns the account.",
    },
    {
      type: "h2",
      text: "Track the failure before anyone leaves the office",
    },
    {
      type: "p",
      text: "Do not send a trainer or an agent because a payment failed once. Give the online link a fair chance first. A visit on the first bounce teaches the team to ignore follow-ups. Set up your plans at the prices you actually sell — the [plans and billing guide](/guides/plans-billing) walks through it — so every enrolment shows whether it is paid or has a payment due, instead of living as a row in a Monday export.",
    },
    {
      type: "p",
      text: "The handoff is the decision. Once the link has not worked, the fee is still pending and someone still owns the relationship. In [subscriptions](/product/subscriptions), each plan keeps the staff member who sold it, so the follow-up already has a name. Look up who referred the customer on their referral as well. The referrer is often the person who can save the plan. A reminder text does not know their name.",
    },
    {
      type: "h2",
      text: "Plan the visit around the pending fee",
    },
    {
      type: "p",
      text: "A follow-up without a last visit, an owner, and a reason is another email. The person who sold the plan, or who covers that area, should make the visit. Put it on their visit plan with the reason: discuss the fee, record the payment, or book the next visit. The field team should see the same Payment Due list the desk sees, so a counselor does not walk a campus from last month’s sheet while accounts is chasing a different parent.",
    },
    {
      type: "ul",
      items: [
        "Track unpaid and due payments on the plan, not in a shared inbox.",
        "When the link has not worked, add the visit to the plan of the person who owns the account.",
        "Check who referred the customer, so the follow-up has a person the customer already trusts.",
        "Record cash, UPI, and EMI payments on the same plan, so a payment taken in person is still on the record.",
        "Review payments due every week, so a missed renewal is not a surprise at month end.",
      ],
    },
    {
      type: "p",
      text: "Cash and desk collections still happen. Staff record the payment on the plan, with a photo of the receipt if you want proof. A gym that takes a renewal at reception, a campus that takes a term fee at the window, a clinic that takes a programme fee in person — none of those should disappear just because the gateway never saw the money.",
    },
    {
      type: "h2",
      text: "Missed renewals are a visit, not a spreadsheet",
    },
    {
      type: "p",
      text: "Some plans do not fail loudly. A member stops coming in. A student stops attending. A policy sits until the next premium. Each plan has an end date and, for EMI, a due date for every instalment, so the team can see what is coming before the month closes. Do not paste an at-risk list into Excel every Monday and assign it by hand. Give each person the accounts they own, and put the follow-ups on their visit plan.",
    },
    {
      type: "p",
      text: "The longer version of why a subscription still needs a person is [subscriptions need a field team](/blog/subscriptions-need-a-field-team). The gateway is the right first move. The visit is the move after the link has already failed. Keep the plan, the payment, and the visit in one app, and the field team stops reconstructing all three from a chat.",
    },
    {
      type: "h2",
      text: "The visit is a follow-up, not a demand notice",
    },
    {
      type: "p",
      text: "This is not a collections-agency product and not a legal dunning stack. It does not draft demand notices or score borrowers. The follow-up is a visit, not a threat. If the relationship needs a lawyer, that work stays outside the field day.",
    },
    {
      type: "p",
      text: "Razorpay and WhatsApp are [integrations](/integrations) our team connects for you, not a second billing suite. The gateway remains the place a card or UPI payment is charged. Syclops remains the place the plan, the person who sold it, and the next visit agree. Mixing those jobs is how teams reconcile three exports to answer one question: has this person paid, and who should go see them. Set up one real plan, enrol a test customer, and check that the plan shows the payment status and the person who sold it. If either is blank, you have a payment log, not a follow-up list.",
    },
  ],
  faqs: [
    {
      q: "Should the first failed payment trigger a visit?",
      a: "No. Give the online link a fair chance first. Plan the visit when the payment is still due, or when you already know the customer is not going to act on a link.",
    },
    {
      q: "What happens if they pay cash at the desk?",
      a: "Staff record the payment on the plan, with a photo of the receipt if you want proof. The plan shows it as paid even though the gateway never saw the money.",
    },
  ],
};
