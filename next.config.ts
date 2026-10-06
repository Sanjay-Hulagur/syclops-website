import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [{ source: "/demo", destination: "/start", permanent: true }];
  },
};

export default nextConfig;
