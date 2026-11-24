import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, FeatureGrid, Related, Section } from "@/components/interior";
import { CtaBand, PageHero } from "@/components/page-hero";
import { pageSeo } from "@/lib/seo";
import { industries } from "@/lib/industries";

const title = "Referral management software";
const description =
  "Referral management software for gyms, campuses, clinics, and field teams. Track partner and member referrals from the person who sent them to what they became, with status, the reason a referral was lost, and the field visits behind them.";

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
    a: "Software that records who sent a customer and what happened next. In Syclops, every referral keeps the name of who sent it and a status, such as pending or arrived, or the reason it stopped. When the person buys, your team records a conversion. The sender can follow the status from their own login.",
  },
  {
    q: "Who is referral management software for?",
    a: "Teams that grow through partners, members, alumni, KOLs, channel partners, or clinics, and that also have people in the field. Gyms, campuses, sales orgs, fintech, medtech, and hospitals.",
  },
  {
    q: "Does Syclops work as healthcare referral management software?",
    a: "Yes. It was built for hospitals first. Doctors and clinics send patients from their own login, or from a referral page with your hospital’s name on it, and each referral shows whether the patient arrived and was admitted. The clinic does not have to call the desk.",
  },
  {
    q: "Can members and B2B partners use the same system?",
    a: "Yes. Member referrals and partner referrals follow the same steps. Referrers log in to the Syclops app, see only the people they sent, and never use a paid seat.",
  },
  {
    q: "Can Syclops pay referrers?",
    a: "Not today. Syclops shows who sent each referral and what it became, so you can work out rewards yourself. Paying them happens outside the app.",
  },
  {
    q: "How is this different from a CRM or a spreadsheet?",
    a: "A CRM stores a source field. A spreadsheet stores a name. Syclops keeps the referrer on every referral, the field visits behind them, and the partners who were visited but never referred.",
  },
  {
    q: "Do referrers pay for their login?",
    a: "No. Referrer logins are not billed. Hospitals on Growth or Scale can also have a referral page for clinics, set up by our team.",
  },
];

const searches = [
  {
    title: "Referral tracking software",
    body: "Status is the product. Each referral shows where it stands, from pending to arrived, or why it stopped.",
  },
  {
    title: "Partner referral software",
    body: "Partners log in to send people and see their own referrals, without a seat on your plan. They do not see anyone else’s.",
  },
  {
    title: "Member referral programs",
    body: "Member referrals follow the same steps as a partner intro. The same mobile number cannot be referred twice.",
  },
  {
    title: "Referral management for field teams",
    body: "Your field team visits the partners who refer. Analytics show who was visited and never referred, and TA/DA comes from the same working day.",
  },
];

export default function ReferralManagementSoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Referral management software"
        title="Referral management software for the teams who get introduced."
        body="Syclops tracks every partner, member, alumni, channel, and clinic referral from the person who sent it to what it became. Field visits and membership plans are in the same app."
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
        title="Same referral system, in every industry."
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
            and clinic referral software, when a doctor or centre needs to see
            whether the patient arrived — without a WhatsApp thread as the
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
            member-get-member, when you need to know who sent each new member and
            whether they joined — without replacing class booking or the door. See{" "}
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
            <strong className="font-medium">B2B referral management</strong>,
            when the sender is a firm rather than a friend. Each partner sees only
            the referrals they sent, and a lost referral keeps the reason it was
            lost.
          </p>
          <p>
            <strong className="font-medium">Referral management software in India</strong>
            , with rupee pricing, WhatsApp, Razorpay, and Maps, and an Android app
            for the field team.
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
              body: "A named referrer, not an empty source field.",
            },
            {
              href: "/compare/vertical-software",
              label: "vs vertical software",
              body: "Beside your billing: referrer logins and a field team.",
            },
          ]}
        />
      </Section>

      <Section eyebrow="FAQ" title="Referral management software, plainly.">
        <FaqList items={faqs} />
      </Section>

      <CtaBand
        title="Start tracking referrals this week."
        body="Create a workspace, add your team and your referrers, and log your first referral the same day."
      />
    </>
  );
}
