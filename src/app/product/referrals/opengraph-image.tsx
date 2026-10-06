import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Referral product | Syclops";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Referrals",
    title: "A portal the sender can actually open",
    kicker: "Status from sent to paying. Rewards after the window.",
  });
}
