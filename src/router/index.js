import Vue from "vue";
import Router from "vue-router";
import {
  LOGIN_ROUTER,
  REGISTER_ROUTER,
  HOME_ROUTER,
  USER_INFO_ROUTER,
  DOC_ROUTER
} from "@/router/name";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      component: () => import("@/layout/LoginLayout"),
      meta: { requiresAuth: false },
      children: [
        {
          name: REGISTER_ROUTER,
          path: "/register",
          component: () => import("@/views/Register/index"),
          meta: { requiresAuth: false }
        },
        {
          name: LOGIN_ROUTER,
          path: "",
          component: () => import("@/views/Login/index"),
          meta: { requiresAuth: false }
        }
      ]
    },
    {
      path: "/",
      component: () => import("@/layout/DefaultLayout"),
      meta: { requiresAuth: true },
      children: [
        {
          name: HOME_ROUTER,
          path: "",
          component: () => import("@/views/Home/index"),
          meta: { requiresAuth: true }
        },
        {
          name: DOC_ROUTER,
          path: "/doc/:docId",
          component: () => import("@/views/Doc/index"),
          meta: { requiresAuth: true }
        },
        {
          name: USER_INFO_ROUTER,
          path: "/user",
          component: () => import("@/views/UserInfo/index"),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
});
