const os = require('os');

class Utils {
  /**
   * 获取本机ip地址
   * @static
   * @returns
   * @memberof Util
   */
  static getLocalIp() {
    let _host = '';
    try {
      let network = os.networkInterfaces();
      for (let dev in network) {
        let iface = network[dev];
        for (let i = 0; i < iface.length; i++) {
          let alias = iface[i];
          if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
            _host = alias.address;
          }
        }
      }
    } catch (e) {
      _host = 'localhost';
    }
    return _host;
  }
}
module.exports = Utils;
