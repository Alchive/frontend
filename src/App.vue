<template>
  <div id="app">
    <router-view />
    <!-- <LoginPopUp></LoginPopUp> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import LoginPopUp from './pages/LoginPopUp.vue';

export default defineComponent({
  // components: {
  //   LoginPopUp,
  // },
  name: 'App',
});
</script>

<style></style>
