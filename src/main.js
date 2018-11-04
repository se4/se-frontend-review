import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "./plugins/element.js";
import "normalize.css";
import "github-markdown-css";
import "./style/main.scss";
import { getToken, getUserProfile } from "@/util/token";
import { LOGIN_ROUTER } from "@/router/name";
import { SET_PROFILE } from "@/store/type/mutations.type";
import "@/registerServiceWorker";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requiresAuth && !getToken()) {
    next({ name: LOGIN_ROUTER });
  } else {
    next();
  }
});

store.commit(SET_PROFILE, getUserProfile() || {});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
