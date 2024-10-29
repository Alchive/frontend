<template>
  <div
    v-for="(problem, index) in props.problems"
    :key="problem.problemId + '-' + index"
    class="problem"
    @click="goToDetailPage(problem.problemId)"
  >
    <div class="relative">
      <div class="flex relative z-0">
        <img src="../assets/mainpage/folder.svg" class="" />
      </div>
      <div class="flex flex-col absolute z-1 left-1 top-0">
        <!--head-->
        <div class="flex flex-row w-[250px] h-[30px] items-center rounded-[10px] p-[18px_14px] relative">
          <div class="flex font-medium text-[13px] text-[#EEEEEE] absolute left-[0.7rem] top-[0.45rem]">
            {{ problem.problemDifficulty }}
          </div>
          <div class="flex font-medium text-[9px] text-[#FF1515] absolute left-[32%] top-[0.55rem]">Ref</div>
        </div>
        <!-- body -->
        <div
          class="z-10 flex flex-col w-[250px] h-[120px] items-center rounded-[7px] p-[18px_14px] gap-8 box-sizing-border"
        >
          <div class="flex flex-row self-start items-center w-[fit-content] box-sizing-border">
            <div
              class="bg-[url('./assets/mainpage/baekjoon.svg')] mr-2 bg-[50%_50%] bg-cover bg-no-repeat w-[23px] h-[22px]"
            ></div>
            <!-- <div class="flex justify-center items-center">
          <img :src="baekjoon" />
        </div> -->
            <span class="break-words font-semibold text-[20px] text-[#000000]">{{
              truncateString(problem.problemTitle, 15)
            }}</span>
          </div>
          <!-- 하단 태그들 -->
          <div class="flex flex-row justify-between items-center w-[calc(100%_-_3px)] box-sizing-border">
            <div class="rounded-[50px] flex flex-row justify-center items-center box-sizing-border">
              <div
                class="rounded-[50px] border-[1px_solid_#53E26A] bg-[#53E26A] m-[0_3.2px_0_0] flex flex-row justify-center p-[0.8px_0.4px_0.6px_1px] w-[8px] h-[8px] box-sizing-border"
              >
                <div
                  class="rounded-[50px] bg-[linear-gradient(180deg,rgba(198,229,203,0.49),rgba(3,81,15,0.49),rgba(198,229,203,0.49))] w-[6.5px] h-[6.5px]"
                ></div>
              </div>
              <div class="ml-1 inline-block break-words font-medium text-[10px] text-[#171717]">
                {{ problem.problemState }}
              </div>
            </div>
            <div class="rounded-[7px] flex flex-row box-sizing-border gap-[5px]">
              <div class="rounded-[7px] bg-[#F0F0F0] flex flex-row justify-center p-[2px_8px] box-sizing-border">
                <span class="break-words font-medium text-[11px] text-[#000000]">{{
                  problem.problemAlgorithms.join(', ')
                }}</span>
              </div>
              <div class="rounded-[7px] bg-[#F0F0F0] flex flex-row justify-center p-[2px_8px] box-sizing-border">
                <span class="break-words font-medium text-[11px] text-[#000000]"> DP </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const truncateString = (str: string, maxLength: number) => {
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
};

interface Problem {
  problemId: number;
  problemDifficulty: string;
  problemTitle: string;
  problemState: string;
  platform: string;
  problemAlgorithms: string[];
}
const props = defineProps<{ problems: Problem[] }>();

const goToDetailPage = (problemId: number) => {
  router.push({ name: 'detail-page', params: { id: problemId } });
};
</script>
