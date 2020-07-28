const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { SRC_PATH } = require('../config/const');

module.exports = {
  // devtool: 'source-map',
  mode: 'production',
  entry: './packages/index.js',
  output: {
    path: path.resolve(__dirname, '../umd'),
    publicPath: '/umd/',
    filename: 'flui.min.js',
    library: 'flui',
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
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
        test: /\.(sa|sc|c|le)ss$/,
        loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(js|jsx?|babel|es6)$/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(svg|otf|ttf|woff|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000
        }
      }
    ]
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  performance: {
    hints: false
  },
  stats: {
    children: false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/index.css',
      chunkFilename: 'css/chunk-[name][chunkhash:7].css'
    }),
    // 压缩css
    new OptimizeCSSAssetsPlugin(),
    new ProgressBarPlugin(),
    new VueLoaderPlugin()
  ]
};
