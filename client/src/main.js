import VueRouter from 'vue-router';
import Vue from 'vue';
import App from './App';
import store from './store';
import AddressList from './components/AddressList';
import EditAddress from './components/EditAddress';
import Vuelidate from "vuelidate";

Vue.use(VueRouter);
Vue.use(Vuelidate);

export const router = new VueRouter({
    //use browser router mode rather than hashrouter
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: AddressList },
        { path: '/edit/:id', name: 'editAddress', component: EditAddress }
    ]
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});