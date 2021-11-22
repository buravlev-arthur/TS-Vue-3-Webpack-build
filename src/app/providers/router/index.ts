import {createRouter, createWebHashHistory} from 'vue-router';
import name_page from '../../component.vue';

const Home = {template: `<div>Home</div>`};

const routes: any = [
    {path: '/', component: Home, name: 'Home'},
    {path: '/name', component: name_page, name: 'Name'}
];

export default createRouter({
    history: createWebHashHistory(),
    routes
});