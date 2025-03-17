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
  // Disable SWC minification to avoid plugin issues
  swcMinify: false,
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig["experimental"] = {
    // Use babel instead of SWC plugins to avoid compatibility issues
    swcPlugins: [],
  };
}

module.exports = nextConfig;
