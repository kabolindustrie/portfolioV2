/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.(pdf)$/,
        type: 'asset/resource',
      });
    }

    return config;
  },
};

export default nextConfig;
