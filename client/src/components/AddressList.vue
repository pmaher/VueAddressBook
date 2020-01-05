<template>
    <div>
        <SearchBar></SearchBar>
        <table class="ui celled structured table">
            <thead>
                <tr>
                    <th>First</th>
                    <th>Last</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th colspan="2"></th>
                </tr>
            </thead>
            <tbody>
                <tr :key="address.id" v-for="address in allAddresses">
                    <td>{{ address.firstName }}</td>
                    <td>{{ address.lastName }}</td>
                    <td>{{ address.email }}</td>
                    <td>{{ address.phone }}</td>
                    <td></td>
                    <td></td>    
                </tr>
            </tbody>
            <tfoot class="full-width">
                <th colspan="6">
                    <div class="ui right floated small primary labeled icon button">
                        <i class="user icon"></i> Add Address
                    </div>    
                </th>
            </tfoot>
        </table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import SearchBar from './SearchBar';
export default {
    name: 'AddressList',
    computed: mapGetters(['allAddresses']),
    methods: mapActions(['fetchAddresses']),
    created() {
        this.fetchAddresses();
    },
    components: {
        SearchBar
    }
}
</script>

<style scoped>

</style>