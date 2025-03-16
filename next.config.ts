import createMDX from "@next/mdx";
import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
};

const withNextIntl = createNextIntlPlugin();
const withMDX = createMDX({});
export default withMDX(withNextIntl(nextConfig));
