<template>
    <div class="ui container">
        <div class="ui form">
            <h2 class="ui dividing header">Edit Address</h2>
            <div class="two fields">
                <div class="field" :class="$v.editingAddress.firstName.$error ? 'form-group--error error' : ''">
                    <label>First Name</label>
                    <input type="text" name="shipping[first-name]" placeholder="First Name" 
                            v-model="editingAddress.firstName"
                            @input="$v.editingAddress.firstName.$touch();">
                    <div class="ui red pointing prompt label" v-if="!$v.editingAddress.firstName.required">First name is required.</div>
                </div>
                <div class="field" :class="$v.editingAddress.lastName.$error ? 'form-group--error error' : ''">
                    <label>Last Name</label>
                    <input type="text" name="shipping[last-name]" placeholder="Last Name" 
                        v-model="editingAddress.lastName"
                        @input="$v.editingAddress.lastName.$touch();">
                    <div class="ui red pointing prompt label" v-if="!$v.editingAddress.lastName.required">Last name is required.</div>
                </div>
            </div>
            <div class="field" :class="$v.editingAddress.address.$error ? 'form-group--error error' : ''">
                <label>Address</label>
                <div class="fields" >
                    <div class="twelve wide field">
                        <input type="text" name="shipping[address]" placeholder="Street Address" 
                            v-model="editingAddress.address"
                            @input="$v.editingAddress.address.$touch();">
                        <div class="ui red pointing prompt label" v-if="!$v.editingAddress.address.required">Street address is required.</div>
                    </div>
                    <div class="four wide field">
                        <input type="text" name="shipping[address-2]" placeholder="Apt #" v-model="editingAddress.address2">
                    </div>
                </div>
            </div>
            <div class="three fields">
                <div class="five wide field" :class="$v.editingAddress.city.$error ? 'form-group--error error' : ''">
                    <label>City</label>
                    <input type="text" name="shipping[city]" placeholder="City" 
                    v-model="editingAddress.city"
                    @input="$v.editingAddress.city.$touch();">
                    <div class="ui red pointing prompt label" v-if="!$v.editingAddress.city.required">City is required.</div>
                </div>
                <div class="four wide field" :class="$v.editingAddress.state.$error ? 'form-group--error error' : ''">
                    <label>State</label>
                    <select class="ui fluid dropdown" v-model="editingAddress.state"
                        @change="$v.editingAddress.state.$touch();">
                        <option value="">State</option>
                        <option v-for="data in $options.stateJson" :key="data.abbreviation" 
                                :value="data.abbreviation">{{data.name}}</option>
                    </select>
                    <div class="ui red pointing prompt label" v-if="!$v.editingAddress.state.required">State is required.</div>
                </div>
                <div class="four wide field" :class="$v.editingAddress.zipcode.$error ? 'form-group--error error' : ''">
                    <label>Zip</label>
                    <input type="text" name="shipping[zipcode]" placeholder="Zip" 
                        v-model="editingAddress.zipcode"
                        @input="$v.editingAddress.zipcode.$touch();">
                    <div class="ui red pointing prompt label" v-if="!$v.editingAddress.zipcode.required">Zipcode is required.</div>
                    <div class="ui red pointing prompt label" v-if="!$v.editingAddress.zipcode.zipcode">You must provide a valid zipcode.</div>
                </div>
            </div>
            <div class="two fields">
                <div class="six wide field" :class="$v.editingAddress.email.$error ? 'form-group--error error' : ''">
                    <label>Email</label>
                    <input type="text" name="shipping[email]" placeholder="Email" 
                        v-model="editingAddress.email"
                        @input="$v.editingAddress.email.$touch();">
                    <div class="ui red pointing prompt label" v-if="!$v.editingAddress.email.required">Email is required.</div>
                    <div class="ui red pointing prompt label" v-if="!$v.editingAddress.email.email">You must provide a valid email address.</div>
                </div>
                <div class="six wide field" :class="$v.editingAddress.phone.$error ? 'form-group--error error' : ''">
                    <label>Phone</label>
                    <TheMask mask="(###) ###-####" v-model="editingAddress.phone" type="text" placeholder="(999) 999-9999"></TheMask>
                    <div class="ui red pointing prompt label" v-if="!$v.editingAddress.phone.required">Phone is required.</div>
                    <div class="ui red pointing prompt label" v-if="!$v.editingAddress.phone.minLength">Please enter a valid phone number.</div>
                </div>
            </div>
            <div>
                <button class="ui primary button right floated" :class="$v.$invalid ? 'disabled' : ''" 
                        @click="validateAndSubmit(editingAddress)">Save</button>
                <button class="ui button right floated" @click="cancelEdit">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
import { required, email, minLength, between } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from 'vuex';
import { TheMask } from 'vue-the-mask';
import states from './states/states.json';
const zipcode = (value) => {
    if (!value) return true;
    const regex = /^\d{5}(?:[-\s]\d{4})?$/;
    return regex.test(value);
}
export default {
    name: 'EditAddress',
    stateJson: states,
    methods: {
        ...mapActions(['fetchAddress', 'updateAddress']),
        cancelEdit() {
            this.$router.push(`/`);
        },
        validateAndSubmit(address) {
            //exit immediately if the form is invalid
            if (this.$v.$invalid) { return; }

            this.updateAddress(address);
        }
    },
    computed: {
        ...mapGetters(['editingAddress'])
    },
    created() {
        this.fetchAddress(this.$route.params.id);
    },
    validations: {
        editingAddress : {
            firstName: { required },
            lastName: { required },
            address: { required },
            city: { required },
            state: { required },
            zipcode: {
                required,
                zipcode
            },
            email: {
                required,
                email
            },
            phone: {
                required,
                minLength: minLength(10)
            },
        },
    },
    components: { 
        TheMask 
    }
}
</script>
<style scoped>
.primary.button {
    margin-left: 20px;
}
.ui.container {
    padding-top: 5em;
    padding-bottom: 5em;
}
</style>