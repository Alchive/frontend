<script setup lang="ts">
import Folder from '../components/BlueFolder.vue';
import FilterBar from '../components/FilterBar.vue';
import Tags from '../components/Tags.vue';
</script>

<template>
  <div class="flex w-90vh h-[800px] flex-col justify-around items-center">
    <FilterBar />
    <Tags />
    <div class="flex flex-col gap-12">
      <div class="flex flex-row gap-[2.5rem]">
        <Folder />
        <Folder />
        <Folder />
        <Folder />
      </div>
      <div class="flex flex-row gap-[2.5rem]">
        <Folder />
        <Folder />
        <Folder />
        <Folder />
      </div>
      <div class="flex flex-row gap-[2.5rem]">
        <Folder />
        <Folder />
        <Folder />
        <Folder />
      </div>
    </div>
  </div>
</template>
