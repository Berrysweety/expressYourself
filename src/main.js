/** @format */

import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
// 导入路由
import router from "./Router";
const app = createApp(App);
app.use(router);
app.mount("#app");
