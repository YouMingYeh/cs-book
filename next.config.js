const isProd = process.env.NODE_ENV === "production";

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

const nextConfig = {
  basePath: isProd ? "/cs-book" : "",
  assetPrefix: "./",
  reactStrictMode: true,
  output: isProd ? "export" : "standalone",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};
module.exports = withNextra(nextConfig);
