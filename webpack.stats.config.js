const Webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const BaseConfig = require('./webpack.prod.config');

const config = Object.create(BaseConfig);

const plugins = [
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    reportFilename: '../../reports/report.html',
    openAnalyzer: true,
    generateStatsFile: true,
    statsFilename: '../../reports/report.json',
  }),
];
config.plugins = config.plugins.concat(plugins);

module.exports = config;
