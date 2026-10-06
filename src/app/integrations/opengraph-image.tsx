import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops integrations";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Integrations",
    title: "WhatsApp, Razorpay, Maps — your keys",
    kicker: "Paste credentials in Settings. Syclops does not run your WABA.",
  });
}
