/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['steamcommunity-a.akamaihd.net', 'avatars.akamai.steamstatic.com']
  }
}

module.exports = nextConfig
