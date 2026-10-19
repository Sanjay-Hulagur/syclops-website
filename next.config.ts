import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  // Netlify builds start clean, so this cache is never reused. Turbopack
  // otherwise writes server env values into .next/cache and the secrets scan fails.
  experimental: {
    turbopackFileSystemCacheForBuild: process.env.NETLIFY !== "true",
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [{ source: "/demo", destination: "/start", permanent: true }];
  },
  async headers() {
    return [
      {
        source: "/login",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
