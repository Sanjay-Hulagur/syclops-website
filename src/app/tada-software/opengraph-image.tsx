import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "TADA software | Syclops";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "TADA software",
    title: "Mileage from the path, not the pin",
    kicker: "Check-in, checkout, and TA/DA from the day’s road distance.",
  });
}
