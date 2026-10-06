import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops pricing";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Pricing",
    title: "INR per field seat",
    kicker: "Referrers are free. 14 days, no card.",
  });
}
