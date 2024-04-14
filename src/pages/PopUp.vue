<template>
  <div
    class="shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] rounded-[10px] bg-[#FFFFFF] flex flex-col w-[300px] h-[257px] items-center p-[15px]"
  >
    <div class="inline-block font-black text-[25px] text-[#004AB9]">Algorive</div>
    <div class="mt-[12px] mb-[12px] w-[100%] border-t-[1.5px] border-[#EEEEEE] border-solid"></div>
    <div class="m-[0_0_12px_0] flex flex-row justify-between w-[100%] box-sizing-border">
      <div class="inline-block break-words font-semibold text-[12px] text-[#00992B]">27297. 맨해튼에서의 모임</div>
      <div
        class="shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] rounded-[5px] bg-[#EEEEEE] flex flex-row justify-center p-[2px_3px] box-sizing-border"
      >
        <span class="break-words font-semibold text-[10px] text-[#00992B]"> 맞았습니다 </span>
      </div>
    </div>
    <textarea
      class="resize-none shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] rounded-[10px] bg-[#EEEEEE] m-[0_0_4px_0] px-3 py-2 w-[100%] h-[40%] box-sizing-border break-words font-medium text-[12px] text-[#A0A0A0]"
    >
메모를 입력하세요.
    </textarea>
    <div class="my-1 flex flex-row justify-between w-[100%] px-1 box-sizing-border">
      <div class="flex flex-row justify-center items-center box-sizing-border">
        <input
          type="checkbox"
          id="Refcode"
          class="w-[9px] h-[9px] mr-1 text-indigo-600 border-gray-300 rounded-sm focus:ring-indigo-500"
        />
        <label for="Refcode" class="break-words font-medium text-[10px] text-[#676767]"> 참고한 코드인가요? </label>
      </div>
      <div class="break-words font-medium text-[10px] text-[#A0A0A0]">0/100</div>
    </div>
    <div
      class="shadow-[0px_0px_2px_0px_rgba(0,0,0,0.25)] rounded-[5px] bg-[#EEEEEE] flex flex-row justify-center mt-1 p-[4px_14px] box-sizing-border"
    >
      <span class="break-words font-medium text-[12px] text-[#2F2F2F]"> 저장하기 </span>
    </div>
  </div>
</template>
