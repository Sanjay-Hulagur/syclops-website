import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Product — field tracking, referral management, subscriptions",
  description:
    "Syclops keeps field visits, referrals, and paid plans in one place. For gyms, campuses, clinics, sales teams, fintech, and medtech. You set it up yourself.",
  path: "/product",
  keywords: [
    "field tracking software",
    "referral management software",
    "subscription software India",
    "growth loop",
  ],
});

const pillars = [
  {
    href: "/product/field",
    title: "Field tracking",
    body: "Staff check in on the phone. A photo and the route stay on the account. Travel claims are calculated from the path they actually walked.",
  },
  {
    href: "/product/referrals",
    title: "Referral management",
    body: "Each person who sends a customer has one record, a page they can open, and a reward that shows up on the invoice.",
  },
  {
    href: "/product/subscriptions",
    title: "Subscription management",
    body: "Plans, renewals, and failed payments live here. When someone is about to stop paying, that becomes a visit, not only an email.",
  },
  {
    href: "/product/analytics",
    title: "Analytics",
    body: "See which visit and which referrer brought the monthly revenue. Region and partner views sit on the same numbers.",
  },
  {
    href: "/product/mobile",
    title: "Mobile app",
    body: "Field staff install the Android app today. Google Play Store is coming very soon. Managers stay on the web.",
  },
  {
    href: "/integrations",
    title: "Integrations",
    body: "WhatsApp, Razorpay, Stripe, maps, and billing. You paste the keys in Settings. Nothing is wired by a specialist.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="One place for visits, referrals, and paid plans."
        body="GPS apps stop at the map pin. CRMs stop at the deal. Industry software stops at the invoice. Syclops keeps the visit, the person who sent the customer, and the plan they pay for together. You turn it on yourself."
        scene="loop"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
        ]}
      />
      <Section eyebrow="The gap" title="Three kinds of software. None of them show the full story.">
        <Prose>
          <p>
            GPS products prove that someone showed up. CRMs manage deals.
            Gym, school, and clinic software send invoices well. Teams that
            grow through visits and word of mouth still lose the thread.
            Introductions sit in WhatsApp. Daily routes sit in Excel.
            Renewals sit in another login.
          </p>
          <p>
            Ask a simple question and the answer is split across tools. Which
            visit led to this customer? Who sent them? Are they still paying?
            If a payment fails, who should go back? Most stacks cannot answer
            that without a spreadsheet and a phone call.
          </p>
          <p>
            Syclops is for that missing picture. You create a workspace,
            invite field staff, share a partner page, and connect Razorpay or
            Stripe. Field visits and referrals are enough on the Team plan.
            Subscriptions open on Growth.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="The loop" title="Visit, then referral, then a plan that keeps paying.">
        <Steps
          items={[
            {
              title: "The visit is recorded",
              body: "A field person checks in. The photo and the route stay on the account, so the visit is proof, not a message that disappears in a group chat.",
            },
            {
              title: "The referral is named",
              body: "A partner, member, parent, or alumni sends someone. You can see who sent them, where that person is, and whether they started paying. The sender can check status without calling the office.",
            },
            {
              title: "The plan is paid",
              body: "The new customer is on a subscription. If a payment fails, or they are about to leave, that shows up as the next visit. The loop does not end at the first invoice.",
            },
          ]}
        />
      </Section>
      <Section eyebrow="Who it is for" title="Same three steps. Different everyday words.">
        <FeatureGrid
          items={[
            {
              title: "Gyms",
              body: "Trainers visit. Members refer friends. A membership renews, or someone is about to leave and needs a visit.",
            },
            {
              title: "Campuses",
              body: "Counselors cover schools and centres. Alumni and parents refer. Fees are a plan you can follow from enquiry to payment.",
            },
            {
              title: "Clinics",
              body: "Representatives visit doctors. A clinic refers a patient. The care plan stays attached to the visit and the person who sent them.",
            },
            {
              title: "Sales teams",
              body: "The day’s route, the partner who made the introduction, and the retainer sit on one record instead of three tools.",
            },
            {
              title: "Fintech",
              body: "Field visits and partner channels stay tied to the account that pays. A failed payment can become a visit, not only a reminder.",
            },
            {
              title: "Medtech",
              body: "Hospital and clinic visits, the people who refer, and the contract that follows are one story. Managers see the region, not a pile of chats.",
            },
          ]}
        />
      </Section>
      <Section eyebrow="Modules" title="Six parts. Use the ones you need.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-line bg-cream p-6 hover:border-ink/30"
            >
              <h2 className="display text-2xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{item.body}</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section eyebrow="How you start" title="An afternoon, not a rollout.">
        <Prose>
          <p>
            There is no onboarding call and no implementation manager. You
            add regions, roles, and billing inside the product. Import a
            spreadsheet if you already have accounts. The first route can
            run the same day.
          </p>
        </Prose>
        <div className="mt-8">
          <Checklist
            items={[
              "Create a workspace and pick your industry",
              "Invite field staff and managers",
              "Add accounts from a spreadsheet",
              "Share the partner page by link or QR code",
              "Connect WhatsApp, maps, and Razorpay or Stripe",
              "Turn on plans when you are ready for subscriptions",
            ]}
          />
        </div>
      </Section>
      <Section eyebrow="FAQ" title="Plain answers.">
        <FaqList
          items={[
            {
              q: "Do I need every part of the product?",
              a: "No. Field visits and referrals are enough on Team. Subscriptions, the partner page rewards, and deeper reports open on Growth.",
            },
            {
              q: "How long does it take to go live?",
              a: "A workspace takes minutes. If you import a spreadsheet of accounts, the first route can run the same day.",
            },
            {
              q: "Is Syclops a CRM?",
              a: "No. A CRM is built around deals. Syclops is built around a visit, the person who referred the customer, and the plan they pay.",
            },
            {
              q: "Is this GPS tracking software?",
              a: "Location is proof of the visit. The product continues to the referral and the subscription. It is not a live map for watching staff all day.",
            },
            {
              q: "Who pays for partner logins?",
              a: "People who only send referrals are not billed as field staff. You pay per field seat. See pricing for Team, Growth, and Scale.",
            },
            {
              q: "Can I start small and add subscriptions later?",
              a: "Yes. Start on Team. Move to Growth in Settings when you want plans, failed-payment follow-up, and rewards on the invoice. History stays.",
            },
            {
              q: "What do field staff install?",
              a: "The Android app is ready to install now. Google Play Store is coming very soon. Managers use the website.",
            },
            {
              q: "Do you run the setup for us?",
              a: "No. Guides walk through each hour. You configure regions, check-in rules, travel claims, and billing yourself.",
            },
          ]}
        />
      </Section>
      <Section eyebrow="Next" title="Keep going from here.">
        <Related
          items={[
            { href: "/guides", label: "Guides", body: "Set it up yourself, step by step." },
            { href: "/industries", label: "Industries", body: "Gyms, campuses, clinics, sales, fintech, medtech." },
            { href: "/compare", label: "Compare", body: "GPS apps, CRMs, Excel, and industry tools." },
            { href: "/pricing", label: "Pricing", body: "Rupees per field seat. No quote, no call." },
            { href: "/security", label: "Security", body: "Access, encryption, and how workspaces stay separate." },
            { href: "/customers", label: "Customers", body: "The same product, already in use." },
          ]}
        />
      </Section>
      <CtaBand
        title="Create a workspace and invite your team."
        body="No setup call. You add regions, roles, and billing inside the product."
      />
    </>
  );
}
