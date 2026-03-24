import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api", "import"],
    includePaths: ["src/styles/global"],
  },
};

export default nextConfig;
