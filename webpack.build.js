const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

/* entry: ["babel-polyfill", "./_source/js/start.js"] for pollyfilling */

module.exports = {
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
        beautify: false,
        comments: false
      },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
};