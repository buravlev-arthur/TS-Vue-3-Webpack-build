import * as Vue from 'vue';
import App from './app/index.vue';
import store from './app/providers/vuex/index';
import router from './app/providers/router/index';

// Creating and mounting in DOM <div> with id: '#app'
const app = document.createElement("div");
app.id = "app";

const body = document.querySelector("body");
body ? body.appendChild(app) : false;

// Creating and mounting Vue-application to #app element
Vue.createApp(App).use(store).use(router).mount('#app');