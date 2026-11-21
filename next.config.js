/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.discordapp.com", "raw.githubusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/server",
        destination: "https://discord.gg/rnD8HQDDz3",
        permanent: false,
      },
      {
        source: "/support-server/kcs",
        destination: "https://discord.gg/rnD8HQDDz3",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
