import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Syclops — Referral management software",
    short_name: "Syclops",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e8",
    theme_color: "#12141a",
    lang: "en-IN",
  };
}
