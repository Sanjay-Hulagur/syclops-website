import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Subscription management | Syclops";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Subscriptions",
    title: "Sell membership plans from the phone",
    kicker: "Cash, UPI, EMI or Razorpay. A status for every plan.",
  });
}
