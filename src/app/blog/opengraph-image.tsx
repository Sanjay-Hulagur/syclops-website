import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops blog";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Blog",
    title: "The field day is the revenue system.",
    kicker: "The visit, the intro, and the subscription on one record.",
  });
}
