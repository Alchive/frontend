<template>
  <div>
    <button type="button" @click="onClickMovePage">페이지 이동 방식1</button>
  </div>
  <router-link to="/filter">페이지 이동 방식2</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
export default {
  methods: {
    onClickMovePage() {
      this.$router.push('/filter');
    },
  },
};
</script>
