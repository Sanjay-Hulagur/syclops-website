import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/page-hero";
import { FeatureGrid, FaqList, Prose, Related, Section } from "@/components/interior";
import { comparisons, getComparison } from "@/lib/compare";
import { pageSeo } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return comparisons.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparison(slug);
  if (!page) return {};
  return pageSeo({
    title: page.title,
    description: page.summary,
    path: `/compare/${page.slug}`,
    keywords: [page.theirs, "Syclops", "field tracking", "referral management"],
  });
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const page = getComparison(slug);
  if (!page) notFound();

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        body={page.summary}
        scene="compare"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
          { name: page.theirs, path: `/compare/${page.slug}` },
        ]}
      />
      <Section eyebrow="The honest split" title="Same category on a slide. Different objects in the product.">
        <Prose>
          {page.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Prose>
      </Section>
      <section className="mx-auto max-w-6xl overflow-x-auto px-5 py-16">
        <h2 className="display mb-8 text-3xl font-semibold tracking-tight">
          Side by side
        </h2>
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="py-3 pr-4 font-medium">Capability</th>
              <th className="py-3 pr-4 font-medium text-muted">{page.theirs}</th>
              <th className="py-3 font-medium text-iris">Syclops</th>
            </tr>
          </thead>
          <tbody>
            {page.rows.map(([label, theirs, ours]) => (
              <tr key={label} className="border-b border-line">
                <th className="py-4 pr-4 font-medium">{label}</th>
                <td className="py-4 pr-4 text-muted">{theirs}</td>
                <td className="py-4">{ours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Section eyebrow="When to keep both" title="Do not rip out what still earns its keep.">
        <FeatureGrid items={page.choose} />
      </Section>
      <Section eyebrow="FAQ" title="Questions teams ask before they switch.">
        <FaqList items={page.faqs} />
      </Section>
      <Section eyebrow="Next">
        <Related
          items={
            page.slug === "gps-trackers"
              ? [
                  {
                    href: "/tada-software",
                    label: "TADA software",
                    body: "Mileage from the path, not pin-to-pin.",
                  },
                  {
                    href: "/product/field",
                    label: "Field tracking",
                    body: "Check-in as evidence, not a live map.",
                  },
                  {
                    href: "/compare",
                    label: "All comparisons",
                    body: "Excel, GPS, CRM, vertical.",
                  },
                ]
              : page.slug === "whatsapp-excel"
                ? [
                    {
                      href: "/guides/import-beat-list",
                      label: "Import a beat list",
                      body: "CSV in, then the field app is the source of truth.",
                    },
                    {
                      href: "/product/referrals",
                      label: "Referral management",
                      body: "Status the sender can see, not a chat scroll.",
                    },
                    {
                      href: "/compare",
                      label: "All comparisons",
                      body: "Excel, GPS, CRM, vertical.",
                    },
                  ]
                : page.slug === "vertical-software"
                  ? [
                      {
                        href: "/compare/gym-software",
                        label: "vs gym management software",
                        body: "Floor ERP vs origin, trainer visits, paying memberships.",
                      },
                      {
                        href: "/gym-referral-software",
                        label: "Gym referral software",
                        body: "Member-get-member beside the gym ERP.",
                      },
                      {
                        href: "/compare",
                        label: "All comparisons",
                        body: "Excel, GPS, CRM, vertical.",
                      },
                    ]
                  : page.slug === "crm"
                    ? [
                        {
                          href: "/blog/channel-partner-portal-not-crm-source-field",
                          label: "Portal vs source field",
                          body: "Partners need status. A CRM picklist is not a portal.",
                        },
                        {
                          href: "/industries/sales",
                          label: "Sales & marketing",
                          body: "Beat, partner intro, retainer.",
                        },
                        {
                          href: "/compare",
                          label: "All comparisons",
                          body: "Excel, GPS, CRM, vertical.",
                        },
                      ]
                    : page.slug === "gym-software"
                    ? [
                        {
                          href: "/gym-referral-software",
                          label: "Gym referral software",
                          body: "The search page for member-get-member.",
                        },
                        {
                          href: "/industries/gyms",
                          label: "Gyms",
                          body: "Trainer visits, portal, freeze rules.",
                        },
                        {
                          href: "/compare/vertical-software",
                          label: "vs vertical software",
                          body: "Gym, school, and clinic tools in one split.",
                        },
                      ]
                    : [
                      { href: "/start", label: "Start", body: "Create a workspace. No quote." },
                      { href: "/product", label: "Product", body: "Visit, referral, plan." },
                      { href: "/compare", label: "All comparisons", body: "Excel, GPS, CRM, vertical." },
                    ]
          }
        />
      </Section>
      <CtaBand />
    </>
  );
}
