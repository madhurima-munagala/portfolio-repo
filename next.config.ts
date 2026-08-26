import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // No external image domains are used yet — everything is served
    // from /public. Add remotePatterns here if that ever changes.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
