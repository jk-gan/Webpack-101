const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'
const cssDev = [
  { loader: 'style-loader', options: { sourceMap: true } },
  { loader: 'css-loader', options: { sourceMap: true } },
  { loader: 'postcss-loader', options: { sourceMap: true } },
  { loader: 'sass-loader', options: { sourceMap: true } }
]

const cssProd = ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'postcss-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                  ]
                })
const cssConfig = isProduction ? cssProd : cssDev

module.exports = {
  entry: {
    main: './src/app.js',
    vendor: ['react', 'react-dom']
  },
  output: {
    filename: isProduction ? '[name].[chunkhash].js' : '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: cssConfig
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100,
              name: isProduction ? '[name]-[hash].[ext]' : '[name].[ext]',
              outputPath: './images/'
            }
          },
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: isProduction ? '[name]-[hash].[ext]' : '[name].[ext]',
            outputPath: './fonts/'
          }
        }
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
      template: './src/index.ejs',
    }),
    new ExtractTextPlugin({
      filename: '[name]-[contenthash].min.css',
      disable: !isProduction
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest']
    }),
    // new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    // new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    new webpack.HashedModuleIdsPlugin()
  ],
  devtool: isProduction ? "cheap-module-source-map" : "eval-source-map"
}
