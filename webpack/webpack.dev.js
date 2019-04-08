const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const project = require('../project.config')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
  mode: 'none',
  devtool: 'eval',
  devServer: {
    contentBase: '../dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      }

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin(Object.assign({}, {
      'process.env.NODE_ENV': JSON.stringify('development'),
      DEBUG: true,
    }, project.devGlobals)),
  ],
})
