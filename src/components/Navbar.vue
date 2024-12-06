<template>
  <div class="flex justify-between items-center w-full h-[60px] my-[10px] px-[30px]">
    <div class="flex gap-[7px] cursor-pointer" @click="goHome">
      <span class="text-blue-700 font-DungGeunMo text-6xl">{</span>
      <div class="flex text-blue-700 font-ChemyRetro text-4xl leading-[2]">Alchive</div>
      <span class="text-blue-700 font-DungGeunMo text-6xl">}</span>
    </div>
    <div class="flex w-[500px] gap-[20px]">
      <div class="flex justify-between w-[330px] h-[40px] mr-[10px] px-[15px] bg-gray-100 rounded-[10px] text-gray-500">
        <textarea
          class="pt-[7px] focus:outline-none bg-gray-100"
          placeholder="검색어를 입력하세요."
          style="resize: none"
        ></textarea>
        <img class="w-[20px]" src="../assets/search.svg" />
      </div>
      <span class="flex items-center text-blue-700">{{ nickname.valueOf() }}</span>
      <img class="w-[30px]" src="../assets/user.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/username';

export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const nickname = computed(() => userStore.userName);
    console.log(nickname.value);

    const goHome = () => {
      router.push('/main'); // 루트 경로로 이동
    };

    return {
      nickname,
      goHome,
    };
  },
});
</script>
