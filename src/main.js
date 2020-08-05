import Vue from 'vue';
import App from './App.vue';
import router from './route/index';
import DemoBlock from './components/demo-block.vue';
Vue.component(DemoBlock.name, DemoBlock);
Vue.config.productionTip = false;

// 引入组件库
import FLUI from '../packages/index.js';
Vue.use(FLUI);
import '../packages/style/index.less';
import './assets/normalize.less';

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
