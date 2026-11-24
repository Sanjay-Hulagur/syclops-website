import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "subscriptions-need-a-field-team",
  title: "Subscriptions need a field team",
  date: "2026-07-15",
  updated: POST_UPDATED,
  category: "Subscriptions",
  excerpt:
    "Dunning emails do not replace a visit. At-risk members, students, and policyholders still live in the real world.",
  body: [
    {
      type: "p",
      text: "Subscriptions need a field team when the customer does not live in a browser. Billing software knows a payment failed. It does not know which trainer, counselor, or agent owns the relationship. Dunning emails do not replace a visit. Members, students, and policyholders who stop paying still live in the real world, and the person who can save the plan is often the person who already covers that area.",
    },
    {
      type: "h2",
      text: "Browser dunning is the right tool for browser customers",
    },
    {
      type: "p",
      text: "Retry the card, email a link, pause the plan. That is the right play when the customer lives in a browser and the only problem is an expired instrument. Do it. A field visit on the first soft decline wastes the day and teaches people to ignore follow-ups. Gateway retries exist so you do not spend a trainer on a UPI pin.",
    },
    {
      type: "p",
      text: "The limit shows up the moment the customer is a gym member who stopped coming, a parent waiting on a counselor, a patient who lapsed a care plan, or a policyholder who pays cash at a desk. The payment method can be fine and the relationship can still be gone. [Subscriptions](/product/subscriptions) that end at the retry leave that second failure invisible until the plan has already died.",
    },
    {
      type: "h2",
      text: "After the retries, name a person",
    },
    {
      type: "p",
      text: "Involuntary churn is real: failed UPI, expired cards, quiet usage. Retries belong in your billing tool, if it has them. After they run out, plan a visit. Who to see. Why the plan is unpaid. Who referred them, because that referrer is often the person who can save the account. A dunning template does not carry those three facts, so the email goes out and nobody moves.",
    },
    {
      type: "ul",
      items: [
        "Give paying online a fair second try before a visit is planned.",
        "Give the visit to the person who owns the account, not to a shared list.",
        "Know why the plan is unpaid before you go, so the person is not walking in cold.",
        "Look up who referred the customer. They are context, not a marketing source you file away.",
        "Record cash collected at a desk on the same plan, even when it is only part of the price.",
      ],
    },
    {
      type: "p",
      text: "The follow-up is a visit, not a collections script. You are not building a legal dunning stack. You are sending the adult the customer already knows. If that distinction is unclear, the field team will treat every follow-up as spam, and the saves you wanted will not happen.",
    },
    {
      type: "h2",
      text: "Cash still counts",
    },
    {
      type: "p",
      text: "Cash and desk collections still happen in India. Staff record the payment on the plan, as cash, including a part payment, or as UPI with its reference. A membership fee taken at a gym reception, a fee taken at a campus window, a programme fee taken at a clinic — each one should be on the record, with the staff member who sold the plan still named. Otherwise finance cannot tell who brought the money in.",
    },
    {
      type: "p",
      text: "The practical version of this handoff is [managing failed subscription payments with field visits](/blog/razorpay-memberships-field-dunning). The gateway is not the mistake. Stopping there is. Connect it. Send us your plans. Decide which failures need another try online and which need a visit. Then stop reconciling the two in a spreadsheet.",
    },
    {
      type: "h2",
      text: "At-risk lists should not be another Excel",
    },
    {
      type: "p",
      text: "An at-risk export feels like control. It is a weekly project. Someone downloads failed payments, someone else downloads members who have not visited, and a third person assigns rows. By Wednesday the assignments are stale. In Syclops, plans marked Payment Due are already a list, and each one names the person who sold it.",
    },
    {
      type: "p",
      text: "The follow-up should follow ownership. The counselor who covers that campus, the trainer who covers that club, the officer who covers that clinic. A pooled inbox looks fair and produces no visits, because everyone assumes someone else will go. [Field tracking](/product/field) is where the visit happens: planned for the week, checked in with GPS, and visible to the manager.",
    },
    {
      type: "h2",
      text: "Recurring revenue becomes a field sport",
    },
    {
      type: "p",
      text: "Recurring revenue is a field sport the moment your customers are not only on a screen. The billing system remains the place a payment is charged. The field system is the place a missed payment becomes a visit with a name on it. Teams that buy only the first will report involuntary churn with no owner. Teams that buy only the second will knock on doors the gateway could have recovered with a link.",
    },
    {
      type: "p",
      text: "Use both, in that order. Retry. Then visit. Connect the gateway, send us your plans, and make sure every payment due has a named person who will plan the visit. That is the whole design. Dunning emails remain. They stop being the last step.",
    },
  ],
  faqs: [
    {
      q: "Do we skip email dunning and only visit?",
      a: "No. If your billing tool retries or sends reminders, let it go first. Plan a visit when the payment is still due after that, or when you already know the customer will not pay online.",
    },
    {
      q: "Who should make the follow-up visit?",
      a: "The person who owns the account. In Syclops, each plan names the staff member who sold it, and the customer’s referral names who sent them. A shared inbox gives everyone a reason to wait.",
    },
  ],
};
