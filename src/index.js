import * as Vue from 'vue'
import App from './app/index.vue'
import store from './app/providers/vuex/index.js'
import router from './app/providers/router/index.js'

// Creating and mounting Vue-application to #app element
Vue.createApp(App).use(store).use(router).mount('#app')
