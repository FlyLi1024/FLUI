import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const { Components } = require('../module');
const DemoList = Components.map((item) => {
  return item.list.map((sitem) => {
    return sitem.component;
  });
});

const DemoRouter = [].concat.apply([], DemoList).map((item) => {
  return {
    path: '/demo/' + item,
    name: item,
    component: () => import(`@/views/${item}-demo.vue`)
  };
});

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/main.vue')
    },
    {
      path: '/demo/',
      name: 'demo',
      redirect: '/',
      component: () => import('@/views/index-demo.vue'),
      children: [...DemoRouter]
    }
  ]
});
