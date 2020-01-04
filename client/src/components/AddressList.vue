<template>
    <div>
        <SearchBar></SearchBar>
        <div class="ui internally celled grid">
            <div :key="address.id" v-for="address in allAddresses" class="row">
                
                <div class="three wide column">{{ address.firstName }}</div>
                <div class="three wide column">{{ address.lastName }}</div>
                <div class="six wide column">{{ address.email }}</div>
                <div class="four wide column">{{ address.phone }}</div>
                
            </div>
        </div>
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