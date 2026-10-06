import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops — referral management software";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return ogImage({
    eyebrow: "Home",
    title: "Referral management software",
    kicker: "Field tracking, referrals, and subscriptions — one loop.",
  });
}
