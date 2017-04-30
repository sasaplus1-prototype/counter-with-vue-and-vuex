'use strict';

const webpack = require('webpack');

module.exports = function(env) {
  return [
    {
      context: __dirname,
      entry: {
        'index': `${__dirname}/src/index.js`,
      },
      module: {
        rules: [
          {
            exclude: /node_modules/,
            test: /\.js$/,
            use: [
              { loader: 'babel-loader' },
            ],
          },
          {
            exclude: /node_modules/,
            test: /\.vue$/,
            use: [
              { loader: 'vue-loader' },
            ],
          },
        ],
      },
      output: {
        chunkFilename: 'chunk-[id]-[hash].js',
        filename: '[name].js',
        path: `${__dirname}/`,
        publicPath: './',
      },
      target: 'web',
    },
  ];
};
