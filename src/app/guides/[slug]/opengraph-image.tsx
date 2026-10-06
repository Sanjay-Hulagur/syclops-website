import { getGuide, guides } from "@/lib/guides";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops guide";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return guides.map((item) => ({ slug: item.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  return ogImage({
    eyebrow: "Guide",
    title: guide?.title ?? "Syclops",
    kicker: guide?.summary,
  });
}
