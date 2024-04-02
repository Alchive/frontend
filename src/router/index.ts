import { createRouter, createWebHistory } from 'vue-router';
import MainPageVue from '../pages/MainPage.vue';
import PopUpVue from '../pages/PopUp.vue';
import MainLayoutVue from '../layout/MainLayout.vue';
import NotFounVue from '../pages/NotFoun.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayoutVue,
      children: [{ path: '/main', name: 'main', component: MainPageVue }],
    },
    { path: '/popup', name: 'popup', component: PopUpVue },
    {
      path: '/:pathMatch(.*)*',
      component: NotFounVue,
    },
  ],
});

export default router;
