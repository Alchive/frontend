import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './index.css';
import router from './router';
import 'tailwindcss/tailwind.css';

const app = createApp(App);
// Pinia를 애플리케이션에 등록
const pinia = createPinia();

app.use(pinia);
app.use(router).mount('#app');
