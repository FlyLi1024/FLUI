import Vue from 'vue';
import App from './App.vue';
import router from './route/index';
const { platform } = require('../config/index');
import DemoBlock from './components/demo-block.vue';
Vue.component(DemoBlock.name, DemoBlock);
Vue.config.productionTip = false;

// 引入组件库
import kadDesign from '../packages/index.js';
Vue.use(kadDesign);
import '../packages/style/index.less';
import './assets/normalize.less';

if (platform === 'm') {
  require('../packages/utils/rem.js');
}

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
