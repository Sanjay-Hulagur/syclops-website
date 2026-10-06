import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/page-hero";
import { FaqList, Related, Section } from "@/components/interior";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({
  title: "Customer patterns — gyms, campuses, field sales",
  description:
    "How gyms, coaching institutes, clinics, NBFCs, agencies, and medtech teams run field visits, referrals, and plans on Syclops. Patterns, not a logo wall.",
  path: "/customers",
});

const stories = [
  {
    title: "80-centre gym chain",
    industry: "Gyms",
    quote:
      "Member referrals used to live on a whiteboard at reception. Now a join is a membership with a referrer, and churn writes a trainer visit.",
    loop: "Trainer visit → member intro → Gold annual",
  },
  {
    title: "Regional coaching institute",
    industry: "Education",
    quote:
      "Counselors covered 40 campuses. Accounts collected fees. Nobody could say which alumni intro still paid. That is the first report we look at.",
    loop: "Campus visit → alumni intro → term fee",
  },
  {
    title: "Medtech clinical team",
    industry: "Medtech",
    quote:
      "KOL visits were in a field app. Contracts were in email. Service plans were somewhere else. The loop is why finance trusts the pipeline.",
    loop: "KOL visit → department referral → service plan",
  },
  {
    title: "NBFC field force",
    industry: "Fintech",
    quote:
      "Lapses hid in the insurer portal. Agents reported on a call. Family referrals now keep the premium and the original agent on the same record.",
    loop: "Home visit → family referral → monthly premium",
  },
  {
    title: "Agency retainers",
    industry: "Sales",
    quote:
      "Channel partners forwarded leads in WhatsApp. Won deals never paid the partner. The retainer now carries the intro.",
    loop: "Dealer visit → partner lead → monthly retainer",
  },
  {
    title: "Diagnostic collection",
    industry: "Healthcare",
    quote:
      "Partner clinics asked for patient status every afternoon. The portal ended the calls. Lapsed plans go back on the officer’s beat.",
    loop: "Clinic visit → patient referral → care plan",
  },
];

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Customers"
        title="The loop, in the wild."
        body="Shapes of teams running field work, referrals, and plans together — without a CSM in Slack. Names are pattern, not a logo wall."
        scene="customers"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Customers", path: "/customers" },
        ]}
      />
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {stories.map((story) => (
            <blockquote
              key={story.title}
              className="rounded-3xl border border-line bg-cream p-6"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-iris">
                {story.industry}
              </p>
              <p className="mt-2 font-medium">{story.title}</p>
              <p className="mt-4 text-sm leading-7">{story.quote}</p>
              <p className="mt-4 text-xs text-muted">{story.loop}</p>
            </blockquote>
          ))}
          </div>
      </Section>
      <Section eyebrow="FAQ">
        <FaqList
          items={[
            {
              q: "Are these named customers?",
              a: "No. They are shapes of teams running the loop. This site does not publish a logo wall.",
            },
            {
              q: "Can I run the same loop?",
              a: "Yes. Create a workspace, pick the industry, invite seats. The product is the same one they use.",
            },
          ]}
        />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/industries", label: "Industries", body: "Pick your nouns." },
            { href: "/start", label: "Start", body: "Same product they use." },
            { href: "/compare", label: "Compare", body: "Why not GPS-only." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
