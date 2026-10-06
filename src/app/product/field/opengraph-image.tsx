import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Field tracking software | Syclops";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Field tracking",
    title: "Prove the visit. Attach it to revenue.",
    kicker: "GPS check-in for Indian field teams — evidence, not a live map.",
  });
}
