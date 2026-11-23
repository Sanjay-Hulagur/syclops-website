import type { Post } from "@/lib/blog/types";
import { POST_UPDATED } from "@/lib/blog/types";

export const post: Post = {
  slug: "gps-is-not-a-growth-system",
  title: "Managing field sales teams beyond GPS tracking",
  date: "2026-08-28",
  updated: POST_UPDATED,
  category: "Field",
  excerpt:
    "Learn why tracking employee locations alone is not enough to improve field team performance. Understand how businesses can connect GPS tracking with planned visits, customer follow-ups, referral tracking, and sales outcomes.",
  hero: {
    src: "/blog/beyond-gps-field-sales.png",
    alt: "Managing field sales teams beyond GPS tracking. A field officer's route connected to planned visits, follow-ups, referrals, and sales.",
    width: 1958,
    height: 803,
  },
  body: [
    {
      type: "p",
      text: "GPS is not a growth system. Field tools in India have become very good at proving a pin. Anti-spoofing, selfie attendance, geo-fences, and route playback are useful, and they are incomplete. A live map answers where someone was. It does not answer who they moved, or whether that person paid. If the only number that moves is attendance, you have bought a better argument about presence.",
    },
    {
      type: "h2",
      text: "Coverage can rise while the loop stalls",
    },
    {
      type: "p",
      text: "Live location is a reasonable answer to “is the area being covered?” It is a poor answer to “did we grow?” Attendance can rise while referred joins stall and renewals slip. Managers celebrate coverage and miss leakage, because the map has no column for a named introduction and no column for a payment due. The day looks full. The revenue does not.",
    },
    {
      type: "p",
      text: "This is how GPS-only rollouts go quiet after the first month. Staff learn the check-in. Managers learn the playback. Nobody changes who gets visited on Tuesday, because Tuesday’s list still comes from memory. The pin proved the person was near a building. It did not say the building had a payment due or a partner who had sent nobody in weeks. [GPS-only trackers](/compare/gps-trackers) win the presence argument and leave the growth argument untouched.",
    },
    {
      type: "h2",
      text: "The next two questions",
    },
    {
      type: "p",
      text: "Growth teams need two questions after the pin. Did the visit create a referral? Did that referral become a plan the customer paid for? A pin with no named intro and no paid plan is still a leak, even when the photo and the coordinates are perfect. Proof of work is not proof of outcome. Both can be stored. Only one of them tells you whether to send the same person down the same road tomorrow.",
    },
    {
      type: "ul",
      items: [
        "Where they were: check-in, the route, check-out. Necessary, and not sufficient.",
        "Who they saw: a visit on an account, with notes and a photo.",
        "What the visit opened: a referral with a sender, or a note that nothing was opened.",
        "Whether it pays: the plan is paid or has a payment due.",
        "What happens next: a follow-up visit, owned by the person who sold the plan.",
      ],
    },
    {
      type: "p",
      text: "If your dashboard can show the first bullet and none of the others, you have a tracker. Keep it if presence is honestly the problem you were hired to solve. Do not expect it to tell a gym which member sends friends who join, or a clinic which partner’s patients never arrive, or a campus which counselor’s area hides unpaid fees.",
    },
    {
      type: "h2",
      text: "Treat the pin as evidence inside a loop",
    },
    {
      type: "p",
      text: "Check-in starts the working day. Visits stay on accounts. Check-out ends the day, and TA/DA comes from the road distance through the day’s points, not a pin-to-pin guess. A photo and notes can sit on each visit. None of that tells you who sent the customer. [Field tracking](/product/field) is the day. The referrals and plans have to sit next to the visits that day produced, or the map will remain the product by default.",
    },
    {
      type: "p",
      text: "Syclops is not a CCTV feed. Location is recorded only during the working day. Partners never see GPS. Field staff see their own day unless you make them a manager. Those limits are not a weaker map. They are a refusal to pretend that more coordinates create more revenue. The path still matters for a fair claim, which is why [TADA should be the path you travelled](/blog/tada-is-the-path-not-the-pin), not a chord between two stamps.",
    },
    {
      type: "h2",
      text: "Rank the day by what paid",
    },
    {
      type: "p",
      text: "Rank staff by paying outcomes, not by kilometres. Put the plans with a payment due on the visit plan, so the day is not random. A short route that saved two plans is a better day than a long route that refreshed eight pins. Kilometres stay on the cost side, priced by the allowance you set, and they stop being the scoreboard you praise in the Monday meeting.",
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
      text: "If the board question is strictly whether people reached a site, a tracker may be enough, and you should say that plainly. If the question is whether those visits create introductions that become paying customers, the tracker will report success while the loop leaks. Choose the question first. The software follows it. A growth system that cannot name the sender and the plan is a map with extra menus.",
    },
  ],
  faqs: [
    {
      q: "Should we turn GPS off?",
      a: "No. Use it as evidence of a working day: check-in, visits, check-out. Do not use a live map as the scoreboard for growth.",
    },
    {
      q: "What should a field day be ranked on?",
      a: "Paying outcomes on the accounts they own: introductions that converted, plans that were paid, and payments due they actually followed up. Kilometres are a cost.",
    },
  ],
};
