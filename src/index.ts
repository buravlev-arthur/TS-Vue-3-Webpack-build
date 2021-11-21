import * as Vue from 'vue';
import App from './app/index.vue';

// Creating and mounting in DOM <div> with id: '#app'
const app = document.createElement("div");
app.id = "app";

const body = document.querySelector<HTMLElement>("body");
if (body) 
    body.appendChild(app);

// Creating and mounting Vue-application to #app element
Vue.createApp(App).mount('#app');