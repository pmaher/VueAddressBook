<template>
    <AddressForm :address="address" @savePressed="updateAddress"></AddressForm>
</template>
<script>
import { required, email, minLength, between } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from 'vuex';
import AddressForm from './AddressForm';
export default {
    name: 'EditAddress',
    methods: mapActions(['fetchAddress', 'updateAddress']),
    computed: {
        ...mapGetters(['address'])
    },
    created() {
        this.fetchAddress(this.$route.params.id);
    },
    components: { 
        AddressForm
    }
}
</script>