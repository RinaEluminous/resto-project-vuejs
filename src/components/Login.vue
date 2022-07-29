<template>
    <img alt="Vue logo" src="../assets/logoYummy.png" class="logo">
    <h1>Login</h1>
    <div class="login">

        <form>
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <input type="password_confirmation" v-model="password_confirmation" placeholder="Confirm Password" />
            <button v-on:click="login">Login </button>
            <p>
                <router-link to="/signUp">Sign Up</router-link>
            </p>
        </form>

    </div>
</template>
<router-view />
<script>
/* ✓ GOOD */
import axios from 'axios'
export default {
    name: 'loginPage',
    data() {
        return {
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods: {
        async login() {
            // console.warn(this.email, this.password)

            let result = await axios.post("http://localhost/laravel/MiniCrm_Project/api/login", {

                password: this.password,
                password_confirmation: this.password_confirmation,
                email: this.email,
            });

            console.warn(result);
            if (result.status == 200 && result.data.length > 0) {
                // alert('Record Created Successfullly');
                localStorage.setItem("userInfo", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'Home' })

            } else {
                this.$router.push({ name: 'login' })
            }
        }
    },
    mounted() {

        let user = localStorage.getItem('userInfo');
        if (user) {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>