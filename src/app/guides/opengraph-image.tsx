import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops guides";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Guides",
    title: "Go live without a person on the call",
    kicker: "Workspace, beat import, portal, billing.",
  });
}
