const { platform, folder } = require('./config.json');

module.exports = {
  platform,
  folder,
  rootValue: platform === 'pc' ? 32 : 100 // 32(pc端) | 100(移动端)
};
