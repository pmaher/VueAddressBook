<template>
    <form class="ui form">
        <div>Editing Address:{{ $route.params.id }}</div>
        <div>{{ editingAddress.firstName }}</div>
         <h4 class="ui dividing header">Edit Address</h4>
        <div class="field">
            <label>Name</label>
            <div class="two fields">
                <div class="field">
                    <input type="text" name="shipping[first-name]" placeholder="First Name" :value="editingAddress.firstName">
                </div>
                <div class="field">
                    <input type="text" name="shipping[last-name]" placeholder="Last Name" :value="editingAddress.lastName">
                </div>
            </div>
        </div>
        <div class="field">
            <label>Billing Address</label>
            <div class="fields">
                <div class="twelve wide field">
                    <input type="text" name="shipping[address]" placeholder="Street Address" :value="editingAddress.address">
                </div>
                <div class="four wide field">
                    <input type="text" name="shipping[address-2]" placeholder="Apt #" :value="editingAddress.address2">
                </div>
            </div>
        </div>
        <div class="two fields">
            <div class="field">
                <label>State</label>
                <select class="ui fluid dropdown" :value="editingAddress.state">
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
            <label>State</label>
            <div class="four wide field">
                <input type="text" name="shipping[zipcode]" placeholder="Zip" :value="editingAddress.zipcode">
            </div>
        </div>
        
        <div class="ui button" tabindex="0">Save</div>
        </form>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'EditAddress',
    methods: mapActions(['fetchAddress']),
    computed: {
        ...mapGetters(['editingAddress'])
    },
    created() {
        this.fetchAddress(this.$route.params.id);
    },
}
</script>
<style scoped>

</style>