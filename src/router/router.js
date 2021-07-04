import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/home.vue";
import Signup from "../views/signup/signup.vue";
import Login from "../views/login/login.vue";
import Organize from "../views/organize/organize.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/organize",
    name: "organize",
    component: Organize,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;