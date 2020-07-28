const rm = require('rimraf');
var chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const stat = fs.stat;
const { folder } = require('./index');
const resToPath = '\\\\192.168.1.21\\Kad2.0测试环境\\Kad.WEB\\skin\\kad_design\\' + folder;
let resFromPath = '';
if (folder === 'demo') {
  resFromPath = path.resolve(__dirname, '../dist');
} else {
  resFromPath = path.resolve(__dirname, '../doc/dist');
}

const copy = function (src, dst, copiedCallback) {
  //读取目录
  fs.readdir(src, function (err, paths) {
    if (err) {
      throw err;
    }
    paths.forEach(function (path) {
      var _src = src + '/' + path;
      var _dst = dst + '/' + path;
      var readable;
      var writable;
      stat(_src, function (err, st) {
        if (err) {
          throw err;
        }

        if (st.isFile()) {
          readable = fs.createReadStream(_src); //创建读取流
          writable = fs.createWriteStream(_dst); //创建写入流
          readable.pipe(writable);
        } else if (st.isDirectory()) {
          exists(_src, _dst, copy);
        }
      });
    });
    copiedCallback && copiedCallback();
  });
};

const exists = function (src, dst, callback, copiedCallback) {
  //测试某个路径下文件是否存在
  fs.exists(dst, function (exists) {
    if (exists) {
      //不存在
      callback(src, dst, copiedCallback);
    } else {
      //存在
      fs.mkdir(dst, function () {
        //创建目录
        callback(src, dst, copiedCallback);
      });
    }
  });
};

rm(resToPath, (err) => {
  if (err) throw err;
  console.log(chalk.green('已删除测试资源站旧文件'));
  exists(resFromPath, resToPath, copy, function () {
    console.log(chalk.green('已复制到测试资源站'));
    console.log(chalk.green('线上地址：') + chalk.bold.yellow('http://tstres.360kad.com/kad_design/' + folder));
  });
});
