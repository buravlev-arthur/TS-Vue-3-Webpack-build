import { createRouter, createWebHashHistory } from 'vue-router'
import testPage from '../../../pages/test/index.vue'

const Home = { template: '<div>Home</div>' }

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/test', component: testPage, name: 'testPage' }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
