<template>
    <h1>Hello User, Welcome to the Home Page</h1>
</template>
<router-view />
<script>
/* ✓ GOOD */
export default {
    name: 'homeTest',
    mounted() {

        let user = localStorage.getItem('userInfo');
        if (!user) {
            this.$router.push({ name: 'signUp' })
        }
    }
    // ...
}
</script>