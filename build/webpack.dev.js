const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const Utils = require('../config/utils');
// const { loader } = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'development',
  entry: './src/main.js',
  devServer: {
    contentBase: '../dist',
    host: '0.0.0.0',
    port: '8090',
    hot: true,
    quiet: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  stats: 'minimal',
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(svg|otf|ttf|woff|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(js|jsx?|babel|es6)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.join(__dirname, 'src')],
        options: {
          fix: true
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: '  正在编译： [:bar] ' + chalk.green.bold(':percent'),
      clear: false,
      callback: () => {
        console.log(chalk.bold.yellow('编译完成！\n'));
        console.log(chalk.bold.yellow('http://localhost:8090'));
        console.log(chalk.bold.yellow(`http://${Utils.getLocalIp()}:8090`));
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
