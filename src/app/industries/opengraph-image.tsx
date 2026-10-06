import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops industries";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Industries",
    title: "Same loop. Different nouns.",
    kicker: "Gyms, campuses, clinics, sales, fintech, medtech.",
  });
}
