/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "content.halocdn.com",
      },
      {
        protocol: "https",
        hostname: "assets.halo.autocode.gg",
      },
      {
        protocol: "https",
        hostname: "halostats.ca"
      }
    ]
  }
}

module.exports = nextConfig
