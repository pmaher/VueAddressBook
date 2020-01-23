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
                <tr v-if="!filteredAddresses.length">
                    <td colspan="6">No addresses found.</td>
                </tr>
                <AddressRow
                    v-for="theAddress in filteredAddresses"
                    :address="theAddress"
                    :key="theAddress.id"
                />
            </tbody>
            <tfoot class="full-width">
                <th colspan="6">
                    <button class="ui right floated small primary labeled icon button" @click="newAddress">
                        <i class="user icon"></i> Add Address
                    </button>    
                </th>
            </tfoot>
        </table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SearchBar from './SearchBar';
import AddressRow from './AddressRow';
export default {
    name: 'AddressList',
    computed: {
        ...mapGetters(['filteredAddresses'])
    },
    methods: {
        ...mapActions(['fetchAddresses']),
        newAddress() {
            this.$router.push(`/new`);
        }
    },
    created() {
        this.fetchAddresses();
    },
    components: {
        SearchBar,
        AddressRow
    }
}
</script>

<style scoped>

</style>