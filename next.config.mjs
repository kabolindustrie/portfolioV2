// next.config.mjs

const nextConfig = {
  output:"export",
  images: {
    loader: "custom",
    loaderFile: "./loader.js",
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/files/",
          outputPath: "static/files/",
        },
      },
    });

    return config;
  },
};

export default nextConfig;
