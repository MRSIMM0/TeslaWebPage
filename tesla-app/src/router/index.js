import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CarBuilder from "../views/CarBuiilder.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Store from "../views/Store.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/build",
    name: "CarBuilder",
    component: CarBuilder,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/store",
    name: "Store",
    component: Store,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
