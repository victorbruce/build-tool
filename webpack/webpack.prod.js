/* global require */
/* global module */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  // Optional: add minification, caching, performance settings here
});
