import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Interested in using Syclops";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    eyebrow: "Interested",
    title: "Tell us you want to use Syclops.",
    kicker: "Name, email, phone, industry, and business name.",
  });
}
