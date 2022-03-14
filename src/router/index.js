import { createRouter, createWebHashHistory } from "vue-router";
import toyApp from "../views/toyApp.vue";
import toyDetails from "../components/toyDetails.vue";
import toyEdit from "../components/toyEdit.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/toyApp",
      name: "toyApp",
      component: toyApp,
    },
    {
      path: "/details/:toyId",
      name: "toyDetails",
      component: toyDetails,
    },
    {
      path: "/edit/:toyId",
      name: "toyEdit",
      component: toyEdit,
    },
  ],
});

export default router;
