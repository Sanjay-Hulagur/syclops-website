import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Syclops guides";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Guides",
    title: "Set up most of it yourself",
    kicker: "Workspace, team, Excel upload, referral page, plans.",
  });
}
