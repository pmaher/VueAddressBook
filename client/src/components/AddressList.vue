<template>
    <div>
        <SearchBar></SearchBar>
        <ul>
            <li :key="address.id" v-for="address in allAddresses">
                address.id
            </li>
        </ul>
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