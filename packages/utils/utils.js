export default class Utils {
  /**
   * css transform操作
   * @param {any} el dom节点
   * @param {string} attr 属性
   * @param {string | number} value 值
   */
  static cssTransform(el, attr, value) {
    if (!el.transform) {
      el.transform = {};
    }

    if (arguments.length > 2) {
      el.transform[attr] = value;
      var sVal = '';
      for (const key in el.transform) {
        switch (key) {
          case 'rotate':
          case 'skewX':
          case 'skewY':
            sVal += key + '(' + el.transform[key] + 'deg) ';
            break;
          case 'translateX':
          case 'translateY':
            sVal += key + '(' + el.transform[key] + 'px) ';
            break;
          case 'scaleX':
          case 'scaleY':
          case 'scale':
            sVal += key + '(' + el.transform[key] + ') ';
            break;
        }
        el.style.WebkitTransform = el.style.transform = sVal;
      }
    } else {
      value = el.transform[attr];
      if (typeof value == 'undefined') {
        if (attr == 'scale' || attr == 'scaleX' || attr == 'scaleY') {
          value = 1;
        } else {
          value = 0;
        }
      }
      return value;
    }
  }
}
