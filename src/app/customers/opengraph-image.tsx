import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops customers";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Customers",
    title: "Patterns, not a logo wall",
    kicker: "How gyms, campuses, and field teams run the loop.",
  });
}
