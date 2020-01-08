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
          <input type="text" placeholder="Search..." @input="onInput" />
          <i class="search link icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput: function(event) {
      console.log(event.target.value);
    }
  }
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
