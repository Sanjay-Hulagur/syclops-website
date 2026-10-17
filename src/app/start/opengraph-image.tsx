import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Create a Syclops workspace";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Start",
    title: "Create a workspace. No quote.",
    kicker: "Free trial, no card. Field seats bill when you add them.",
  });
}
