<template>
  <div class="ui menu">
    <div class="header item">
      Address Book
    </div>
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

<style scoped></style>
