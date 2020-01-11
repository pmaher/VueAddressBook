<template>
  <div class="ui menu">
    <h2 class="ui header">
      <i class="users icon"></i>
      <div class="content">
        My Address Book
      </div>
    </h2>
    <div class="right menu">
      <div class="item">
        <div class="ui transparent icon input">
          <input type="text" placeholder="Search..." @input="filterAddresses($event.target.value)" />
          <i class="search link icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: "SearchBar",
  methods: mapMutations(['filterAddresses'])
};
</script>

<style scoped>
.ui.header {
    margin-left: 10px;
    margin-bottom: 0;
}
.users.icon, .header .content {
    vertical-align: bottom;
}
</style>
