import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops mobile app";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Mobile",
    title: "Field app that queues offline",
    kicker: "Check-in, visits, photos — sync when the radio returns.",
  });
}
