/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/api',
          destination: 'http://localhost:8001',
        },
      ],
    };
  },
};

module.exports = nextConfig;
