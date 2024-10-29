<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { defineEmits } from 'vue';

const emit = defineEmits(['update-data']);
const selectedTab = ref('전체');
const selectedPlatform = ref('ALL');
const selectedTag = ref(null);

const dropdownOpen = ref(false);
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

interface Problem {
  problemId: number;
  problemDifficulty: string;
  problemTitle: string;
  problemState: string;
  platform: string;
  problemAlgorithms: string[];
}
const problems = ref<Problem[]>([]);
const filteredProblems = ref<Problem[]>([]); // 필터링된 데이터를 저장하는 상태

const problemAPI = async (offset = 0, limit = 15) => {
  try {
    const response = await axios.get('http://localhost:8080/api/v1/boards', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      params: { offset, limit },
    });
    console.log('전체 목록 조회 성공', response.data.data.content[0]);

    const contentArray = response.data.data.content.flat();
    problems.value = contentArray.map((item: any) => ({
      problemId: item.problem.id,
      problemDifficulty: item.problem.difficulty,
      problemTitle: item.problem.title,
      problemState:
        item.board.status === 'CORRECT'
          ? '맞았습니다'
          : item.board.status === 'INCORRECT'
            ? '틀렸습니다'
            : '미제출',
      platform: item.problem.platform,
      problemAlgorithms: item.problem.algorithms,
    }));

    filterProblems();
  } catch (error) {
    console.error('전체 목록 조회 실패', error);
  }
};

const handleTabClick = (tab: string) => {
  selectedTab.value = tab;
  filterProblems();
};

const handlePlatformClick = (platform: string) => {
  selectedPlatform.value = platform;
  dropdownOpen.value = false;
  filterProblems();
};

const updateSelectedTag = (tag: any) => {
  selectedTag.value = tag;
  filterProblems();
};
// `handleTagSelection` 메서드를 외부에서 접근할 수 있도록 노출
defineExpose({
  updateSelectedTag,
});

const filterProblems = () => {
  filteredProblems.value = problems.value.filter((item) => {
    const tabFilter =
      selectedTab.value === '전체' ||
      (selectedTab.value === '맞았습니다' && item.problemState === 'CORRECT') ||
      (selectedTab.value === '틀렸습니다' && item.problemState === 'INCORRECT') ||
      (selectedTab.value === '미제출' && item.problemState === 'NOT_SUBMITTED') ||
      (selectedTab.value === '풀이완료' && item.problemState === 'COMPLETED');

    const platformFilter = selectedPlatform.value === 'ALL' || item.platform === selectedPlatform.value;
    const tagFilter = !selectedTag.value || item.problemAlgorithms.includes(selectedTag.value);

    return tabFilter && platformFilter && tagFilter;
  });

  emit('update-data', filteredProblems.value);
};

onMounted(() => {
  problemAPI();
});
</script>

<template>
  <div class="flex flex-row justify-between w-[1340px] border-b border-gray-200 z-20">
    <div class="font-medium text-center text-gray-500">
      <ul class="flex flex-wrap -mb-px">
        <!-- 각 탭 클릭 이벤트와 동적 클래스 바인딩 설정 -->
        <li class="me-2" @click="handleTabClick('전체')">
          <a
            href="#"
            :class="[
              'inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300',
              selectedTab === '전체' ? 'text-[#004AB9] border-[#004AB9]' : 'border-transparent'
            ]"
          >전체</a>
        </li>
        <li class="me-2" @click="handleTabClick('맞았습니다')">
          <a
            href="#"
            :class="[
              'inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300',
              selectedTab === '맞았습니다' ? 'text-[#004AB9] border-[#004AB9]' : 'border-transparent'
            ]"
          >맞았습니다</a>
        </li>
        <li class="me-2" @click="handleTabClick('틀렸습니다')">
          <a
            href="#"
            :class="[
              'inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300',
              selectedTab === '틀렸습니다' ? 'text-[#004AB9] border-[#004AB9]' : 'border-transparent'
            ]"
          >틀렸습니다</a>
        </li>
        <li class="me-2" @click="handleTabClick('미제출')">
          <a
            href="#"
            :class="[
              'inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300',
              selectedTab === '미제출' ? 'text-[#004AB9] border-[#004AB9]' : 'border-transparent'
            ]"
          >미제출</a>
        </li>
        <li class="me-2" @click="handleTabClick('풀이완료')">
          <a
            href="#"
            :class="[
              'inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300',
              selectedTab === '풀이완료' ? 'text-[#004AB9] border-[#004AB9]' : 'border-transparent'
            ]"
          >풀이완료</a>
        </li>
      </ul>
    </div>
    <div class="flex flex-row relative">
      <button id="dropdownButton" @click="toggleDropdown()" class="text-black font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center" type="button">
        {{ selectedPlatform === 'ALL' ? 'ALL' : selectedPlatform }}
        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      <div :class="{ hidden: !dropdownOpen }" id="dropdown" class="absolute top-[3rem] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700">
        <ul class="py-3 text-gray-700" aria-labelledby="dropdownDefaultButton">
          <li><a href="#" @click.prevent="handlePlatformClick('ALL')" class="block px-4 py-2 hover:bg-gray-100">ALL</a></li>
          <li><a href="#" @click.prevent="handlePlatformClick('BAEKJOON')" class="block px-4 py-2 hover:bg-gray-100">Baekjoon</a></li>
          <li><a href="#" @click.prevent="handlePlatformClick('PROGRAMMERS')" class="block px-4 py-2 hover:bg-gray-100">Programmers</a></li>
          <li><a href="#" @click.prevent="handlePlatformClick('LEETCODE')" class="block px-4 py-2 hover:bg-gray-100">LeetCode</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

