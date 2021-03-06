import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/home.vue";
import Signup from "../views/signup/signup.vue";
import Login from "../views/login/login.vue";
import Organize from "../views/organize/organize.vue";
import Explore from "../views/explore/explore.vue";
import Details from "../views/details/details.vue";
import Edit from "../views/edited/edited.vue";
import Profil from "../views/profil/profile.vue";
import Memories from "../views/memories/memories.vue";
import exploreMemories from "../views/explorememorie/exploreM";
import editMemories from "../views/editMemorie/edited.vue";
import detailsMemories from "../views/detailsMemories/details";

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
  {
    path: "/explore",
    name: "explore",
    component: Explore,
  },
  {
    path: "/details",
    name: "details",
    component: Details,
  },
  {
    path: "/edit",
    name: "edit",
    component: Edit,
  },
  {
    path: "/profil",
    name: "profil",
    component: Profil,
  },
  {
    path: "/memories",
    name: "memories",
    component: Memories,
  },
  {
    path: "/exploreMemories",
    name: "exploreMemories",
    component: exploreMemories,
  },
  {
    path: "/editMemories",
    name: "editMemories",
    component: editMemories,
  },
  {
    path: "/detailsMemories",
    name: "detailsMemories",
    component: detailsMemories,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
