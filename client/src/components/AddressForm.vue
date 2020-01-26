<template>
    <div class="ui container">
        <div class="ui form">
            <h2 class="ui dividing header">Edit Address</h2>
            <div class="two fields">
                <div class="field" :class="$v.address.firstName.$error ? 'form-group--error error' : ''">
                    <label>First Name</label>
                    <input type="text" name="shipping[first-name]" placeholder="First Name" 
                            v-model="address.firstName"
                            @input="$v.address.firstName.$touch();">
                    <div class="ui red pointing prompt label" v-if="$v.address.firstName.$dirty && !$v.address.firstName.required">First name is required.</div>
                </div>
                <div class="field" :class="$v.address.lastName.$error ? 'form-group--error error' : ''">
                    <label>Last Name</label>
                    <input type="text" name="shipping[last-name]" placeholder="Last Name" 
                        v-model="address.lastName"
                        @input="$v.address.lastName.$touch();">
                    <div class="ui red pointing prompt label" v-if="$v.address.lastName.$dirty && !$v.address.lastName.required">Last name is required.</div>
                </div>
            </div>
            <div class="field" :class="$v.address.address.$error ? 'form-group--error error' : ''">
                <label>Address</label>
                <div class="fields" >
                    <div class="twelve wide field">
                        <input type="text" name="shipping[address]" placeholder="Street Address" 
                            v-model="address.address"
                            @input="$v.address.address.$touch();">
                        <div class="ui red pointing prompt label" v-if="$v.address.address.$dirty && !$v.address.address.required">Street address is required.</div>
                    </div>
                    <div class="four wide field address-2">
                        <input type="text" name="shipping[address-2]" placeholder="Apt #" v-model="address.address2">
                    </div>
                </div>
            </div>
            <div class="three fields">
                <div class="five wide field" :class="$v.address.city.$error ? 'form-group--error error' : ''">
                    <label>City</label>
                    <input type="text" name="shipping[city]" placeholder="City" 
                    v-model="address.city"
                    @input="$v.address.city.$touch();">
                    <div class="ui red pointing prompt label" v-if="$v.address.city.$dirty && !$v.address.city.required">City is required.</div>
                </div>
                <div class="four wide field" :class="$v.address.state.$error ? 'form-group--error error' : ''">
                    <label>State</label>
                    <select class="ui fluid dropdown" v-model="address.state"
                        @change="$v.address.state.$touch();">
                        <option value="">State</option>
                        <option v-for="data in $options.stateJson" :key="data.abbreviation" 
                                :value="data.abbreviation">{{data.name}}</option>
                    </select>
                    <div class="ui red pointing prompt label" v-if="$v.address.state.$dirty && !$v.address.state.required">State is required.</div>
                </div>
                <div class="four wide field" :class="$v.address.zipcode.$error ? 'form-group--error error' : ''">
                    <label>Zip</label>
                    <input type="text" name="shipping[zipcode]" placeholder="Zip" 
                        v-model="address.zipcode"
                        @input="$v.address.zipcode.$touch();">
                    <div class="ui red pointing prompt label" v-if="$v.address.zipcode.$dirty && !$v.address.zipcode.required">Zipcode is required.</div>
                    <div class="ui red pointing prompt label" v-if="$v.address.zipcode.$dirty && !$v.address.zipcode.zipcode">You must provide a valid zipcode.</div>
                </div>
            </div>
            <div class="two fields">
                <div class="six wide field" :class="$v.address.email.$error ? 'form-group--error error' : ''">
                    <label>Email</label>
                    <input type="text" name="shipping[email]" placeholder="Email" 
                        v-model="address.email"
                        @input="$v.address.email.$touch();">
                    <div class="ui red pointing prompt label" v-if="$v.address.email.$dirty && !$v.address.email.required">Email is required.</div>
                    <div class="ui red pointing prompt label" v-if="$v.address.email.$dirty && !$v.address.email.email">You must provide a valid email address.</div>
                </div>
                <div class="six wide field" :class="$v.address.phone.$error ? 'form-group--error error' : ''">
                    <label>Phone</label>
                    <TheMask mask="(###) ###-####" v-model="address.phone" type="text" placeholder="(999) 999-9999"></TheMask>
                    <div class="ui red pointing prompt label" v-if="$v.address.phone.$dirty && !$v.address.phone.required">Phone is required.</div>
                    <div class="ui red pointing prompt label" v-if="$v.address.phone.$dirty && !$v.address.phone.minLength">Please enter a valid phone number.</div>
                </div>
            </div>
            <div>
                <button class="ui primary button right floated" :class="$v.$invalid ? 'disabled' : ''" 
                        @click="onSavePressed">Save</button>
                <button class="ui button right floated" @click="cancelEdit">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import { required, email, minLength, between } from "vuelidate/lib/validators";
import { TheMask } from 'vue-the-mask';
import states from './fields/states.json';
import zipcode from './fields/zipcodeValidator'
export default {
    name: 'AddressForm',
    stateJson: states,
    props: ['address'],
    methods: {
        cancelEdit() {
            this.$router.push(`/`);
        },
        onSavePressed() {
            //exit immediately if the form is invalid
            if (this.$v.$invalid) { return; }

            this.$emit('savePressed', this.address);
        }
    },
    validations: {
        address : {
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
.address-2.four.wide.field  {
    margin-top: 15px;
}
@media only screen and (min-width: 768px) {
    .primary.button {
        margin-left: 20px;
    }
    .ui.container {
        padding-top: 5em;
        padding-bottom: 5em;
    }
    .address-2.four.wide.field  {
        margin-top: 0;
    }
}
</style>