<template>
  <div>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
      integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
      crossorigin="anonymous"
    />
    <Navbar />
    <div class="flex justify-center items-center">
      <div class="flex flex-col w-[1200px] font-Pretendard gap-[15px]">
        <div class="flex w-full justify-between mt-[80px] mb-[20px]">
          <div class="flex gap-[20px]">
            <div class="text-4xl">10844. 쉬운 계단 수</div>
            <div class="font-Pretendards text-2xl">LV.1</div>
          </div>
        </div>
        <div class="flex gap-[20px]">
          <div class="px-[10px] border-[2px] bg-white border-gray-300 rounded-[10px] text-blue-700 text-xl">DP</div>
          <div class="px-[15px] border-[2px] bg-white border-gray-300 rounded-[10px] text-blue-700 text-xl">
            이분탐색
          </div>
        </div>
        <div class="px-[50px] border-[2px] bg-white border-gray-300 rounded-[10px] text-2xl">
          <div
            class="my-[10px]"
            @click="toggleContent"
          >
            <i
              v-if="!isContentVisible"
              class="fas fa-chevron-down"
            ></i>
            <i
              v-else
              class="fas fa-chevron-up"
            ></i>
            문제
          </div>
          <div
            v-if="isContentVisible"
            class="w-[1100px] mb-[20px] p-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
          >
            많은 동아리가 그렇듯 고려대학교 사이버국방학과 동아리 MatKor는 주기적으로 모여 활동한다. 학기 중에는
            학교에서 모이는 것이 합리적이었으나, 방학에는 그렇지 않다. 그래서 어떻게 모이는 것이 합리적인지 고민하던
            동우는 모두의 집을 점으로 잡아 페르마 포인트에서 만나기로 했다! 여기서 페르마 포인트란 주어진 모든 점으로
            부터 거리의 합이 최소가 되는 지점을 말한다. 택시를 타는 것을 좋아하는 동우는 페르마 포인트를 구할 때
            택시거리 즉, 맨해튼거리를 적용하기로 했다. 또한, 위치 이외에도 여러 요인을 고려해 모두의 집의 좌표를 N차원
            으로 생각하기로 했다.
          </div>
          <div
            v-if="isContentVisible"
            class="flex my-[10px] text-2xl"
          >
            <span class="flex flex-col">입력 <span class="border-[3px] border-blue-700" /></span>
          </div>
          <div
            v-if="isContentVisible"
            class="mb-[30px] p-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
          >
            첫 번째 줄에 점의 차원을 나타내는 정수 N과 점의 개수를 나타내는 정수 M (1≤N,M≤1000)이 공백으로 구분되어
            주어진다.
          </div>
          <div
            v-if="isContentVisible"
            class="flex my-[10px] text-2xl"
          >
            <span class="flex flex-col">작성한 메모 <span class="border-[3px] border-blue-700" /></span>
          </div>
          <div
            v-if="isContentVisible"
            class="mb-[30px] p-[20px] border-[2px] bg-white border-gray-300 rounded-[10px] font-Pretendards text-[20px]"
          >
            문제가 너무 어려웠다~ 다음에는 시간 복잡도를 신경 써서 풀어보자~
          </div>
        </div>
      </div>
    </div>
    <div></div>
    <Editor
      class="flex justify-center items-center"
      :isContentVisible="isContentVisible"
    />
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Editor from '../components/Editor.vue';

export default {
  setup() {
    const isContentVisible = ref(false); // 컨텐츠의 가시성을 나타내는 ref 변수
    const toggleContent = () => {
      isContentVisible.value = !isContentVisible.value; // 컨텐츠의 가시성을 토글
    };
    return {
      // isContentVisible: false,
      isContentVisible,
      toggleContent,
    };
  },
  components: { Navbar, Editor },
};
</script>
