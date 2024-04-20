<template>
  <div class="flex justify-between items-center w-full h-[60px] my-[10px] px-[30px]">
    <div class="flex gap-[7px]">
      <span class="text-blue-700 font-DungGeunMo text-6xl">{</span>
      <div class="flex text-blue-700 font-ChemyRetro text-4xl leading-[2]">Alchive</div>
      <span class="text-blue-700 font-DungGeunMo text-6xl">}</span>
    </div>
    <div class="flex w-[400px] gap-[20px]">
      <div class="flex justify-between w-[330px] h-[40px] mr-[10px] px-[15px] bg-gray-100 rounded-[10px] text-gray-500">
        <textarea
          class="pt-[7px] focus:outline-none bg-gray-100"
          placeholder="검색어를 입력하세요."
          style="resize: none"
        ></textarea>
        <img
          class="w-[20px]"
          src="../assets/search.svg"
        />
      </div>
      <img
        class="w-[30px]"
        src="../assets/user.svg"
      />
    </div>
  </div>
</template>
