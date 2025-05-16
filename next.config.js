/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      }
    ],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig.experimental = {
    swcPlugins: [],
  };
  nextConfig.transpilePackages = ["@swc/core"];
}

module.exports = nextConfig;