<template>
    <tr>
        <td>{{ address.firstName }}</td>
        <td>{{ address.lastName }}</td>
        <td>{{ address.email }}</td>
        <td>{{ address.phone }}</td>
        <td class="action">
            <button class="ui icon button">
                <i class="edit icon"></i>
            </button>
        </td>
        <td class="action">
            <button class="ui icon button">
                <i class="trash icon"></i>
            </button>
        </td>
    </tr>
</template>
<script>
export default {
    name: 'AddressRow',
    props: ['address']
}
</script>
<style scoped>
td.action {
    text-align: center;
}
.action .icon {
    margin: 0;
}
</style>