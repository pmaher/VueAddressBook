<template>
    <AddressForm :address="address" @savePressed="createAddress"></AddressForm>
</template>
<script>
import { required, email, minLength, between } from "vuelidate/lib/validators";
import { mapActions } from 'vuex';
import AddressForm from './AddressForm';
export default {
    name: 'NewAddress',
    data: function() {
        return {
            address: {
                    firstName: '',
                    lastName: '',
                    address: '',
                    address2: '',
                    city: '',
                    state: '',
                    zipcode: '',
                    email: '',
                    phone: ''
                }
        };
    },
    methods: {
        ...mapActions(['createAddress']),
        cancelEdit() {
            this.$router.push(`/`);
        }
    },
    components: { 
        AddressForm
    }
}
</script>