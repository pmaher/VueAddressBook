import api from '../../api/addresses';

const state = {
    addresses: [],
    filteredAddresses: [],
    filter: ''
};

const getters = {
    filteredAddresses: state => state.filteredAddresses,
    allAddresses: state => state.addresses
};

const actions = {
    async fetchAddresses({rootState, commit}) {
        const response = await api.fetchAddresses();
        commit('setAddresses', response.data);
    }
};

const mutations = {
    filterAddresses: (state, filter) => {
        const filteredList = state.addresses.filter(address => {
            return address.firstName.toLowerCase().includes(filter.toLowerCase()) ||
                address.lastName.toLowerCase().includes(filter.toLowerCase()) ||
                address.email.toLowerCase().includes(filter.toLowerCase()) ||
                address.phone.toLowerCase().includes(filter.toLowerCase());
        });
        state.filteredAddresses = filteredList;
    },
    setAddresses: (state, addresses) => {
        state.filteredAddresses = addresses;
        state.addresses = addresses;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}