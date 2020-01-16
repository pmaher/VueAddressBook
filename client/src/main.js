import VueRouter from 'vue-router';
import Vue from 'vue';
import App from './App';
import store from './store';
import AddressList from './components/AddressList';
import EditAddress from './components/EditAddress';

Vue.use(VueRouter);

export const router = new VueRouter({
    //use browser router mode rather than hashrouter
    mode: 'history',
    routes: [
        { path: '/', component: AddressList },
        { path: '/edit/:id', component: EditAddress }
    ]
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});