import { createRouter, createWebHistory } from 'vue-router';
import MainPageVue from '../pages/MainPage.vue';
import PopUpVue from '../pages/PopUp.vue';
import MainLayoutVue from '../layout/MainLayout.vue';
import NotFoundVue from '../pages/NotFound.vue';
import DetailPage from '../pages/DetailPage.vue';
import PostPage from '../pages/PostPage.vue';
import Editor from '../components/Editor.vue';
import Tags from '../components/Tags.vue';
import LoginPopUp from '../pages/LoginPopUp.vue';
import SignUp from '../pages/SignUp.vue';

const routes = [
  {
    path: '/',
    redirect: '/main',
    name: 'main',
    component: MainLayoutVue,
    children: [
      //배경 layout 적용할 페이지 경로 설정
      { path: 'main', name: 'main', component: MainPageVue },
      // { path: '/', name: 'home', component: MainPageVue },
      { path: '/detail/:id', name: 'detail', component: DetailPage, props: true },
      { path: '/post', name: 'post', component: PostPage },
      { path: '/edit/:id', name: 'edit', component: Editor, props: true },
      { path: '/sign', name: 'sign', component: SignUp },
    ],
  },
  { path: '/popup', name: 'popup', component: PopUpVue },
  { path: '/login', name: 'login', component: LoginPopUp },
  // { path: '/sign', name: 'sign', component: SignUp },
  // {
  //   path: '/sign',
  //   name: 'sign',
  //   component: MainLayoutVue,
  //   children: [{ path: '/sign', name: 'sign', component: SignUp }],
  // },
  { path: '/tag', component: Tags },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundVue,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
