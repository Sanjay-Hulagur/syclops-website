import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops mobile app";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Mobile",
    title: "The field day, on the phone",
    kicker: "Check-in, visits, photos, and plans on Android.",
  });
}
