import api from '../../api/addresses';

const state = {
    addresses: []
};

const getters = {
    allAddresses: state => state.addresses    
};

const actions = {
    async fetchAddresses({rootState, commit}) {
        const response = await api.fetchAddresses();
        debugger;
        commit('setAddresses', response.data);
    }
};

const mutations = {
    setAddresses: (state, addresses) => {
        state.addresses = addresses;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}