import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, PageHero, Steps } from "@/components/page-hero";
import { Related, Section } from "@/components/interior";
import { getGuide, guides } from "@/lib/guides";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.summary };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const others = guides
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 3)
    .map((item) => ({
      href: `/guides/${item.slug}`,
      label: item.title,
      body: item.summary,
    }));

  return (
    <>
      <PageHero
        eyebrow="Guide"
        title={guide.title}
        body={guide.summary}
        scene={guide.scene}
      />
      <Section eyebrow="Steps">
        <Steps items={guide.steps} />
      </Section>
      <Section eyebrow="Other guides">
        <Related items={others} />
      </Section>
      <CtaBand />
    </>
  );
}
