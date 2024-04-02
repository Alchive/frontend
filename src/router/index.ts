import { createRouter, createWebHistory } from 'vue-router';
import MainPageVue from '../pages/MainPage.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/main', name: 'main', component: MainPageVue }],
});

export default router;
