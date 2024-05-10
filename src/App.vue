<template>
  <!-- <PopUp></PopUp> -->
  <router-view></router-view>
  <LoginPopUp></LoginPopUp>
  <!-- <div>
    <button type="button" @click="onClickMovePage">페이지 이동 방식1</button>
  </div>
  <router-link to="/main">페이지 이동 방식2</router-link> -->
</template>

<script lang="ts">
// import PopUp from './pages/PopUp.vue';
import { defineComponent } from 'vue';
import LoginPopUp from './pages/LoginPopUp.vue';

export default defineComponent({
  components: {
    LoginPopUp,
  },
});
</script>
<!-- <script lang="ts">
export default {
  methods: {
    onClickMovePage() {
      this.$router.push('/main');
    },
  },
};
</script> -->

<style></style>
