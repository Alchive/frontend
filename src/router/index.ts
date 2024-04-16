import { createRouter, createWebHistory } from "vue-router";
import MainPageVue from "../pages/MainPage.vue";
import PopUpVue from "../pages/PopUp.vue";
import MainLayoutVue from "../layout/MainLayout.vue";
import NotFoundVue from "../pages/NotFound.vue";
import DetailPage from "../pages/DetailPage.vue";
import PostPage from "../pages/PostPage.vue";
import Editor from "../components/Editor.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainLayoutVue,
      children: [
        //배경 layout 적용할 페이지 경로 설정
        { path: "/main", name: "main", component: MainPageVue },
        { path: "/detail", name: "detail-page", component: DetailPage },
        { path: "/post", name: "post", component: PostPage },
        { path: "/edit", name: "edit", component: Editor },
      ],
    },
    { path: "/popup", name: "popup", component: PopUpVue },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundVue,
    },
  ],
});

export default router;
