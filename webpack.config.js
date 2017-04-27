const webpack = require('webpack');

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.join(__dirname, 'app'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './js/scripts.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      },
    ],
  },
  output: {
    path: `${__dirname}/js`,
    filename: 'scripts.min.js',
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new ExtractTextPlugin('public/style.css', { allChunks: true }),
  ],
};
