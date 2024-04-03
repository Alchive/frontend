import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage.vue";
import DetailPage from "../pages/DetailPage.vue";
import PostPage from "../pages/PostPage.vue";
import TextEditor from "../components/TextEditor.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/main", name: "main", component: MainPage },
    { path: "/detail", name: "detail", component: DetailPage },
    { path: "/post", name: "post", component: PostPage },
    { path: "/edit", name: "edit", component: TextEditor },
  ],
});

export default router;
