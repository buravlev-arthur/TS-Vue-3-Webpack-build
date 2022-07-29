import { createRouter, createWebHashHistory } from 'vue-router';
import testsPage from '../../pages/tests/index.vue';
import aboutPage from '../../pages/about/index.vue';

const routes = [
  { path: '/', component: aboutPage, name: 'aboutPage' },
  { path: '/tests', component: testsPage, name: 'testsPage' },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
