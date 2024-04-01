<template>
  <router-view></router-view>
  <div class="bg-black">
    <button type="button" @click="onClickMovePage">페이지 이동 방식1</button>
  </div>
  <router-link to="/filter">페이지 이동 방식2</router-link>
</template>

<!-- 페이지 이동 방식1 -->
<script lang="ts">
export default {
  methods: {
    onClickMovePage() {
      this.$router.push('/filter');
    },
  },
};
</script>
