import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all domains
      },
      {
        protocol: "http",
        hostname: "**", // Allows all domains over HTTP (optional)
      },
    ],
    domains: ["*"], // Older method (may not work for all cases)
    unoptimized: true, // Allows raw <img> tags without optimization
  },
};

export default nextConfig;
