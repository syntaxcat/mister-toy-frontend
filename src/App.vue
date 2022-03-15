<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/toyApp">Toys</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
    </nav>

  </header>

  <RouterView />
</template>

<style>

</style>
