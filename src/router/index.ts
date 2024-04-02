import { createRouter, createWebHistory } from 'vue-router';
import MainPageVue from '../pages/MainPage.vue';
import PopUpVue from '../pages/PopUp.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/main', name: 'main', component: MainPageVue },
    { path: '/popup', name: 'popup', component: PopUpVue },
  ],
});

export default router;
