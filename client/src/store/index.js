import Vuex from 'vuex';
import Vue from 'vue';
import addresses from './modules/addresses.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        addresses
    }
});