import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops product";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Product",
    title: "Field, referrals, subscriptions",
    kicker: "Visits, referrals, and plans in one app.",
  });
}
