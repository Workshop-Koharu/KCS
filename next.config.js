/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com", "raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
