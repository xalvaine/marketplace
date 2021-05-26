module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      issuer: /\.(js|ts)x?$/,
      test: /\.svg$/,
      use: [`@svgr/webpack`],
    })

    return config
  },
}
