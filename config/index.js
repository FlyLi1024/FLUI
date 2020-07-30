const { platform, folder } = require('./config.json');

module.exports = {
  platform,
  folder,
  rootValue: 32 // 32(pc端) | 100(移动端)
};
