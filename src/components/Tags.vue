<!--<script setup lang="ts"></script>-->

<!--<template>-->
<!--  <div class="flex w-[885px] justify-around my-[2.5rem]">-->
<!--    <div class="flex items-center justify-center">-->
<!--      <img src="../assets/mainpage/left.svg" class="w-[10px]" />-->
<!--    </div>-->
<!--    <div-->
<!--      class="rounded-[10px] bg-[#FFFFFF] shadow-[0px_0px_3px_rgba(0,0,0,0.25)] flex justify-center p-[5px_15px]"-->
<!--    >-->
<!--      <span class="font-semibold text-[14px] text-[#004AB9]"> BFS/DFS </span>-->
<!--    </div>-->
<!--    <div-->
<!--      class="rounded-[10px] bg-[#FFFFFF] shadow-[0px_0px_3px_rgba(0,0,0,0.25)] flex justify-center p-[5px_15px]"-->
<!--    >-->
<!--      <span class="font-semibold text-[14px] text-[#004AB9]"> DP </span>-->
<!--    </div>-->
<!--    <div-->
<!--      class="rounded-[10px] bg-[#FFFFFF] shadow-[0px_0px_3px_rgba(0,0,0,0.25)] flex justify-center p-[5px_15px]"-->
<!--    >-->
<!--      <span class="font-semibold text-[14px] text-[#004AB9]"> 이분탐색 </span>-->
<!--    </div>-->
<!--    <div-->
<!--      class="rounded-[10px] bg-[#FFFFFF] shadow-[0px_0px_3px_rgba(0,0,0,0.25)] flex justify-center p-[5px_15px]"-->
<!--    >-->
<!--      <span class="font-semibold text-[14px] text-[#004AB9]"> BFS/DFS </span>-->
<!--    </div>-->
<!--    <div-->
<!--      class="rounded-[10px] bg-[#FFFFFF] shadow-[0px_0px_3px_rgba(0,0,0,0.25)] flex justify-center p-[5px_15px]"-->
<!--    >-->
<!--      <span class="font-semibold text-[14px] text-[#004AB9]"> DP </span>-->
<!--    </div>-->
<!--    <div-->
<!--      class="rounded-[10px] bg-[#FFFFFF] shadow-[0px_0px_3px_rgba(0,0,0,0.25)] flex justify-center p-[5px_15px]"-->
<!--    >-->
<!--      <span class="font-semibold text-[14px] text-[#004AB9]"> 이분탐색 </span>-->
<!--    </div>-->
<!--    <div class="flex items-center justify-center">-->
<!--      <img src="../assets/mainpage/right.svg" class="w-[10px]" />-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="w-[885px] my-[2.5rem] px-[2rem]">
    <swiper
        :modules="modules"
        :slidesPerView="5"
        :centeredSlides="false"
        :spaceBetween="0"
        :pagination="{ type: undefined }"
        :navigation="true"
        :virtual="true"
        class="mySwiper"
        @swiper="setSwiperRef"
    >
      <swiper-slide
          v-for="(slideContent, index) in slides"
          :key="index"
          :virtualIndex="index"
      >
        {{ slideContent }}
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cards';
import {Navigation, Pagination, Virtual} from 'swiper/modules';
// import Swiper core and required modules
// import { Pagination, Navigation, Virtual } from 'swiper/vue';

// Create array with 500 slides
const slides = ref(Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`));
let swiperRef = null;
let appendNumber = 500;
let prependNumber = 1;

const setSwiperRef = (swiper) => {
	swiperRef = swiper;
};

const slideTo = (index) => {
	swiperRef.slideTo(index - 1, 0);
};

const append = () => {
	slides.value = [...slides.value, `Slide ${++appendNumber}`];
};

const prepend = () => {
	slides.value = [`Slide ${prependNumber - 2}`, `Slide ${prependNumber - 1}`, ...slides.value];
	prependNumber -= 2;
	swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
};

const modules = [Pagination, Navigation, Virtual];
</script>