import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/memory",
        destination: "https://github.com/see-stack/claude-obsidian-memory",
        permanent: false,
      },
      {
        source: "/mods",
        destination: "https://github.com/see-stack/claude-code-mods",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/see-stack",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
