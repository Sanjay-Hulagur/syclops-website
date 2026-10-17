import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "gps-is-not-a-growth-system",
  title: "GPS is not a growth system",
  date: "2026-08-28",
  updated: POST_UPDATED,
  category: "Field",
  excerpt:
    "Live maps answer where someone was. They do not answer who they moved, or whether that person still pays.",
  body: [
    {
      type: "p",
      text: "GPS is not a growth system. Field tools in India have become very good at proving a pin. Anti-spoofing, selfie attendance, geo-fences, and route playback are useful, and they are incomplete. A live map answers where someone was. It does not answer who they moved, or whether that person still pays. If the only number that moves is attendance, you have bought a better argument about presence.",
    },
    {
      type: "h2",
      text: "Coverage can rise while the loop stalls",
    },
    {
      type: "p",
      text: "Live location is a reasonable answer to “is the beat being walked?” It is a poor answer to “did we grow?” Attendance can rise while referred joins stall and renewals slip. Managers celebrate coverage and miss leakage, because the map has no column for a named introduction and no column for a plan that failed. The day looks full. The revenue does not.",
    },
    {
      type: "p",
      text: "This is how GPS-only rollouts go quiet after the first month. Staff learn the check-in. Managers learn the playback. Nobody changes who gets visited on Tuesday, because Tuesday’s list still comes from memory. The pin proved the person was near a building. It did not say the building had an at-risk plan or a partner who had sent nobody in weeks. [GPS-only trackers](/compare/gps-trackers) win the presence argument and leave the growth argument untouched.",
    },
    {
      type: "h2",
      text: "The next two questions",
    },
    {
      type: "p",
      text: "Growth teams need two questions after the pin. Did the visit create a referral? Did that referral become a subscription that renewed? A pin with no named intro and no paying plan is still a leak, even when the photo and the coordinates are perfect. Proof of work is not proof of outcome. Both can be stored. Only one of them tells you whether to send the same person down the same road tomorrow.",
    },
    {
      type: "ul",
      items: [
        "Where they were: check-in, the route, checkout. Necessary, and not sufficient.",
        "Who they saw: a visit on an account, including a logged skip so silence is not success.",
        "What the visit opened: a referral with a sender, or a note that nothing was opened.",
        "Whether it pays: the plan is live, quiet, or failed, on that same account.",
        "What happens next: a task when the plan breaks, for the seat who owns it.",
      ],
    },
    {
      type: "p",
      text: "If your dashboard can show the first bullet and none of the others, you have a tracker. Keep it if presence is honestly the problem you were hired to solve. Do not expect it to tell a gym which member sends friends who stay, or a clinic which partner’s patients lapse, or a campus which counselor’s patch hides unpaid fees.",
    },
    {
      type: "h2",
      text: "Treat the pin as evidence inside a loop",
    },
    {
      type: "p",
      text: "Check-in starts the working day. Visits attach to accounts. Checkout closes the route so travel allowance is the path, not a pin-to-pin guess. Mock locations can still be flagged. A photo can still be required. None of that replaces origin on the plan. [Field tracking](/product/field) is the day. The referral and the subscription have to sit on the visits that day produced, or the map will remain the product by default.",
    },
    {
      type: "p",
      text: "Syclops is not a CCTV feed. Location is collected between check-in and checkout on a working day. Retention is a setting. Partners never see GPS. Field seats see their own day unless you grant a manager role. Those limits are not a weaker map. They are a refusal to pretend that more coordinates create more revenue. The path still matters for a fair claim, which is why [TADA should be the path you walked](/blog/tada-is-the-path-not-the-pin), not a chord between two stamps.",
    },
    {
      type: "h2",
      text: "Rank the day by what paid",
    },
    {
      type: "p",
      text: "Rank staff by paying outcomes, not by kilometres. Overlay at-risk memberships, unpaid installments, or lapsed policies on the beat so the day is not random. A short route that saved two plans is a better day than a long route that refreshed eight pins. Kilometres stay on the cost side, approved against a rate and a cap, and they stop being the scoreboard you praise in the Monday meeting.",
    },
    {
      type: "p",
      text: "[TADA software](/tada-software) belongs in that cost conversation. It should not be asked to double as a growth system, and a growth system should not be asked to double as a live map of everyone’s evening. Use the pin as evidence. Use the account, the referrer, and the plan as the work. That is field tracking in service of revenue, not surveillance with a dashboard.",
    },
    {
      type: "h2",
      text: "Buy the map only if the map is the job",
    },
    {
      type: "p",
      text: "If the board question is strictly whether people reached a site, a tracker may be enough, and you should say that plainly. If the question is whether those visits create introductions that still pay, the tracker will report success while the loop leaks. Choose the question first. The software follows it. A growth system that cannot name the sender and the plan is a map with extra menus.",
    },
  ],
  faqs: [
    {
      q: "Should we turn GPS off?",
      a: "No. Use it as evidence of a working day: check-in, visits, checkout. Do not use a live map as the scoreboard for growth.",
    },
    {
      q: "What should a field day be ranked on?",
      a: "Paying outcomes on the accounts they own: introductions that converted, plans that renewed, lapses they actually visited. Kilometres are a cost, approved against a rate.",
    },
  ],
};
