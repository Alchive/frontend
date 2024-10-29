<script setup lang="ts">
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['select-tag']);
const selectedTag = ref(null);

const tags = ['이분탐색', 'DP', 'BFS/DFS', '브루트포스', '그리디', '정렬', '구현', '그래프'];

const handleTagClick = (tag: any) => {
  selectedTag.value = tag;
  emit('select-tag', tag);
};
</script>

<template>
  <div class="flex w-[1200px] justify-center flex-row gap-10 my-[2.5rem]">
    <div
      @click="handleTagClick('')"
      class="rounded-[10px] bg-[#FFFFFF] shadow-[0px_0px_3px_rgba(0,0,0,0.25)] flex justify-center p-[0.25rem_1.2rem] font-semibold text-[14px] border-solid border-2 border-transparent cursor-pointer hover:bg-gray-100 hover:text-[#004AB9]"
    >
      <span class="font-semibold text-[14px] text-[#000000]"> 초기화 </span>
    </div>
    <div class="flex items-center justify-center">
      <img src="../assets/mainpage/left.svg" class="w-[10px]" />
    </div>
    <div
      v-for="tag in tags"
      :key="tag"
      @click="handleTagClick(tag)"
      class="rounded-[10px] bg-[#FFFFFF] shadow-[0px_0px_3px_rgba(0,0,0,0.25)] flex justify-center p-[0.25rem_1.2rem] font-semibold text-[14px] cursor-pointer hover:bg-gray-100 hover:text-[#004AB9]"
      :class="{
      'text-[#004AB9] shadow-[0px_0px_2px_#004AB9] border-solid border-2 border-[#5598fc]': tag === selectedTag,
      'border-solid border-2 border-transparent': tag !== selectedTag
      }">
      {{ tag }}
    </div>
    <div class="flex items-center justify-center">
      <img src="../assets/mainpage/right.svg" class="w-[10px]" />
    </div>
  </div>
</template>
