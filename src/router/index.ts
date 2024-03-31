import { createRouter, createWebHistory } from 'vue-router';
import Filter from '../components/Filter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/filter', name: 'filter', component: Filter }],
});

export default router;
