import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Gym referral software | Syclops";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Gym referral software",
    title: "Member-get-member you can trace",
    kicker: "Who sent each member, and whether they joined. Keep your gym software.",
  });
}
