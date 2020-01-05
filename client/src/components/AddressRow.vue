<template>
    <tr>
        <td>{{ address.firstName }}</td>
        <td>{{ address.lastName }}</td>
        <td>{{ address.email }}</td>
        <td>{{ address.phone }}</td>
        <td></td>
        <td></td>    
    </tr>
</template>
<script>
export default {
    name: 'AddressRow',
    props: ['address']
}
</script>