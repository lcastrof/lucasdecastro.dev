import createMDX from "@next/mdx";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  staticPageGenerationTimeout: 120,
  generateEtags: true,
  compress: true,
  poweredByHeader: false,
  generateBuildId: async () => {
    return "build-" + Date.now();
  },
  experimental: {
    mdxRs: true,
    optimisticClientCache: true,
  },
};

const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX({});
export default withMDX(withNextIntl(nextConfig));
