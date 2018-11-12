import Vue from 'vue';
import Router from 'vue-router';
import routes from '@/router/routes';
import { getToken } from '@/utils/auth';

Vue.use(Router);

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requiresAuth && !getToken()) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
