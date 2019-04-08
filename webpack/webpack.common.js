const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const project = require('../project.config')

const inProject = path.resolve.bind(path, project.basePath)
const inProjectSrc = file => inProject(project.srcDir, file)

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: inProjectSrc('index.html'),
  inject: true,
  minify: {
    collapseWhitespace: true,
  },
})

module.exports = {
  entry: inProjectSrc(project.main),
  output: {
    path: path.resolve(project.outDir),
    filename: 'index_bundle.js',
    publicPath: project.publicPath,
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use : [{
          loader: 'url-loader',
          options: {
            limit: 8192, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]',
          },
        }],
      },
      {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
              }
          }]
      },
      { test: /\.js$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
      { test: /\.jsx$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
    ],
  },
  externals: project.externals,
  devServer: {
    port: project.port,
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin(project.commonGlobals),
  ],
}
