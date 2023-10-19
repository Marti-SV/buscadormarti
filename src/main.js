// Components
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Chat from "./components/Chat.vue";
import Biblioteca from "@/components/Biblioteca.vue";
import App from "./App.vue";

// Plugins
import { registerPlugins } from "@/plugins";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/chat", component: Chat },
    { path: "/", component: Biblioteca },
  ],
});

const app = createApp(App);

app.use(router);

registerPlugins(app);

app.mount("#app");
