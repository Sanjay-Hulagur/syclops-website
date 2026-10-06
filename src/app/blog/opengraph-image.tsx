import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops blog";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Blog",
    title: "The loop, in writing",
    kicker: "TADA, referrals, dunning, DPDP — without invented percentages.",
  });
}
