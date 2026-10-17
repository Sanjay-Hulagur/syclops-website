import type { Post } from "@/lib/blog/types";
import { post as channelPartner } from "@/lib/blog/posts/channel-partner-portal-not-crm-source-field";
import { post as clinicPortal } from "@/lib/blog/posts/clinic-referral-portal-vs-whatsapp";
import { post as counselorBeat } from "@/lib/blog/posts/counselor-beat-unpaid-fee-installment";
import { post as dpdpGps } from "@/lib/blog/posts/dpdp-employee-gps-retention";
import { post as gpsGrowth } from "@/lib/blog/posts/gps-is-not-a-growth-system";
import { post as gymReferral } from "@/lib/blog/posts/gym-referral-programme-without-replacing-erp";
import { post as howToChoose } from "@/lib/blog/posts/how-to-choose-referral-management-software";
import { post as kolDsa } from "@/lib/blog/posts/kol-dsa-referral-loops";
import { post as razorpayVisit } from "@/lib/blog/posts/razorpay-memberships-field-dunning";
import { post as referralLeakage } from "@/lib/blog/posts/referral-leakage-is-a-systems-problem";
import { post as subscriptionsField } from "@/lib/blog/posts/subscriptions-need-a-field-team";
import { post as tadaPath } from "@/lib/blog/posts/tada-is-the-path-not-the-pin";

export type { Block, Post, PostFaq } from "@/lib/blog/types";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const INLINE_LINK = /\[([^\]]+)\]\([^)]+\)/g;

export const posts: Post[] = [
  channelPartner,
  counselorBeat,
  dpdpGps,
  razorpayVisit,
  clinicPortal,
  kolDsa,
  tadaPath,
  gymReferral,
  howToChoose,
  referralLeakage,
  gpsGrowth,
  subscriptionsField,
].sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatPostDate(iso: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return iso;
  const month = MONTHS[Number(match[2]) - 1];
  if (!month) return iso;
  return `${Number(match[3])} ${month} ${match[1]}`;
}

export function postWordCount(post: Post) {
  const chunks: string[] = [];
  for (const block of post.body) {
    if (block.type === "ul") chunks.push(...block.items);
    else chunks.push(block.text);
  }
  for (const faq of post.faqs) {
    chunks.push(faq.q, faq.a);
  }
  const plain = chunks.join(" ").replace(INLINE_LINK, "$1");
  return plain.trim().split(/\s+/).filter(Boolean).length;
}

const defaultRelated = [
  { href: "/product", label: "Product", body: "Field, referrals, subscriptions." },
  {
    href: "/referral-management-software",
    label: "Referral management software",
    body: "Status from sent to paying.",
  },
  { href: "/faq", label: "FAQ", body: "Seats, GPS, CRM, hosting." },
];

const relatedBySlug: Record<
  string,
  { href: string; label: string; body: string }[]
> = {
  "channel-partner-portal-not-crm-source-field": [
    { href: "/compare/crm", label: "vs traditional CRM", body: "A portal is not a source field." },
    { href: "/industries/sales", label: "Sales & marketing", body: "Beat, partner intro, retainer." },
    { href: "/product/referrals", label: "Referral management", body: "Status the sender can see." },
  ],
  "clinic-referral-portal-vs-whatsapp": [
    { href: "/industries/healthcare", label: "Healthcare", body: "Clinic portal and care plans." },
    {
      href: "/referral-management-software",
      label: "Referral management software",
      body: "Healthcare and clinic referral status.",
    },
    { href: "/compare/whatsapp-excel", label: "vs WhatsApp + Excel", body: "The thread is a channel." },
  ],
  "counselor-beat-unpaid-fee-installment": [
    { href: "/industries/education", label: "Education", body: "Counselor visits and fee plans." },
    { href: "/product/field", label: "Field tracking", body: "Campus check-in and last-visit dates." },
    { href: "/product/subscriptions", label: "Subscriptions", body: "Unpaid installments as tasks." },
  ],
  "dpdp-employee-gps-retention": [
    { href: "/security", label: "Security", body: "GPS retention, RBAC, India hosting." },
    { href: "/privacy", label: "Privacy", body: "What is processed, and where you export it." },
    { href: "/product/field", label: "Field tracking", body: "Working-day check-in, not CCTV." },
  ],
  "razorpay-memberships-field-dunning": [
    { href: "/product/subscriptions", label: "Subscriptions", body: "Retries, then a field task." },
    { href: "/integrations", label: "Integrations", body: "Razorpay and Stripe keys." },
    { href: "/guides/plans-billing", label: "Plans and billing guide", body: "Connect test keys first." },
  ],
  "kol-dsa-referral-loops": [
    { href: "/industries/medtech", label: "Medtech", body: "KOL visits and device contracts." },
    { href: "/industries/fintech", label: "Fintech", body: "Agent visits and policy referrals." },
    { href: "/product/referrals", label: "Referral management", body: "Same object, different nouns." },
  ],
  "tada-is-the-path-not-the-pin": [
    { href: "/tada-software", label: "TADA software", body: "Mileage from the path." },
    { href: "/product/field", label: "Field tracking", body: "Check-in to checkout." },
    { href: "/compare/gps-trackers", label: "vs GPS-only trackers", body: "The pin is not the product." },
  ],
  "gym-referral-programme-without-replacing-erp": [
    { href: "/gym-referral-software", label: "Gym referral software", body: "Member-get-member beside ERP." },
    { href: "/industries/gyms", label: "Gyms", body: "Trainer visits and memberships." },
    { href: "/compare/gym-software", label: "vs gym management software", body: "Keep the floor system." },
  ],
  "how-to-choose-referral-management-software": [
    {
      href: "/referral-management-software",
      label: "Referral management software",
      body: "What the category has to hold.",
    },
    { href: "/product/referrals", label: "Referral product", body: "Portal, window, leakage." },
    { href: "/faq", label: "FAQ", body: "Seats, GPS, CRM, cancel." },
  ],
  "referral-leakage-is-a-systems-problem": [
    { href: "/product/referrals", label: "Referral management", body: "Leakage as a view, not a paste." },
    { href: "/compare/whatsapp-excel", label: "vs WhatsApp + Excel", body: "Where intros go to die." },
    { href: "/guides/qualification-window", label: "Qualification window", body: "Rewards after they stay." },
  ],
  "gps-is-not-a-growth-system": [
    { href: "/product/field", label: "Field tracking", body: "GPS as evidence, not the scoreboard." },
    { href: "/compare/gps-trackers", label: "vs GPS-only trackers", body: "Attendance % vs paying loop." },
    { href: "/tada-software", label: "TADA software", body: "Path, not pin-to-pin." },
  ],
  "subscriptions-need-a-field-team": [
    { href: "/product/subscriptions", label: "Subscriptions", body: "Dunning that creates a visit." },
    { href: "/product/field", label: "Field tracking", body: "The beat those tasks land on." },
    { href: "/blog/razorpay-memberships-field-dunning", label: "Razorpay then a visit", body: "Retries first." },
  ],
};

export function postRelated(slug: string) {
  return relatedBySlug[slug] ?? defaultRelated;
}
