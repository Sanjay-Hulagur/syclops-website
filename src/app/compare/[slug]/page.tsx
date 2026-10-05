import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/page-hero";
import { Related, Section } from "@/components/interior";
import { comparisons, getComparison } from "@/lib/compare";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return comparisons.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getComparison(slug);
  if (!page) return {};
  return { title: page.title, description: page.summary };
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
      />
      <section className="mx-auto max-w-6xl overflow-x-auto px-5 py-16">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-line">
              <th className="py-3 pr-4 font-medium"> </th>
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
      <Section eyebrow="Next">
        <Related
          items={[
            { href: "/start", label: "Start", body: "Create a workspace. No quote." },
            { href: "/product", label: "Product", body: "Visit, referral, plan." },
            { href: "/compare", label: "All comparisons", body: "Excel, GPS, CRM, vertical." },
          ]}
        />
      </Section>
      <CtaBand />
    </>
  );
}
