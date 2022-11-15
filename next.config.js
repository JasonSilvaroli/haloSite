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
    ]
  }
}

module.exports = nextConfig
