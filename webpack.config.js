const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
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
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Demo',
      // minify: {
      //   collapseWhitespace: true
      // },
      hash: true,
      template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new ExtractTextPlugin("app.css"),
  ]
}
