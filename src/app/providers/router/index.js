import { createRouter, createWebHashHistory } from 'vue-router';
import mainPage from '../../../pages/main/index.vue';
import authPage from '../../../pages/auth/index.vue';

const routes = [
  { path: '/', component: mainPage, name: 'mainPage' },
  { path: '/auth', component: authPage, name: 'authPage' },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
