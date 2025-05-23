import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import About from './components/About.vue'
import Gujarat from './components/TourismPlace/Gujarat.vue'
import Himachal from './components/TourismPlace/Himachal.vue'
import Kashmir from './components/TourismPlace/Kashmir.vue'
import Kerala from './components/TourismPlace/Kerala.vue'
import Rajasthan from './components/TourismPlace/Rajasthan.vue'

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/gujarat',
        name: 'Gujarat',
        component: ()=> import('./components/TourismPlace/Gujarat.vue')
    },
     {
        path: '/rajasthan',
        name: 'Rajasthan',
         component: ()=> import('./components/TourismPlace/Rajasthan.vue')
    },
    {
        path: '/himachal',
        name: 'Himachal',
         component: ()=> import('./components/TourismPlace/Himachal.vue')
    },
    {
        path: '/kashmir',
        name: 'Kashmir',
         component: ()=> import('./components/TourismPlace/Kashmir.vue')
    },
        {
        path: '/kerala',
        name: 'Kerala',
        component: ()=> import('./components/TourismPlace/Kerala.vue')
    },

    ]
})


app.use(router);

app.mount('#app');

