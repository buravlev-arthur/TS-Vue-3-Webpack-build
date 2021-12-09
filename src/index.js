import * as Vue from 'vue';
import App from './app/index.vue';
import store from './app/providers/vuex';
import router from './app/providers/router';
import 'bootstrap-icons/font/bootstrap-icons.scss';

// Creating and mounting Vue-application to #app element
Vue.createApp(App).use(store).use(router).mount('#app');
