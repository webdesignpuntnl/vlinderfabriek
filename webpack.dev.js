const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'development';

/* entry: ["babel-polyfill", "./_source/js/start.js"] for pollyfilling */

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './_source/js/start.js'
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        beautify: true,
        comments: false
      },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
};