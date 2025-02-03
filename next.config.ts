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
  },
};

export default nextConfig;
