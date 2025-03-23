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
  // Disable SWC minify for Tempo environment
  nextConfig.swcMinify = false;

  // Use specific version of SWC plugin for Next.js 15
  nextConfig.experimental = {
    // Temporarily disable SWC plugins to fix build issues
    // swcPlugins: [[require.resolve("tempo-devtools/swc/0.90"), {}]],
  };
}

module.exports = nextConfig;
