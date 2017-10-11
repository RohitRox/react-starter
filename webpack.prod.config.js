const Webpack = require('webpack');
const BaseConfig = require('./webpack.config');
const WebpackStrip = require('strip-loader');

const config = Object.create(BaseConfig);

const prodPlugin = [
  new Webpack.EnvironmentPlugin({
    NODE_ENV: JSON.stringify('production'),
  }),
  new Webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      unused: true,
      dead_code: true,
    },
    output: {
      comments: false,
    },
    minimize: true,
  }),
];
config.plugins = config.plugins.concat(prodPlugin);

const stripLoader = {
  test  : /\.(js|jsx)$/,
  loader: WebpackStrip.loader('debugger', 'console.log')
};

config.module.rules.push(stripLoader);

module.exports = config;
