import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/page-hero";
import { FaqList, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "How teams use Syclops — example workflows",
  description:
    "Example Syclops workflows for hospitals, gyms, coaching institutes, lenders, agencies and medtech teams: who visits, who refers, and what gets tracked.",
  path: "/customers",
});

const workflows = [
  {
    industry: "Healthcare",
    title: "Hospital doctor referrals",
    body: "PROs visit referring doctors and log each visit with GPS and a photo. Each referred patient is recorded against the doctor, and the status moves as the patient arrives, is admitted and is discharged. Syclops was first built for this workflow.",
    flow: ["Doctor visit", "Patient referral", "Admission"],
    href: "/industries/healthcare",
  },
  {
    industry: "Gyms",
    title: "Member referrals at a gym",
    body: "Trainers log visits to corporate partners. Members refer friends, and each join keeps the member who sent them, so you can see which referrals became memberships that renew.",
    flow: ["Trainer visit", "Member intro", "Membership"],
    href: "/industries/gyms",
  },
  {
    industry: "Education",
    title: "Admissions at a coaching institute",
    body: "Counselors visit schools and centres. Alumni and parents refer students, and each admission keeps the person who referred it next to the fee plan.",
    flow: ["Campus visit", "Alumni intro", "Term fee"],
    href: "/industries/education",
  },
  {
    industry: "Fintech",
    title: "Field agents at a lender or insurer",
    body: "Agents log home visits with GPS. Family referrals keep the original agent on the record, and a missed payment can become the next visit.",
    flow: ["Home visit", "Family referral", "Monthly premium"],
    href: "/industries/fintech",
  },
  {
    industry: "Sales",
    title: "Channel partners at an agency",
    body: "Sales staff visit dealers. Each partner lead is recorded with the partner who sent it, so a won deal still shows where it came from.",
    flow: ["Dealer visit", "Partner lead", "Monthly retainer"],
    href: "/industries/sales",
  },
  {
    industry: "Medtech",
    title: "Clinical teams and hospital departments",
    body: "Representatives log visits to hospitals and doctors. Department referrals and the service plan that follows stay on one record.",
    flow: ["Hospital visit", "Department referral", "Service plan"],
    href: "/industries/medtech",
  },
];

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Examples"
        title="How teams use Syclops"
        body="Example setups, industry by industry: who visits, who refers, and what gets tracked. These are examples, not named customers."
        scene="customers"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "How teams use Syclops", path: "/customers" },
        ]}
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {workflows.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-3xl border border-line bg-cream p-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-iris-dark">
                {item.industry}
              </p>
              <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted">{item.body}</p>
              <ol className="mt-4 flex flex-wrap items-center gap-1.5 text-xs text-ink">
                {item.flow.map((step, index) => (
                  <li key={step} className="flex items-center gap-1.5">
                    {index > 0 ? <span aria-hidden="true" className="text-muted">→</span> : null}
                    <span className="rounded-full border border-line bg-paper px-2.5 py-1">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
              <Link
                href={item.href}
                className="mt-5 text-sm font-medium text-ink underline underline-offset-2"
              >
                {item.industry} in detail
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            {
              q: "Are these real customers?",
              a: "No. They are example setups, not named customers. Syclops itself began as the in-house system of a hospital network’s referral team.",
            },
            {
              q: "Can I set up the same workflow?",
              a: "Yes. Start a free trial with your email address and business name, then add your team and the people who refer to you.",
            },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/industries", label: "Industries", body: "The same product in your industry’s words." },
            { href: "/start?cta=customers", label: "Start free trial", body: "No card and no sales call." },
            { href: "/compare", label: "Compare", body: "Why not GPS-only." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
