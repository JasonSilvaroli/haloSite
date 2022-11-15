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
        hostname: "https://assets.halo.autocode.gg"
      },
      {
        protocol: "https",
        hostname: "halostats.ca"
      }
    ],
    domains: [
      "content.halocdn.com",
      "assets.halo.autocode.gg",
      "halostats.ca"
    ]
  }
}

module.exports = nextConfig
