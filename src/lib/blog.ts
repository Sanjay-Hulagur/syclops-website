export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "referral-leakage-is-a-systems-problem",
    title: "Referral leakage is a systems problem, not a people problem",
    date: "2026-09-12",
    category: "Referrals",
    excerpt:
      "Most teams do not lose referrals because staff are lazy. They lose them because the visit, the intro, and the plan live in three tools.",
    body: [
      "A field visit that never becomes a named referral is wasted mileage. A referral that never becomes a paying plan is wasted trust. A plan that churns without a task for the field team is wasted revenue.",
      "WhatsApp and Excel feel fast because they hide the joins. Syclops makes the joins the product: visit, referrer, subscriber, and the next action when the loop breaks.",
      "If you only track GPS, you will get better attendance and the same leakage. If you only track CRM stages, you will get prettier pipelines and the same no-shows. The loop has to be one object.",
    ],
  },
  {
    slug: "gps-is-not-a-growth-system",
    title: "GPS is not a growth system",
    date: "2026-08-28",
    category: "Field",
    excerpt:
      "Live maps answer where someone was. They do not answer who they moved, or whether that person still pays.",
    body: [
      "Field force tools in India have gotten very good at proving a pin. Anti-spoofing, selfie attendance, route playback — useful, and incomplete.",
      "Growth teams need the next two questions: did the visit create a referral, and did that referral become a subscription that renewed?",
      "Treat GPS as evidence inside a loop, not as the product. Mileage and TADA should fall out of the same day the referral was opened.",
    ],
  },
  {
    slug: "subscriptions-need-a-field-team",
    title: "Subscriptions need a field team",
    date: "2026-07-15",
    category: "Subscriptions",
    excerpt:
      "Dunning emails do not replace a visit. At-risk members, students, and policyholders still live in the real world.",
    body: [
      "Billing software knows a payment failed. It does not know which trainer, counselor, or agent owns the relationship.",
      "Syclops turns an at-risk plan into a field task: who to see, where they were last visited, and which referrer brought them in — because that referrer is often the person who can save the account.",
      "Recurring revenue is a field sport the moment your customers are not only on a screen.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
