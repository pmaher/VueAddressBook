import VueRouter from 'vue-router';
import Vue from 'vue';
import App from './App';
import AddressList from './components/AddressList';
Vue.use(VueRouter);

export const router = new VueRouter({
    //use browser router mode rather than hashrouter
    mode: 'history',
    routes: [
        { path: '/', component: AddressList }
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});