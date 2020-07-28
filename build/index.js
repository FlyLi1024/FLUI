const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const { sh, cli } = require('tasksfile');
const { platform, folder } = require('../config/index');

const defaultSetting = {
  platform,
  folder
};

function writeFile() {
  fs.writeFileSync(path.resolve(__dirname, '../config/config.json'), JSON.stringify(defaultSetting));
  console.log(chalk.bold.yellow(`已切换到( ${defaultSetting.platform} )环境`));
}

// 统一运行
function serve() {
  inquirer
    .prompt({
      type: 'rawlist',
      name: 'serve',
      message: '请选择要运行的命令：',
      choices: ['serve-m(移动端模式)', 'serve-doc(文档)', 'serve-pc(pc端模式)']
    })
    .then((answers) => {
      if (answers.serve === 'serve-m(移动端模式)') {
        defaultSetting.platform = 'm';
        writeFile();
        sh('webpack-dev-server --config build/webpack.dev.js', { nopipe: true });
      } else if (answers.serve === 'serve-doc(文档)') {
        defaultSetting.platform = 'pc';
        writeFile();
        sh('webpack-dev-server --config build/webpack.doc.js', { nopipe: true });
      } else {
        defaultSetting.platform = 'pc';
        writeFile();
        sh('webpack-dev-server --config build/webpack.dev.js', { nopipe: true });
      }
    });
}

// 统一打包
const buildPrompt = {
  type: 'rawlist',
  name: 'build',
  message: '请选择要打包的命令：',
  choices: ['build-lib(组件库)', 'build-dist-m(移动端模式)', 'build-doc(文档)', 'build-dist-pc(pc端模式)', 'build-style(组件库样式)', 'build-numd(组件库)']
};

function build() {
  inquirer.prompt(buildPrompt).then((answers) => {
    if (answers.build === buildPrompt.choices[0]) {
      defaultSetting.platform = 'm';
      writeFile();
      sh('rimraf lib && webpack --config build/webpack.lib.js && gulp build --gulpfile build/gulp.style.js', { nopipe: true });
    } else if (answers.build === buildPrompt.choices[1]) {
      defaultSetting.platform = 'm';
      defaultSetting.folder = 'demo';
      writeFile();
      sh('rimraf dist && webpack --config build/webpack.prod.js && node config/upload.js', { nopipe: true });
    } else if (answers.build === buildPrompt.choices[2]) {
      defaultSetting.platform = 'pc';
      defaultSetting.folder = 'doc';
      writeFile();
      sh('rimraf doc/dist && webpack --config build/webpack.doc.js && node config/upload.js', { nopipe: true });
    } else if (answers.build === buildPrompt.choices[3]) {
      defaultSetting.platform = 'pc';
      defaultSetting.folder = 'demo';
      writeFile();
      sh('rimraf dist && webpack --config build/webpack.prod.js && node config/upload.js', { nopipe: true });
    } else if (answers.build === buildPrompt.choices[4]) {
      defaultSetting.platform = 'm';
      writeFile();
      sh('rimraf lib/theme-chalk && gulp build --gulpfile build/gulp.style.js', { nopipe: true });
    } else if (answers.build === buildPrompt.choices[5]) {
      defaultSetting.platform = 'm';
      writeFile();
      sh('rimraf umd && webpack --config build/webpack.umd.js', { nopipe: true });
    }
  });
}

cli({
  serve,
  build
});
