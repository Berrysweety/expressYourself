/** @format */

import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView";
const routes = [
  //   {
  //     path: "/",
  //     component: () => import("../pages/Main.vue"),
  //     children: [
  //       {
  //         path: "/",
  //         name: "home",
  //         component: () => import("../pages/home/Home.vue"),
  //       },
  //     ],
  //   },
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/notfound",
    name: "notfound",
    component: () => import("../views/NotFoundView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/",
    name: "userlist",
    component: () => import("../views/UserList.vue"),
  },
  {
    path: "/userprofile",
    name: "userprofile",
    component: () => import("../views/UserProfile.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
