const Path = require('path');
const Webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  "node": {
    "fs": "empty"
  },
  context: Path.resolve('./src/'),
  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './js/app.js' // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'build/javascripts/')
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
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "url-loader",
        options: {limit: 10000, name: "fonts/[name].[ext]", publicPath: '../'}
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
    new ExtractTextPlugin("stylesheets/bundle.css"),
    new Webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new Webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates,
    new HtmlWebpackPlugin({template: 'index.html.ejs',})
  ],
  devServer: {
    hot: true, // enable HMR on the server
    contentBase: __dirname+'./build'
  }
};
