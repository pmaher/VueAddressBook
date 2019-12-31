<template>
    <div>
        <SearchBar></SearchBar>
        List of addresses
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
        console.log('this is where we make the fetch addresses ajax call');
        //this.fetchAddresses();
    },
    components: {
        SearchBar
    }
}
</script>

<style scoped>

</style>