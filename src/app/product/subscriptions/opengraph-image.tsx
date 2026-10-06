import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Subscription management | Syclops";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Subscriptions",
    title: "Dunning that writes a field visit",
    kicker: "Retry the mandate. Then send a person.",
  });
}
