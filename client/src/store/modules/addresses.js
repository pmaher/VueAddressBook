import api from '../../api/addresses';
import { router } from '../../main';

const state = {
    addresses: [],
    filteredAddresses: [],
    filter: '',
    editingAddress: {}
};

const getters = {
    filteredAddresses: state => state.filteredAddresses,
    allAddresses: state => state.addresses,
    editingAddress: state => state.editingAddress
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
        commit('setEditingAddress', response.data);
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
    setEditingAddress: (state, address) => {
        state.editingAddress = address;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}