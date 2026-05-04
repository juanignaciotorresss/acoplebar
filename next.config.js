/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.b12.io',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
