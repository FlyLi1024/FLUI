import Toast from './toast.js';

Toast.install = function (Vue) {
  Vue.component(Toast.name, Toast);
  Vue.prototype.$ltoast = Toast;
  Vue.prototype.$loadingStart = Toast.loadingStart;
  Vue.prototype.$loadingEnd = Toast.loadingEnd;
};

export default Toast;
