<template>
    <img alt="Vue logo" src="../assets/logoYummy.png" class="logo">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" />
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <input type="password_confirmation" v-model="password_confirmation" placeholder="Confirm Password" />
        <button v-on:click="signUp">SignUp </button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'signUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    methods: {
        async signUp() {
            console.warn("signup", this.name, this.email, this.password);
            let result = await axios.post("http://localhost/laravel/MiniCrm_Project/api/reg", {
                name: this.name,
                password: this.password,
                password_confirmation: this.password_confirmation,
                email: this.email,
            });

            console.warn(result);
            if (result.status == 200) {
                // alert('Record Created Successfullly');
                localStorage.setItem("userInfo", JSON.stringify(result.data))
                this.$router.push({ name: 'Home' })

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

