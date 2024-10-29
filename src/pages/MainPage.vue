<script setup lang="ts">
import Folder from '../components/BlueFolder.vue';
import FilterBar from '../components/FilterBar.vue';
import Navbar from '../components/Navbar.vue';
import Tags from '../components/Tags.vue';
import { ref } from 'vue';

const filteredData = ref([]);
const filterBarRef = ref<InstanceType<typeof FilterBar> | null>(null); // FilterBar의 타입 지정

const updateFilteredData = (data: any) => {
  filteredData.value = data;
};

// Tags에서 선택된 태그를 FilterBar로 전달하여 추가 필터링
const sendSelectedTag = (tag:string) => {
  if (filterBarRef.value) {
    filterBarRef.value.updateSelectedTag(tag);
  }
};

</script>

<template>
  <div class="flex w-90vh h-[800px] flex-col gap-4 items-center">
    <Navbar />
    <FilterBar ref="filterBarRef" @update-data="updateFilteredData" />
    <Tags @select-tag="sendSelectedTag" />
    <div class="flex flex-col gap-12 w-[1350px]">
      <div class="flex flex-wrap justify-left gap-[3rem] px-[5rem]">
        <Folder :problems="filteredData" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
