import * as Vue from 'vue';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import App from './app/index.vue';
import store from './app/vuex/index';
import router from './app/router/index';

// Creating and mounting Vue-application to #app element
Vue
  .createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
