/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, '*')]
  },
  images: {
    domains: ['i.annihil.us'],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig
