import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All catalog photos are served from Unsplash's CDN, which resizes on the fly,
    // so we skip Vercel's image optimizer (and its usage limits) entirely.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
