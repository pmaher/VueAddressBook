//const ROOT_URL = 'http://localhost:8080';
import axios from 'axios';

export default {
    fetchAddresses() {
        return axios.get(`/api/address`);
    },
    deleteAddress(id) {
        return axios.delete(`/api/address/${id}`);
    },
    fetchAddress(id) {
        return axios.get(`/api/address/${id}`);
    }
}