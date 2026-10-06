import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops security";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Security",
    title: "Working-day GPS. Retention you set.",
    kicker: "DPDP-shaped field tracking. No fake audit badges.",
  });
}
