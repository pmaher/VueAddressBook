import api from '../../api/addresses';
import { router } from '../../main';

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
    async fetchAddresses({commit}) {
        const response = await api.fetchAddresses();
        commit('setAddresses', response.data);
    },
    async deleteAddress(context, id) {
        await api.deleteAddress(id);
        //refresh current page
        router.go();
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