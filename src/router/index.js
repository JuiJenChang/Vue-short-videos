import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home"),
  },
  {
    path: "/discover",
    name: "Discover",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Discover"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
