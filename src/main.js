import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'
import DestinationShow from './components/DestinationShow.vue';
import Page404 from './components/PageNotFound/Page404.vue';


const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path:'/destination/:Destinationid',
        name:'destination.show',
        component: DestinationShow,
        props: true
    },
    {
        path:'/destionation/:NOtMatch(.*)',
        component:Page404
    }
    
    ]
})


app.use(router);

app.mount('#app');

