<template>
    <tr>
        <td>{{ address.firstName }}</td>
        <td>{{ address.lastName }}</td>
        <td>{{ address.email }}</td>
        <td>{{ formattedPhone }}</td>
        <td class="action">
            <button class="ui icon button">
                <i class="edit icon"></i>
            </button>
        </td>
        <td class="action">
            <button class="ui icon button" @click="deleteAddress(address.id)">
                <i class="trash icon"></i>
            </button>
        </td>
    </tr>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'AddressRow',
    props: ['address'],
    methods: mapActions(['deleteAddress']),
    computed: {
        formattedPhone() {
            return this.address.phone.replace(/(\d{1,3})(\d{1,3})(\d{1,4})/g, '($1) $2-$3')
        }
    }
}
</script>
<style scoped>
td.action {
    text-align: center;
}
.action .icon {
    margin: 0;
}
</style>