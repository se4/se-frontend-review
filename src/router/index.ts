import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/layout/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/predoc',
          name: 'preDoc',
          component: () => import('@/views/PreDoc.vue')
        },
        {
          name: 'preview',
          path: '/preview/:docId',
          component: () => import('@/views/Preview/index.vue'),
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
});
