/* eslint-disable */
const webpack = require('webpack')
const baseConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),   // built-in config
        // NODE_ENV_BUILD: JSON.stringify(env),
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),

    new webpack.HotModuleReplacementPlugin(),

    // new ScriptExtHtmlWebpackPlugin({
    //   defaultAttribute: 'defer'
    // }),

    // new webpack.NamedModulesPlugin(),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: true
    // }),
  ],
})
