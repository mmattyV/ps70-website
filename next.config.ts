import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/ps70-website',
  assetPrefix: '/ps70-website/',
  distDir: 'out',
  skipTrailingSlashRedirect: true,
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
