const gulp = require('gulp');
const { series, src, dest } = gulp;
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const chalk = require('chalk');
const fs = require('fs');
console.log(chalk.bold.yellow('正在打包组件样式 \n'));

// 打包base.less(按需加载插件要求必须有base.css文件)
function compileBase() {
  return src('../packages/style/base.less')
    .pipe(less())
    .pipe(postcss())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions', 'ie > 8'],
      })
    )
    .pipe(cssmin())
    .pipe(dest('../lib/theme-chalk'));
}
// 打包公共css
function compileIndex() {
  return src('../packages/style/index.less')
    .pipe(less())
    .pipe(postcss())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions', 'ie > 8'],
      })
    )
    .pipe(cssmin())
    .pipe(dest('../lib/theme-chalk'));
}

// 复制字体图标
function copyfont() {
  return src(['../packages/style/iconfont/fonts/*']).pipe(cssmin()).pipe(dest('../lib/theme-chalk/fonts'));
}

// 打包组件css
function compileComponent() {
  const getList = [];
  const list = fs.readdirSync('../packages/components');
  list.map((item) => {
    getList.push(`../packages/components/${item}/${item}.less`);
  });

  return src(getList)
    .pipe(less())
    .pipe(postcss())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 2 versions', 'ie > 8'],
      })
    )
    .pipe(cssmin())
    .pipe(dest('../lib/theme-chalk'));
}

function finished(cb) {
  cb();
  console.log(chalk.bold.yellow('组件样式打包完成！ \n'));
}
exports.build = series(compileBase, compileIndex, copyfont, compileComponent, finished);
