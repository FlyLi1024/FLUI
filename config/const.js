const path = require('path');

const SRC_PATH = path.resolve(__dirname, '../src');
const PACKAGES_PATH = path.resolve(__dirname, '../packages');
const DIST_PATH = path.resolve(__dirname, '../dist');
const LIB_PATH = path.resolve(__dirname, '../lib');
const TEMPLETE_PATH = path.resolve(__dirname, '../public/index.html');

module.exports = {
  SRC_PATH,
  PACKAGES_PATH,
  DIST_PATH,
  LIB_PATH,
  TEMPLETE_PATH,
};
