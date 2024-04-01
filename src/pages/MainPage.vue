<script setup>
import { defineComponent } from 'vue';
import Filter from '../components/Filter.vue';
import Selector from '../components/Selector.vue';

// export default defineComponent({
//   name: 'MainPage',
//   components: {
//     Filter,
//     Selector,
//   },
// });
</script>

<template>
  <div class="flex justify-cente items-center">
    <div class="flex">sdfsd</div>
    <p class="flex">adfas</p>
    <div class="flex flex-1"><Filter /></div>
    <div class="flex flex-1"><Selector /></div>
  </div>
</template>
