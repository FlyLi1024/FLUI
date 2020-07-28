import kadCollapse from './collapse';

kadCollapse.install = function (Vue) {
  Vue.component(kadCollapse.name, kadCollapse);
};

export default kadCollapse;
