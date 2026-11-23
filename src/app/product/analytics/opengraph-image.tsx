import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops analytics";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Analytics",
    title: "See which visits lead to referrals",
    kicker: "Coverage, people, and referrers, with Excel exports.",
  });
}
