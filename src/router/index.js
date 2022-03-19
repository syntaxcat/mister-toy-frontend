import { createRouter, createWebHashHistory } from "vue-router";
import toyApp from "../views/toyApp.vue";
import toyDetails from "../components/toyDetails.vue";
import toyEdit from "../components/toyEdit.vue";
import dashboard from "../components/dashboard.vue";
import loginPage from "../components/loginPage.vue";
import { userService } from "../services/userService.js";

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
    {
      path: "/dashboard",
      name: "dashboard",
      component: dashboard,
    },
    {
      path: "/login-page",
      name: "login-page",
      component: loginPage,
    },
  ],
});

router.beforeEach(async (to) => {
  const loggedInUser = userService.getLoggedinUser();
  if (!loggedInUser && to.name !== "login-page") {
    return { name: "login-page" };
  }

  if (loggedInUser && to.name === "login-page") {
    return { name: "toyApp" };
  }

  if (to.name === "toyEdit" && !loggedInUser.isAdmin) {
    return { name: "toyApp" };
  }
});

export default router;
