/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tableList',
        permanent: true,
      },
      {
        source: '/tableCreate',
        destination: '/tableCreate',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
