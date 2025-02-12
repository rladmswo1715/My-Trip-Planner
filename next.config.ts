import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tripplan-image.s3.ap-northeast-2.amazonaws.com',
        port: '',
        search: '',
      },
    ],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'http://3.38.57.113/:path*',
      },
    ];
  },
};

export default nextConfig;
