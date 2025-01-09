import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  //config allow images domain, should change to api endpoint url later
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  webpack: config => {
    //ignore log or warning by this lib
    config.externals.push('pino-pretty');
    return config;
  },
};

export default nextConfig;
