/* eslint-disable */
const webpack = require('webpack')
const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),   // built-in config
        // NODE_ENV_BUILD: JSON.stringify(env),
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),

    // new webpack.NoEmitOnErrorsPlugin(),

    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../src/index.test.html'),
    // }),

  ]
})
