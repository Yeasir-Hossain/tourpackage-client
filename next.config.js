/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx',],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
}

module.exports = nextConfig
