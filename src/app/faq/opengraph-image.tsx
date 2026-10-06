import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops FAQ";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "FAQ",
    title: "Seats, GPS, CRM, cancel",
    kicker: "Answers without a sales call.",
  });
}
