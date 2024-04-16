<script setup lang="ts">
import { ref } from 'vue';

// 드롭다운 상태를 관리할 변수
const dropdownOpen = ref(false);

// 드롭다운 메뉴를 토글하는 함수
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>

<template>
  <div class="flex flex-row justify-between w-[1340px] border-b border-gray-200 z-20">
    <div class="font-medium text-center text-gray-500">
      <ul class="flex flex-wrap -mb-px">
        <li class="me-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            >전체</a
          >
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            >맞았습니다</a
          >
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            aria-current="page"
            >틀렸습니다</a
          >
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            >미제출</a
          >
        </li>
        <li class="me-2">
          <a
            href="#"
            class="inline-block p-4 border-b-2 text-[#004AB9] border-[#004AB9] rounded-t-lg active"
            aria-current="page"
            >풀이완료</a
          >
        </li>
      </ul>
    </div>
    <div class="flex flex-row relative">
      <button
        id="dropdownButton"
        @click="toggleDropdown()"
        data-dropdown-toggle="dropdown"
        class="text-black font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        ALL
        <svg
          class="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        :class="{ hidden: !dropdownOpen }"
        id="dropdown"
        class="absolute top-[3rem] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700"
      >
        <ul class="py-3 text-gray-700" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Baekjoon</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Programmers</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">LeetCode</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Dropdown menu -->
  </div>
</template>
