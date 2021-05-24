import { createRouter, createWebHashHistory } from "vue-router";
import UserList from "../components/user/User_List.vue";
import UserFull from "../components/user/User_Full.vue";

const routes = [
  {
    path: "/users",
    component: UserList,
  },
  {
    path: "/users/:id",
    component: UserFull,
    props: true,
  },
  {
    path: "/",
    redirect: "/users",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
