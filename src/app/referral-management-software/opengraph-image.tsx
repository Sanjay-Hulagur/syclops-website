import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Referral management software | Syclops";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Category",
    title: "Referral management software",
    kicker: "From intro to payout — with the visit and the plan on the same record.",
  });
}
