import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "how-to-choose-referral-management-software",
  title: "How to choose referral management software",
  date: "2026-10-02",
  updated: POST_UPDATED,
  category: "Referrals",
  excerpt:
    "The useful test is simple: can the person who sent the customer see status, and can you see whether that customer paid?",
  hero: {
    src: "/blog/choosing-software-discussion.jpg",
    alt: "Two business owners at a table by a window, talking through a decision over tea and notes.",
    width: 1184,
    height: 592,
  },
  body: [
    {
      type: "p",
      text: "How to choose referral management software comes down to one test: can the person who sent the customer see status, and can you see whether that customer paid? If the answer is a WhatsApp thread, a reward sheet, and a billing plan that do not know each other, you do not have a system. You have three partial memories. A form that collects a name is not the category.",
    },
    {
      type: "h2",
      text: "Start from the record, not the feature list",
    },
    {
      type: "p",
      text: "Referral management software is the record between an introduction and a paying customer. Everything else is a tour. Leaderboards and WhatsApp blasts are easy to demo because they are visible in the first week. The record is visible in the third month, when someone asks which introductions became paying customers and which ones were counted twice.",
    },
    {
      type: "p",
      text: "Write the test down before the demo. Can a partner, a member, a clinic, or an alumnus log in and see whether the person they sent has arrived? When a referral stops, is there a reason? Can the same mobile number be referred twice? When a customer has a payment due, does anyone know who sold the plan? If the vendor changes the subject, you already have your answer. The [referral management software](/referral-management-software) page is that test written as a category, not as a slogan.",
    },
    {
      type: "h2",
      text: "Five questions that survive a demo",
    },
    {
      type: "ul",
      items: [
        "Status for the sender. They can open their own introductions without a paid seat and without calling your desk.",
        "A reason when it stops. Not able to contact, did not visit, or went elsewhere, instead of a blank row nobody explains.",
        "A duplicate rule. The same mobile number cannot be referred twice.",
        "An owner for every plan. When a payment is due, you know who sold it and who should visit.",
        "A system you do not have to replace. The gym ERP, the HIS, the academic ERP, or the CRM for named deals can stay.",
      ],
    },
    {
      type: "p",
      text: "Ask to see the fifth item with your own noun. If you are a gym, ask them to leave class booking alone. If you are a clinic, ask them to leave the chart alone. If you are a campus, ask them to leave the timetable alone. Software that only works by becoming your system of record for a job you already do will be ripped out, or worse, half-adopted.",
    },
    {
      type: "h2",
      text: "The nouns change. The steps should not",
    },
    {
      type: "p",
      text: "Healthcare teams, gyms, campuses, and channel sales ask for the same thing with different words. A clinic wants proof the patient arrived. A gym wants to know which member sent each new join. A campus wants to know which alumni intro became an admission. A channel partner wants to know what happened to the account they sent. Software that only fits one of those nouns will be replaced the year you add a second motion.",
    },
    {
      type: "p",
      text: "Look at [referral management](/product/referrals) with that in mind. The referrer login, the statuses, and the duplicate check work the same way for every sender. The sender can be a member, a partner, a clinic, or an alumnus. If the product needs a new database every time the noun changes, you are buying a campaign tool with a fresh login, not a record. Ask, too, whether the screens use your words. Syclops, for example, still says doctors and patients on some screens because it was built for hospitals first.",
    },
    {
      type: "h2",
      text: "What to ignore in the comparison grid",
    },
    {
      type: "p",
      text: "Ignore badge collections, seat minimums dressed up as “enterprise,” and any claim that a live map is a referral system. GPS-only tools stop at the pin. CRMs stop at a source field. Vertical software stops at the invoice and calls the customer organic. If those are the tools you have, the referral is still leaking between them. A longer grid will not repair that.",
    },
    {
      type: "p",
      text: "Also ignore invented conversion rates in a sales deck. Ask to follow a real introduction to a converted customer, and a plan with a payment due back to the person who sold it. Time that path. If it takes an export, the product does not have the loop. The [FAQ](/faq) covers the practical objections that show up next: who uses a seat, what GPS is for, and whether you must throw away the CRM.",
    },
    {
      type: "h2",
      text: "Choose the join, then the vendor",
    },
    {
      type: "p",
      text: "The failure this category exists to stop is described in [referral leakage is a systems problem](/blog/referral-leakage-is-a-systems-problem). People are rarely the cause. The visit, the intro, and the plan live apart, so each team reports success inside its own tool. Choose software that keeps those three in one place. Then run the five questions on a workspace you create yourself, with one real partner and one real plan, before you migrate anything.",
    },
    {
      type: "p",
      text: "If the sender can see status, a stopped referral has a reason, the duplicate is blocked, and every payment due has an owner, you have the category. If you only have a form and a dashboard of names, you have a list. Lists are how the leak hides until the month someone asks which introductions became paying customers.",
    },
  ],
  faqs: [
    {
      q: "What is the minimum a referral product has to show the sender?",
      a: "Whether the person they sent arrived, or why it stopped, for their own introductions only. They should not need a paid seat, and they should not need to call your desk to find out.",
    },
    {
      q: "Should we replace our CRM, gym software, or HIS to get referrals?",
      a: "No. Keep the system that already does pipeline, the floor, or the chart. Add the record of who sent each customer, what happened to them, and who follows up when a payment is due.",
    },
  ],
};
