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

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: MainLayoutVue,
//       children: [
//         //배경 layout 적용할 페이지 경로 설정
//         { path: '/main', name: 'main', component: MainPageVue },
//         { path: '/detail/:id', name: 'detail-page', component: DetailPage, props: true },
//         { path: '/post', name: 'post', component: PostPage },
//         { path: '/edit', name: 'edit', component: Editor },
//       ],
//     },
//     { path: '/popup', name: 'popup', component: PopUpVue },
//     { path: '/login', name: 'login', component: LoginPopUp },
//     { path: '', name: '', component: MainLayoutVue, children: [{ path: '/sign', name: 'sign', component: SignUp }] },
//     { path: '/tag', component: Tags },
//     {
//       path: '/:pathMatch(.*)*',
//       component: NotFoundVue,
//     },
//   ],
// });
const routes = [
  {
    path: '/',
    // name: 'home',
    component: MainLayoutVue,
    children: [
      //배경 layout 적용할 페이지 경로 설정
      { path: '/main', name: 'main', component: MainPageVue },
      // { path: '/', name: 'home', component: MainPageVue },
      { path: '/detail/:id', name: 'detail', component: DetailPage, props: true },
      { path: '/post', name: 'post', component: PostPage },
      { path: '/edit/:id', name: 'edit', component: Editor, props: true },
    ],
  },
  { path: '/popup', name: 'popup', component: PopUpVue },
  { path: '/login', name: 'login', component: LoginPopUp },
  { path: '', name: '', component: MainLayoutVue, children: [{ path: '/sign', name: 'sign', component: SignUp }] },
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
