const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    app: [
      'webpack-hot-middleware/client',
      './main.js'
    ]
  },

  resolve: {
    modulesDirectories: ['app', 'node_modules'],
    extensions: ['', '.js']
  },

  output: {
    path: path.join(__dirname, './docs'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      title: 'MaYi\'s QRcode generator',
      template: './index.template.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      minimize: true
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, './'),
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/, loader: 'style-loader!css-loader?'
      }
    ]
  }
};