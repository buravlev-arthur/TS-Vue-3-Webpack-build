import { createRouter, createWebHashHistory } from 'vue-router'
import NamePage from '../../component.vue'

const Home = { template: '<div>Home</div>' }

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/name', component: NamePage, name: 'Name' }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
