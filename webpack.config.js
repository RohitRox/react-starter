const Path = require('path');
const Webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  "node": {
    "fs": "empty"
  },
  context: Path.resolve('./src/'),
  entry: {
    home: './js/home/app.js',
    about: './js/about/app.js'
  },
  output: {
    path: Path.resolve('./build/javascripts/'),
    filename: '[name]_bundle.js',
    publicPath: '/javascripts/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      Path.resolve('./node_modules'),
      Path.resolve('./src/js'),
      Path.resolve('./src/css')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: false
              }
            },
            {loader: 'sass-loader'}
          ]
        })
      }
    ],
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons_bundle.js',
      minChunks: 2,
    }),
    new ExtractTextPlugin({
      filename: '../stylesheets/[name]_bundle.css',
      allChunks: true
    })
  ]
};
