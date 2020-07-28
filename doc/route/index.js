import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Not from '@doc/components/404.vue';
import Changelog from '@doc/guide/changelog.md';
import Quickstart from '@doc/guide/quickstart.md';
import Introduction from '@doc/guide/introduction.md';
const { Components } = require('@/module');
const DemoList = Components.map((item) => {
  return item.list.map((sitem) => {
    return sitem.component;
  });
});
const DemoRouter = [].concat.apply([], DemoList).map((item) => {
  return {
    path: '/' + item,
    name: item,
    component: () => import(`@doc/guide/${item}.md`),
  };
});

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'Not',
      component: Not,
    },
    {
      path: '/',
      name: 'introduction',
      component: Introduction,
    },
    {
      path: '/quickstart',
      name: 'quickstart',
      component: Quickstart,
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: Changelog,
    },
    ...DemoRouter,
  ],
});
