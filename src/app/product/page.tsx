import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Checklist, FaqList, FeatureGrid, Prose, Related, Section } from "@/components/interior";
import { LoopDiagram } from "@/components/loop-diagram";
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
    body: "Staff check in with GPS and a photo at each visit. TA/DA is worked out from the distance they travel each day.",
  },
  {
    href: "/product/referrals",
    title: "Referral management",
    body: "Each person who sends a customer has their own login and sees what happened next. The same mobile number cannot be referred twice.",
  },
  {
    href: "/product/subscriptions",
    title: "Subscription management",
    body: "Sell membership plans from the phone, record cash and UPI payments or take them through Razorpay, and see who has a payment due.",
  },
  {
    href: "/product/analytics",
    title: "Analytics",
    body: "See which partners your team never visits, which ones are visited but never refer, and how each person’s visits add up.",
  },
  {
    href: "/product/mobile",
    title: "Mobile app",
    body: "Field staff install the Android app today. Managers stay on the web.",
  },
  {
    href: "/integrations",
    title: "Integrations",
    body: "WhatsApp, Razorpay, maps and hospital systems (HIS). We connect them with you during setup.",
  },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="One place for visits, referrals, and paid plans."
        body="GPS apps stop at the map pin. CRMs stop at the deal. Industry software stops at the invoice. Syclops keeps the visit, the person who sent the customer, and the plan they pay for together. You create the workspace yourself."
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
            Payments sit in another login.
          </p>
          <p>
            Ask a simple question and the answer is split across tools. Which
            visit led to this customer? Who sent them? Have they paid? Most
            stacks cannot answer that without a spreadsheet and a phone call.
          </p>
          <p>
            Syclops is for that missing picture. You create a workspace, add
            field staff and give your referrers a login. We connect WhatsApp
            and Razorpay with you. Field visits and referrals are enough on the
            Team plan. Membership plans open on Growth.
          </p>
        </Prose>
      </Section>
      <Section eyebrow="The loop" title="Visit, then referral, then a paid plan.">
        <Steps
          items={[
            {
              title: "The visit is recorded",
              body: "A field person checks in with GPS and a photo, so the visit is proof, not a message that disappears in a group chat.",
            },
            {
              title: "The referral is named",
              body: "A partner, member, parent, or alumni sends someone. You can see who sent them and where that person is. The sender can check status without calling the office.",
            },
            {
              title: "The plan is paid",
              body: "The new customer joins a plan and pays by cash, UPI or online. A plan with a payment due is marked as such, so someone knows to go back.",
            },
          ]}
        />
        <div className="mt-10">
          <LoopDiagram />
        </div>
      </Section>
      <Section eyebrow="Who it is for" title="Same three steps. Different everyday words.">
        <FeatureGrid
          items={[
            {
              title: "Gyms",
              body: "Trainers visit. Members refer friends. Each membership shows what has been paid and what is still due.",
            },
            {
              title: "Campuses",
              body: "Counselors cover schools and centres. Alumni and parents refer. Fees are a plan you can follow from enquiry to payment.",
            },
            {
              title: "Clinics",
              body: "Representatives visit doctors. A clinic refers a patient, and the referral keeps the doctor who sent them.",
            },
            {
              title: "Sales teams",
              body: "The day’s route, the partner who made the introduction, and the won deal live in one app instead of three tools.",
            },
            {
              title: "Fintech",
              body: "Agents visit customers and partners. Each referral keeps who sent it, and every call and conversion stays on the record.",
            },
            {
              title: "Medtech",
              body: "Hospital and clinic visits and the people who refer are in one app. Managers see the region, not a pile of chats.",
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
            You do not need an implementation project. Add your regions and
            your team inside the product, or upload them from a spreadsheet
            (CSV) template. Field staff can start their first working day the
            same day.
          </p>
        </Prose>
        <div className="mt-8">
          <Checklist
            items={[
              "Create a workspace with your email and business name",
              "Add field staff and managers",
              "Upload staff, areas and referrers from a spreadsheet if you have many",
              "Give your referrers a login",
              "Connect WhatsApp and Razorpay with our team",
              "Set up membership plans when you are ready",
            ]}
          />
        </div>
      </Section>
      <Section eyebrow="FAQ" title="Plain answers.">
        <FaqList
          items={[
            {
              q: "Do I need every part of the product?",
              a: "No. Field visits and referrals are enough on Team. Membership plans, leads and conversions, and deeper reports open on Growth.",
            },
            {
              q: "How long does it take to go live?",
              a: "A workspace takes minutes. Add your staff, or upload them from a spreadsheet, and they can start their first working day the same day.",
            },
            {
              q: "Is Syclops a CRM?",
              a: "No. A CRM is built around deals. Syclops is built around a visit, the person who referred the customer, and the plan they pay.",
            },
            {
              q: "Will the app use my industry’s words?",
              a: "Partly. The phone screens say referrers and referred users. Some forms and the admin dashboard still use hospital words, such as doctors and patients, because Syclops was built for hospitals first. The steps are the same.",
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
              a: "Yes. Start on Team, and tell us when you want Growth for membership plans, leads and conversions. History stays.",
            },
            {
              q: "What do field staff install?",
              a: "The Android app is ready to install now. Managers use the website.",
            },
            {
              q: "Do you run the setup for us?",
              a: "You set up the workspace yourself, and the guides walk through each step. We connect WhatsApp and Razorpay with you. If you get stuck, email us.",
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
            { href: "/customers", label: "How teams use Syclops", body: "Example workflows, industry by industry." },
          ]}
        />
      </Section>
      <CtaBand title="Create a workspace and invite your team." />
    </>
  );
}
