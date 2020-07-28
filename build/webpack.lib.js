const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { LIB_PATH, SRC_PATH, PACKAGES_PATH } = require('../config/const');

const entrysList = {};
const componentNameList = fs.readdirSync(path.resolve(__dirname, '../packages/components'));
componentNameList.map((component) => {
  entrysList[component] = `./packages/components/${component}/index.js`;
});

module.exports = {
  mode: 'production',
  entry: {
    ...entrysList,
    index: './packages/index.js',
  },
  output: {
    path: LIB_PATH,
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 引入省略的后缀
    alias: {
      '@src': SRC_PATH,
      '@packages': PACKAGES_PATH,
    },
    modules: ['node_modules'],
  },
  externals: {
    // 外部扩展，防止将某些 import 的包(package)打包到 bundle 中
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  performance: {
    hints: false,
  },
  stats: 'minimal',
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.(sa|sc|c|le)ss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.(js|jsx?|babel|es6)$/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(svg|otf|ttf|woff|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin({
      format: '正在打包全部组件JS文件： [:bar] ' + chalk.green.bold(':percent'),
      callback: () => {
        console.log(chalk.bold.yellow('组件JS文件打包完成! \n'));
      },
    }),
  ],
};
