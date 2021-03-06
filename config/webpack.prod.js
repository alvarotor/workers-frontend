var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

// const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',
  debug: false,
  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  htmlLoader: {
    minimize: false // workaround for ng2
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      beautify: false,
      comments: false,
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_i8: true,
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[hash].css')
  ],
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  }
});