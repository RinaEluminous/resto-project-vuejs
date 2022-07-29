<template>
  <!-- <img alt="Vue logo" src="./assets/logoYummy.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <SignUp /> -->
  <router-view />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import SignUp from './components/SignUp.vue'


export default {
  name: 'App',

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 100px;
}

.register input,
.login input {
  width: 300px;
  height: 39px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #f9001b;
}

.register button,
.login button {
  width: 325px;
  height: 39px;
  border: 1px solid #f9001b;
  background: #f9001b;
  color: white;
}
</style>
