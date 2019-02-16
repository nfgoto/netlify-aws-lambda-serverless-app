const webpack = require('webpack')

module.exports = {
  plugins: [
    // workaround for NODE_ENV="production" always
    // https://github.com/netlify/netlify-lambda/issues/119
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
  ],
}