module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      issuer: /\.(js|ts)x?$/,
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        `@svgr/webpack`,
        {
          loader: `file-loader`,
          options: {
            outputPath: (url) => `static/media/${url}`,
          },
        },
      ],
    })

    return config
  },
}
