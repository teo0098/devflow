import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "img.freepik.com",
      },
    ],
  },
  serverExternalPackages: ["pino", "pino-pretty"],
};

export default nextConfig;
