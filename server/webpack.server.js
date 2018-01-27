const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // Inform webpack that we're building a bundle for nodejs, rather than for the browser
  target: 'node',

  // Tell webpack for the root file of our server application
  entry: './src/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react', 'stage-0', ['env', { targets: { browsers: ['last 2 versions'] } }]],
        },
      },
    ],
  },

  // this tells webpack not to bundle any library in the node module for the server bundle
  // for more performance
  externals: [webpackNodeExternals()],
}

module.exports = merge(baseConfig, config)
