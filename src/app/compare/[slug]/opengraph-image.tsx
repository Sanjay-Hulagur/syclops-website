import { comparisons, getComparison } from "@/lib/compare";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops comparison";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return comparisons.map((item) => ({ slug: item.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getComparison(slug);
  return ogImage({
    eyebrow: "Compare",
    title: page?.title ?? "Syclops",
    kicker: page?.summary,
  });
}
