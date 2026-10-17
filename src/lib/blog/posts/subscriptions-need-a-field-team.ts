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
      text: "Subscriptions need a field team when the customer does not live in a browser. Billing software knows a payment failed. It does not know which trainer, counselor, or agent owns the relationship. Dunning emails do not replace a visit. At-risk members, students, and policyholders still live in the real world, and the person who can save the plan is often the person who already walks that beat.",
    },
    {
      type: "h2",
      text: "Browser dunning is the right tool for browser customers",
    },
    {
      type: "p",
      text: "Retry the card, email a link, pause the plan. That is the right play when the customer lives in a browser and the only problem is an expired instrument. Do it. A field visit on the first soft decline wastes the day and teaches people to ignore tasks. Gateway dunning exists so you do not spend a trainer on a UPI pin.",
    },
    {
      type: "p",
      text: "The limit shows up the moment the customer is a gym member who stopped coming, a parent waiting on a counselor, a patient who lapsed a care plan, or a policyholder who pays cash at a desk. The mandate can be fine and the relationship can still be gone. [Subscriptions](/product/subscriptions) that end at the retry leave that second failure invisible until the plan has already died.",
    },
    {
      type: "h2",
      text: "After the retries, name a person",
    },
    {
      type: "p",
      text: "Involuntary churn is real: failed UPI, expired cards, quiet usage. Retry schedules belong in the gateway. After they exhaust, write a field task. Who to see. Where they were last visited. Which referrer brought them in, because that referrer is often the person who can save the account. A dunning template does not carry those three facts, so the email goes out and the beat does not move.",
    },
    {
      type: "ul",
      items: [
        "Let the gateway retry before a visit is created.",
        "Attach the task to the seat who owns the account, not to a shared list.",
        "Include the last visit so the person is not walking in cold.",
        "Keep the referrer on the plan. They are context, not a marketing source you file away.",
        "Mark cash collected at a desk on the same plan, so origin survives an offline payment.",
      ],
    },
    {
      type: "p",
      text: "The task is a visit, not a collections script. You are not building a legal dunning stack. You are sending the adult the customer already knows. If that distinction is unclear in the product, the field team will treat every task as spam, and the saves you wanted will not happen.",
    },
    {
      type: "h2",
      text: "Cash does not erase origin",
    },
    {
      type: "p",
      text: "Cash and desk collections still happen in India. Staff mark the collection. It attaches to the plan and the referrer. Origin does not die because the money did not come through Razorpay or Stripe. A renewal taken at a gym reception, a fee taken at a campus window, a programme fee taken at a clinic — each one should leave the introduction intact. Otherwise finance books an organic renewal and the referrer, correctly, feels cheated.",
    },
    {
      type: "p",
      text: "The gateway-specific version of this handoff is [Razorpay memberships still need a field visit after retries fail](/blog/razorpay-memberships-field-dunning). The gateway is not the mistake. Stopping there is. Connect it. Define plans. Decide which failures are links and which failures are visits. Then stop reconciling the two in a spreadsheet.",
    },
    {
      type: "h2",
      text: "At-risk lists should not be another Excel",
    },
    {
      type: "p",
      text: "An at-risk export feels like control. It is a weekly project. Someone downloads failed payments, someone else downloads members who have not visited, and a third person assigns rows. By Wednesday the assignments are stale. Click through to the account and the next suggested visit instead. Quiet usage or a bounce can write the beat on a rule you configure. You do not assign it by hand every Monday.",
    },
    {
      type: "p",
      text: "The rule should follow ownership. The counselor who covers that campus, the trainer who covers that club, the officer who covers that clinic. A pooled inbox looks fair and produces no visits, because everyone assumes someone else will go. [Field tracking](/product/field) is where the task lands: a beat with last-visit dates, not a spreadsheet with colours.",
    },
    {
      type: "h2",
      text: "Recurring revenue becomes a field sport",
    },
    {
      type: "p",
      text: "Recurring revenue is a field sport the moment your customers are not only on a screen. The billing system remains the place a mandate is charged. The field system is the place a failed or quiet plan becomes a visit with a name on it. Teams that buy only the first will report involuntary churn with no owner. Teams that buy only the second will knock on doors the gateway could have recovered with a link.",
    },
    {
      type: "p",
      text: "Use both, in that order. Retry. Then visit. Connect the gateway, define the plans, and let churn become a task the person who owns the relationship can see on the day they check in. That is the whole design. Dunning emails remain. They stop being the last step.",
    },
  ],
  faqs: [
    {
      q: "Do we skip email dunning and only visit?",
      a: "No. Let the gateway retry and message first. Create a field task when those retries are exhausted, or when you already know a link will not move the customer.",
    },
    {
      q: "Who should receive the churn task?",
      a: "The field seat who owns the account, with the last visit and the referrer attached. A shared inbox gives everyone a reason to wait.",
    },
  ],
};
