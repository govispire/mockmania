
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "api.dicebear.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig.experimental = {
    swcPlugins: [],
  };
  nextConfig.transpilePackages = ["@swc/core"];
}

module.exports = nextConfig;
