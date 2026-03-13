import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
   basePath: "/CI-CD-Workshop",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
