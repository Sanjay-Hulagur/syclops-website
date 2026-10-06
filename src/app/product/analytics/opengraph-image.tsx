import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops analytics";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Analytics",
    title: "Loop health, not kilometres",
    kicker: "Visits that became referrals that still pay.",
  });
}
