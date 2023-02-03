/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/200x400.png/**/**',
      },
    ],
  },
};

module.exports = nextConfig;
