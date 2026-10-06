import { getIndustry, industries } from "@/lib/industries";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops industry";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  return ogImage({
    eyebrow: industry?.label ?? "Industry",
    title: industry?.headline ?? "Syclops",
    kicker: industry?.body,
  });
}
