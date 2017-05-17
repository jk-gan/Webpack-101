const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'
const cssDev = ['style-loader', 'css-loader', 'sass-loader']
const cssProd = ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
const cssConfig = isProduction ? cssProd : cssDev

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true,
    hot: true,
    overlay: true,
    watchOptions: {
      ignored: /node_modules/
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Demo',
      hash: true,
      template: './src/index.ejs',
    }),
    new ExtractTextPlugin({
      filename: "app.css",
      disable: !isProduction
    }),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ]
}
