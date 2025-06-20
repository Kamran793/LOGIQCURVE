// next.config.js
const webpack = require('webpack')

module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  webpack: (config) => {
    // Only apply polyfill in client build
    if (typeof config.resolve.fallback !== 'object') {
      config.resolve.fallback = {}
    }

    Object.assign(config.resolve.fallback, {
      crypto: false, // don't crash if missing
      stream: false,
    })

    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      })
    )

    return config
  },
}
