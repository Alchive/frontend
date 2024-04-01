import { createRouter, createWebHistory } from 'vue-router';
import Filter from '../components/Filter.vue';
// import MainPageVue from '../pages/MainPage.vue';
// import { components } from 'vuetify/dist/vuetify.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/filter', name: 'filter', component: Filter },
    // { path: '/main', name: 'main', component: MainPageVue },
  ],
});

export default router;
