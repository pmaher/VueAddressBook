<template>
    <div class="ui container">
        <div class="ui form">
            <h2 class="ui dividing header">Edit Address</h2>
            <div class="two fields">
                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="shipping[first-name]" placeholder="First Name" v-model="editingAddress.firstName">
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="shipping[last-name]" placeholder="Last Name" v-model="editingAddress.lastName">
                </div>
            </div>
            <div class="field">
                <label>Billing Address</label>
                <div class="fields">
                    <div class="twelve wide field">
                        <input type="text" name="shipping[address]" placeholder="Street Address" v-model="editingAddress.address">
                    </div>
                    <div class="four wide field">
                        <input type="text" name="shipping[address-2]" placeholder="Apt #" v-model="editingAddress.address2">
                    </div>
                </div>
            </div>
            <div class="three fields">
                <div class="five wide field">
                    <label>City</label>
                    <input type="text" name="shipping[city]" placeholder="City" v-model="editingAddress.city">
                </div>
                <div class="four wide field">
                    <label>State</label>
                    <select class="ui fluid dropdown" v-model="editingAddress.state">
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
                </div>
                <div class="four wide field">
                    <label>Zip</label>
                    <input type="text" name="shipping[zipcode]" placeholder="Zip" v-model="editingAddress.zipcode">
                </div>
            </div>
            <div class="two fields">
                <div class="six wide field">
                    <label>Email</label>
                    <input type="text" name="shipping[email]" placeholder="Email" v-model="editingAddress.email">
                </div>
                <div class="six wide field">
                    <label>Phone</label>
                    <input type="text" name="shipping[phone]" placeholder="Phone" v-model="editingAddress.phone">
                </div>
            </div>
            <div class="">
                <button class="ui primary button right floated" @click="updateAddress(editingAddress)">Save</button>
                <button class="ui button right floated" @click="cancelEdit">Cancel</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'EditAddress',
    methods: {
        ...mapActions(['fetchAddress', 'updateAddress']),
        cancelEdit() {
            this.$router.push(`/`);
        }
    },
    computed: {
        ...mapGetters(['editingAddress'])
    },
    created() {
        this.fetchAddress(this.$route.params.id);
    },
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