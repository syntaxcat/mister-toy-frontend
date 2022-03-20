<script>
  import { RouterLink, RouterView } from "vue-router";
  import { userService } from "./services/userService.js";
  import { authService } from "./services/authService.js";

  export default {
    components: {
      RouterLink,
      RouterView,
    },

    created() {
      this.$store.dispatch({
        type: "updateLoggedInUser",
        user: userService.getLoggedinUser() || null,
      });
    },
    methods: {
      logout() {
        authService.logout().then(() => {
          this.$store.dispatch({ type: "updateLoggedInUser", user: null });
          this.$router.push({ name: "login-page" });
        });
      },
    },
    computed: {
      loggedInUser() {
        return this.$store.getters.loggedInUser;
      },
    },
  };
</script>

<template>
  <header class="app-header">
    <span class="logo">🎁ToyStore🧸</span>
    <nav>
      <div v-if="loggedInUser">
        <RouterLink to="/toyApp">Toys</RouterLink>
        |
        <RouterLink to="/dashboard">Dashboard</RouterLink>
        |
        <button @click="logout">logout</button>
      </div>

      <RouterLink v-if="!loggedInUser" to="/login-page">Login</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
