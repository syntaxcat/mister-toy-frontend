<template>
    <section class="login-signup-container">
        <h1>Login</h1>
        <form @submit="login" class="login">
            <label for="username">Enter username:</label>
            <input type="text" id="username" v-model="loginCredentials.username">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="loginCredentials.password">
            <button type="submit">Login</button>
        </form>
    </section>
</template>

<script>

import { authService } from "../services/authService.js";

export default {
     data() {
    return {
      loginCredentials: {
        username: "",
        password: "",
      },
    };
  },
    
    methods: {
        login() {
      authService
        .login(this.loginCredentials)
        .then((user) => {
          this.$store.dispatch({type: "updateLoggedInUser", user})
          this.$router.push({ name: 'toyApp' })
        })
        .catch((err) => {
          console.log("Error after login", err);
        });
        },
    },
  
}
</script>

