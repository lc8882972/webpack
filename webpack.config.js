const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'app/index.js',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: '#source-map',
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "postcss-loader"
            },
            {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        })
      }
    ]
  },
  resolve: {
    alias: {
      jquery: "https://code.jquery.com/jquery-3.1.1.slim.min.js"
    }
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    // new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new  webpack.NoErrorsPlugin()
  ]
}