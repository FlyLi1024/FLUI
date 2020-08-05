import { version } from '../package.json';
const requireAll = (context) => context.keys().map(context);
const ComponetList = require.context('../packages/components', true, /.vue$/);
import Toast from './components/toast';
const install = (Vue) => {
  if (install.installed) {
    return;
  }
  requireAll(ComponetList).forEach((component) => {
    Vue.component(component.default.name, component.default);
  });
  Vue.prototype.$ltoast = Toast;
  Vue.prototype.$loadingStart = Toast.loadingStart;
  Vue.prototype.$loadingEnd = Toast.loadingEnd;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const modules = {};
ComponetList.keys().forEach((component) => {
  modules[component] = ComponetList(component).default;
});
export default {
  version,
  install,
  ...Object.values(modules)
};
