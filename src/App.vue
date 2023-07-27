<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppLayoutes/AppHeader.vue'
import AppFooter from './components/AppLayoutes/AppFooter.vue';

</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter/>
</template>

<style scoped>

</style>
