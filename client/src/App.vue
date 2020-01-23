<template>
    <div class="ui container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>
<style scoped>
.ui.container {
    padding-top: 10px;
}
</style>