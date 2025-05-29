/* eslint-disable no-undef */
/* global require */
/* global module */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    watchFiles: ['src/**/*'],
    open: true,
    hot: true,
    liveReload: true,
    port: 3000,
  },
});
