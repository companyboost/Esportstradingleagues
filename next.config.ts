import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. Without it Next.js picks up an
  // unrelated package-lock.json higher up in the user folder and warns.
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
