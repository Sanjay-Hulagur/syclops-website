import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Referral management software | Syclops";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Category",
    title: "Referral management software",
    kicker: "From intro to outcome, with the field visits in the same app.",
  });
}
