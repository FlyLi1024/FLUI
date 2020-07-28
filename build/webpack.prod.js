const webpack = require('webpack');
const { merge } = require('webpack-merge');
const chalk = require('chalk');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const common = require('./webpack.common');
const { DIST_PATH, SRC_PATH } = require('../config/const');

module.exports = merge(common, {
  mode: 'production', // 此处问题暂未处理，应为 production
  entry: './src/main.js',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/chunk-[id][chunkhash:7].js',
    path: DIST_PATH
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  // externals: {
  //   vue: {
  //     root: 'Vue',
  //     commonjs: 'vue',
  //     commonjs2: 'vue',
  //     amd: 'vue',
  //   },
  // },
  performance: {
    hints: false
  },
  stats: 'minimal',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(js|jsx?|babel|es6)$/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 分离css
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
      chunkFilename: 'css/chunk-[name][chunkhash:7].css'
    }),
    // 压缩css
    new OptimizeCSSAssetsPlugin(),
    new ProgressBarPlugin({
      format: '  正在打包： [:bar] ' + chalk.green.bold(':percent'),
      callback: () => {
        console.log(chalk.bold.yellow('打包完成! \n'));
      }
    })
  ]
});
