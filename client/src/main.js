import VueRouter from 'vue-router';
import Vue from 'vue';
import App from './App';
import store from './store';
import AddressList from './components/AddressList';

Vue.use(VueRouter);

export const router = new VueRouter({
    //use browser router mode rather than hashrouter
    mode: 'history',
    routes: [
        { path: '/', component: AddressList }
    ]
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});