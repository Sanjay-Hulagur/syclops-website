import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Referral product | Syclops";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Referrals",
    title: "Every referral keeps the name of who sent it",
    kicker: "A login for referrers, and the status of everyone they sent.",
  });
}
