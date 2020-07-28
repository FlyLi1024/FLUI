const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const chalk = require('chalk');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TEMPLETE_PATH } = require('../config/const');
const Utils = require('../config/utils');

module.exports = merge(common, {
  mode: 'development',
  entry: './doc/main.js',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/chunk-[id][chunkhash:7].js',
    path: path.resolve(__dirname, '../doc/dist')
  },
  devServer: {
    host: '0.0.0.0',
    port: '8091',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(svg|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]',
          publicPath: '../'
        }
      },
      {
        test: /\.(otf|ttf|woff|woff2|eot?g)(\?\S*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'font/[name].[ext]',
          publicPath: '../'
        }
      },
      {
        test: /\.(js|jsx?|babel|es6)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          },
          require.resolve('./md-loader/index.js')
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: TEMPLETE_PATH,
      title: 'KAD-DESIGN说明文档',
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
      chunkFilename: 'css/chunk-[name][chunkhash:7].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ProgressBarPlugin({
      format: '  正在编译： [:bar] ' + chalk.green.bold(':percent'),
      clear: false,
      callback: () => {
        console.log(chalk.bold.yellow('编译完成！\n'));
        console.log(chalk.bold.yellow('http://localhost:8091'));
        console.log(chalk.bold.yellow(`http://${Utils.getLocalIp()}:8091`));
      }
    })
  ]
});
