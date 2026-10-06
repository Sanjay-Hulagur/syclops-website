import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, FeatureGrid, Related, Section } from "@/components/interior";
import { CtaBand, PageHero } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";
import { industries } from "@/lib/industries";

const title = "Referral management software";
const description =
  "Referral management software for clinics, gyms, campuses, and field teams. Track partner and member referrals from intro to payout, with status, rewards, and leakage in one loop.";

export const metadata: Metadata = {
  ...pageSeo({ title, description, path: "/referral-management-software" }),
  title: { absolute: "Referral Management Software | Syclops" },
  keywords: [
    "referral management software",
    "referral management system",
    "referral tracking software",
    "partner referral software",
    "healthcare referral management software",
    "clinic referral software",
    "member referral program",
    "referral management software India",
  ],
};

const faqs = [
  {
    q: "What is referral management software?",
    a: "Software that records who sent a customer, what happened next, and whether that person paid. Syclops keeps that as one object: sent, accepted, converted, paying, or churned — with a portal the sender can open.",
  },
  {
    q: "Who is referral management software for?",
    a: "Teams that grow through partners, members, alumni, clinics, KOLs, or channel partners, and that also have people in the field. Gyms, campuses, clinics, sales orgs, fintech, and medtech.",
  },
  {
    q: "Does Syclops work as healthcare referral management software?",
    a: "Yes. Clinics and KOLs send through the same portal as a gym member or a channel partner. Status updates when a plan is created and when the first invoice clears, so the clinic does not call the desk.",
  },
  {
    q: "Can members and B2B partners use the same system?",
    a: "Yes. Member-get-member and partner referrals are the same object. Reward rules can differ. Referrers sign in with phone or email and never consume a paid seat.",
  },
  {
    q: "How do referral rewards get paid?",
    a: "Credit, extra days, or a percent of the invoice. You set a qualification window and a cap in Settings → Referrals. Nothing pays until the customer stays past that window.",
  },
  {
    q: "How is this different from a CRM or a spreadsheet?",
    a: "A CRM stores a source field. A spreadsheet stores a name. Syclops stores the visit, the referrer, and the plan together, including leakage: intros that never converted, and conversions that never paid.",
  },
  {
    q: "Is there a free referrer portal?",
    a: "Referrer logins are not billed. The portal itself is included on Growth (₹2,499 per field seat / month) and Scale. Team includes the referral workspace.",
  },
];

const searches = [
  {
    title: "Referral tracking software",
    body: "Status is the product. Sent, accepted, converted when a plan exists, paying when the first invoice clears, churned when it does not renew.",
  },
  {
    title: "Partner referral software",
    body: "One URL or QR per workspace. Clinics, KOLs, alumni, and channel partners see their own pipeline without a seat on your plan.",
  },
  {
    title: "Member referral programs",
    body: "Member-get-member uses the same record as a B2B intro. Reward type and cap can be different. Duplicate phone or email is blocked.",
  },
  {
    title: "Referral management for field teams",
    body: "A visit can open the referral. Mileage and TADA come from that day, not from a second app that only proves a pin.",
  },
];

export default function ReferralManagementSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Referral management software"
        title="Referral management software for the teams who get introduced."
        body="Syclops tracks every partner, member, alumni, clinic, and channel referral from the person who sent it to the invoice that paid them. Field visits and subscriptions stay on the same record."
        scene="referral"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Product", path: "/product" },
          {
            name: "Referral management software",
            path: "/referral-management-software",
          },
        ]}
      />

      <Section
        eyebrow="The record"
        title="One referrer. A status the sender can see."
      >
        <FeatureGrid items={searches} />
        <p className="mt-8 max-w-2xl text-sm leading-6 text-muted">
          The working product page is{" "}
          <Link href="/product/referrals" className="font-medium text-iris">
            referral management
          </Link>
          . This page is the map of what people look for, and what the software
          actually does.
        </p>
      </Section>

      <Section
        eyebrow="Industries"
        title="Same referral system. The nouns change."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((item) => (
            <Link
              key={item.id}
              href={`/industries/${item.id}`}
              className="rounded-2xl border border-line bg-cream p-5 hover:border-ink/30"
            >
              <h3 className="font-medium">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.headline}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted">
                {item.referrer} → {item.plan}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Also searched as">
        <div className="max-w-3xl space-y-6 text-base leading-7 text-ink/90">
          <p>
            <strong className="font-medium">Healthcare referral management software</strong>{" "}
            and clinic referral software, when a doctor or centre needs proof the
            patient was accepted and then paid — without a WhatsApp thread as the
            system of record. See{" "}
            <Link href="/industries/healthcare" className="text-iris">
              healthcare
            </Link>{" "}
            and{" "}
            <Link href="/industries/medtech" className="text-iris">
              medtech
            </Link>
            .
          </p>
          <p>
            <strong className="font-medium">Gym referral software</strong> and
            member-get-member, when a membership must still know who sent the
            friend — without replacing class booking or the door. See{" "}
            <Link href="/gym-referral-software" className="text-iris">
              gym referral software
            </Link>{" "}
            and{" "}
            <Link href="/industries/gyms" className="text-iris">
              gyms
            </Link>
            .
          </p>
          <p>
            <strong className="font-medium">B2B referral management</strong> and
            channel partner portals, when the sender is a firm rather than a
            friend. Rewards sit on the next invoice. Leakage is the list of
            intros that never converted, and conversions that never paid.
          </p>
          <p>
            <strong className="font-medium">Referral management software in India</strong>
            , with rupee pricing, WhatsApp, Maps, and an India hosting region on
            Scale. Visits queue on the phone when the signal drops.
          </p>
        </div>
      </Section>

      <Section eyebrow="Compare" title="Bring the referral out of the side tool.">
        <Related
          items={[
            {
              href: "/compare/whatsapp-excel",
              label: "vs WhatsApp + Excel",
              body: "Status you can name, not a scroll back through chat.",
            },
            {
              href: "/compare/crm",
              label: "vs a CRM",
              body: "A referrer and a plan, not an empty source field.",
            },
            {
              href: "/compare/vertical-software",
              label: "vs vertical software",
              body: "Billing plus a partner portal and a field team.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="FAQ" title="Referral management software, plainly.">
        <FaqList items={faqs} />
      </Section>

      <CtaBand
        title="Turn on a referral portal this week."
        body="Create a workspace, set the reward and the qualification window, and share one link. No onboarding call."
      />
    </>
  );
}
