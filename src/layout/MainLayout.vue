<template>
  <div
    class="relative w-screen h-screen bg-[#FFFFFF] bg-[linear-gradient(180deg,#FCFCFC_88.38%,#D1E4FF_100%)] flex flex-col"
  >
    <div class="z-10">
      <router-view></router-view>
    </div>
    <img
      class="absolute bottom-0 right-4 w-[280px] h-[260px] z-0"
      src="../assets/background.svg"
    />
  </div>
</template>
