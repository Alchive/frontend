<script setup lang="ts">
import Folder from '../components/BlueFolder.vue';
import FilterBar from '../components/FilterBar.vue';
import Navbar from '../components/Navbar.vue';
import Tags from '../components/Tags.vue';
</script>

<template>
  <div class="flex w-90vh h-[800px] flex-col gap-4 items-center">
    <Navbar />
    <FilterBar />
    <Tags />
    <div class="flex flex-col gap-12">
      <!-- <div class="flex flex-row gap-[2.5rem]"> -->
      <div class="flex flex-wrap justify-center gap-[2.5rem] px-[20px]">
        <Folder />
      </div>
    </div>
  </div>
</template>
