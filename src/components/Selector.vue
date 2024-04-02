<template>
  <div class="flex text-center">
    <v-select v-model="site" :items="sites"></v-select>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    sites: ['All', 'BaekJoon', 'Leetcode', 'Programmers'],
    site: 'All',
  }),
};
</script>
