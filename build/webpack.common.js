const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const resolve = (dir) => path.resolve(__dirname, '..', dir);
const { TEMPLETE_PATH } = require('../config/const');

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.vue'], // import导入时省略后缀
    alias: {
      '@': resolve('src'),
      '@packages': resolve('packages'),
      '@doc': resolve('doc'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: TEMPLETE_PATH,
      title: '基于Vue2.x的前端UI组件库',
      inject: 'body',
    }),
    new VueLoaderPlugin(),
  ],
};
