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
                <label>Billing Address</label>
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
                    <div class="ui red pointing prompt label" v-if="!$v.editingAddress.city.required">Street address is required.</div>
                </div>
                <div class="four wide field" :class="$v.editingAddress.state.$error ? 'form-group--error error' : ''">
                    <label>State</label>
                    <select class="ui fluid dropdown" v-model="editingAddress.state"
                        @change="$v.editingAddress.state.$touch();">
                        <option value="">State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
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
                <button class="ui primary button right floated" @click="validateAndSubmit(editingAddress)">Save</button>
                <button class="ui button right floated" @click="cancelEdit">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
import { required, email, minLength, between } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from 'vuex';
import { TheMask } from 'vue-the-mask';
const zipcode = (value) => {
    if (!value) return true;
    const regex = /^\d{5}(?:[-\s]\d{4})?$/;
    return regex.test(value);
}
export default {
    name: 'EditAddress',
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