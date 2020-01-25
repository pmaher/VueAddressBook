import api from '../../api/addresses';
import { router } from '../../main';

const state = {
    addresses: [],
    filteredAddresses: [],
    filter: '',
    address: {}
};

const getters = {
    filteredAddresses: state => state.filteredAddresses,
    allAddresses: state => state.addresses,
    address: state => state.address
};

const actions = {
    async fetchAddresses({commit}) {
        const response = await api.fetchAddresses();
        commit('setAddresses', response.data);
    },
    async deleteAddress(context, id) {
        await api.deleteAddress(id);
        //refresh current page
        router.go();
    },
    async fetchAddress({commit}, id) {
        const response = await api.fetchAddress(id);
        commit('setAddress', response.data);
    },
    async updateAddress(context, address) {
        await api.updateAddress(address);
        router.push({ name: 'home' });
    },
    async createAddress(context, address) {
        await api.createAddress(address);
        router.push({name: 'home'});
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
    },
    setAddress: (state, address) => {
        state.address = address;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}