import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  serverExternalPackages: ["geoip-lite", "mssql", "tedious"],
  outputFileTracingIncludes: {
    "/api/analytics": ["./node_modules/geoip-lite/data/**/*"],
  },
  // Netlify builds start clean, so this cache is never reused. Turbopack
  // otherwise writes server env values into .next/cache and the secrets scan fails.
  experimental: {
    turbopackFileSystemCacheForBuild: process.env.NETLIFY !== "true",
  },
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    // LANDING_PAGES_OFF=1 (then redeploy) sends ad traffic to /start instead.
    // Query strings, including gclid and utm tags, carry over.
    const landingPagesOff = process.env.LANDING_PAGES_OFF === "1";
    return [
      { source: "/demo", destination: "/start", permanent: true },
      {
        source: "/guides/qualification-window",
        destination: "/product/referrals",
        permanent: true,
      },
      {
        source: "/guides/referral-payouts",
        destination: "/product/referrals",
        permanent: true,
      },
      {
        source: "/guides/import-beat-list",
        destination: "/guides/import-from-excel",
        permanent: true,
      },
      ...(landingPagesOff
        ? [
            {
              source: "/lp/doctor-referral",
              destination: "/start?industry=healthcare&workflow=doctor-referral",
              permanent: false,
            },
            { source: "/lp/:path*", destination: "/start", permanent: false },
          ]
        : []),
    ];
  },
  async headers() {
    return [
      {
        source: "/lp/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/login",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/insights",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/start/created",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/downloads/syclops.apk",
        headers: [
          {
            key: "Content-Type",
            value: "application/vnd.android.package-archive",
          },
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Syclops.apk"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
