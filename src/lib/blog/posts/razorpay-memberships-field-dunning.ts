import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "razorpay-memberships-field-dunning",
  title: "Razorpay memberships still need a field visit after retries fail",
  date: "2026-10-14",
  updated: POST_UPDATED,
  category: "Subscriptions",
  excerpt:
    "Gateway dunning retries the mandate. Indian memberships, fees, and policies often fail for reasons a link cannot see. Then the beat has to move.",
  body: [
    {
      type: "p",
      text: "Razorpay memberships still need a field visit after retries fail. The gateway is correct at its job: retry the mandate, email a link, host a page where someone updates a UPI pin or a card. That recovers involuntary churn when the customer lives in a browser. Gym members, campus fee plans, care programmes, retainers, and policies often fail because the person stopped coming, a parent is waiting on a counselor, or cash was always how they paid. A link cannot see that. Then the beat has to move.",
    },
    {
      type: "h2",
      text: "Let the gateway finish its retries first",
    },
    {
      type: "p",
      text: "Do not send a trainer or an agent because a debit failed once. Razorpay and Stripe already know how to retry, wait, and ask for a new instrument. Use that. Connect test keys before live keys. Map your plans to the prices you actually sell. Read the [plans and billing guide](/guides/plans-billing) and do those steps in the product. A field task on the first failure only teaches the team to ignore tasks.",
    },
    {
      type: "p",
      text: "The handoff is the product decision. After the retry schedule you configured is exhausted, someone still owns the relationship. [Subscriptions](/product/subscriptions) can write that field task: who to see, where they were last visited, and which referrer brought them in. The referrer is often the person who can save the plan. A dunning email does not know their name.",
    },
    {
      type: "h2",
      text: "Origin dies when billing is the only record",
    },
    {
      type: "p",
      text: "Subscription software that stops at the gateway leaves origin on the floor. Who referred them. Which visit closed the join. Which field seat owns the account. The membership looks organic in the gateway dashboard because the gateway never stored the intro. Finance then reports churn without a cause, and the field team hears about it at the end of the month.",
    },
    {
      type: "ul",
      items: [
        "Retry the mandate in Razorpay or Stripe before anyone leaves the office.",
        "When retries end, write a task for the seat who owns the account, with the last visit attached.",
        "Keep the referrer on the plan so the visit has a person the customer already trusts.",
        "Mark cash and desk collections on the same plan. Origin should survive an offline payment.",
        "Let quiet usage write the beat on a rule you set, instead of a Monday Excel.",
      ],
    },
    {
      type: "p",
      text: "Cash and desk collections still happen. Staff mark the collection. It attaches to the plan and the referrer. A gym that takes a renewal at reception, a campus that takes a term fee at the window, a clinic that takes a programme fee in person — none of those should wipe the introduction just because Razorpay did not see the money.",
    },
    {
      type: "h2",
      text: "What this is not",
    },
    {
      type: "p",
      text: "This is not a collections-agency product and not a legal dunning stack. It does not draft demand notices or score borrowers. Tax labels, who can void a charge, and freeze rules live in Settings. You decide them. The field task is a visit, not a threat. If the relationship needs a lawyer, that work stays outside the beat.",
    },
    {
      type: "p",
      text: "Keys, webhooks, and WhatsApp templates are [integrations](/integrations), not a second billing suite. The gateway remains the place a card or UPI mandate is charged. Syclops remains the place the plan, the referrer, and the next visit agree. Mixing those jobs is how teams end up reconciling three exports to answer one question: does this person still pay, and who should go see them.",
    },
    {
      type: "h2",
      text: "Quiet plans should join the beat without a paste",
    },
    {
      type: "p",
      text: "Some plans do not fail loudly. A member stops scanning in. A student stops attending. A policy sits until the next premium. You can configure quiet usage to write a visit. You should not paste an at-risk list into Excel every Monday and assign it by hand. The rule is yours. The assignment follows the owner of the account, not whoever opened the spreadsheet first.",
    },
    {
      type: "p",
      text: "The longer version of this argument, before any gateway is named, is [subscriptions need a field team](/blog/subscriptions-need-a-field-team). Razorpay does not change it. The gateway is the right first move. The visit is the move after the link has already failed. Connect the keys, map the plans, and let a failed debit become a visit the beat can see.",
    },
    {
      type: "p",
      text: "Do the connection in test before you point a live mandate at it. Map one real plan, fail a test debit, and confirm the task names a person, a last visit, and a referrer. If any of those three are blank, the integration is only a payment log with extra steps. When they are filled, turn on live keys. The beat should learn about a failure from the product, not from a finance forward on Thursday. A blank task is just another email with extra steps, and the beat will ignore it.",
    },
  ],
  faqs: [
    {
      q: "Should the first failed debit create a field task?",
      a: "No. Let Razorpay or Stripe finish the retry schedule you configured. Write the visit when those retries are exhausted, or when you already know the customer is not going to act on a link.",
    },
    {
      q: "What happens if they pay cash at the desk?",
      a: "Staff mark the collection on the plan. It stays attached to the referrer. The introduction does not disappear because the gateway did not process the money.",
    },
  ],
};
