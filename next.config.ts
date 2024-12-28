import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS === "true"
  ? "/https://manabeai.github.io/compete-utils" // GitHub Actions 環境
  : "", // 通常のローカル環境
};

export default nextConfig;
