<template>
    <div>
        <SearchBar></SearchBar>
        List of addresses
    </div>
</template>

<script>
import SearchBar from './SearchBar';
export default {
    name: 'AddressList',
    created() {
        console.log('this is where we make the fetch addresses ajax call');
    },
    components: {
        SearchBar
    }
}
</script>

<style scoped>

</style>