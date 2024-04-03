import { createRouter, createWebHistory } from "vue-router";
import MainPageVue from "../pages/MainPage.vue";
import PopUpVue from "../pages/PopUp.vue";
import MainLayoutVue from "../layout/MainLayout.vue";
import NotFounVue from "../pages/NotFoun.vue";
import MainPage from "../pages/MainPage.vue";
import DetailPage from "../pages/DetailPage.vue";
import PostPage from "../pages/PostPage.vue";
import TextEditor from "../components/TextEditor.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainLayoutVue,
      children: [{ path: "/main", name: "main", component: MainPageVue }],
    },
    { path: "/popup", name: "popup", component: PopUpVue },
    {
      path: "/:pathMatch(.*)*",
      component: NotFounVue,
    },
    {
      path: "/detail",
      name: "detail",
      component: MainLayoutVue,

      children: [{ path: "", name: "detail-page", component: DetailPage }],
    },
    { path: "/post", name: "post", component: PostPage },
    { path: "/edit", name: "edit", component: TextEditor },
  ],
});

export default router;
