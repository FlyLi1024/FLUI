import DropdownMenuItem from './dropdown-menu-item.vue';

DropdownMenuItem.install = function (Vue) {
  Vue.component(DropdownMenuItem.name, DropdownMenuItem);
};

export default DropdownMenuItem;
