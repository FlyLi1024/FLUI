import Vue from 'vue';
import Doc from './Doc.vue';
import router from './route/index';
import Prism from 'prismjs';
import DocBlock from './components/doc-block.vue';
import kadDesign from '../packages/index';
import '../packages/style/index.less';
import '../src/assets/normalize.less';

Vue.use(kadDesign);
Vue.component(DocBlock.name, DocBlock);
Vue.config.productionTip = false;

router.afterEach((route) => {
  Vue.nextTick(() => {
    Prism.highlightAll();
  });
});
new Vue({
  router,
  render: (h) => h(Doc),
}).$mount('#app');
