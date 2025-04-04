<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import ClientsView from './views/ClientsView.vue';
</script>

<template>
  <VApp id="inspire">
<NavBar/>
    <v-main>
      <ClientsView/>
    </v-main>
    <Footer/>
  </VApp>
</template>

<style scoped>
</style> 