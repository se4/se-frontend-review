export default [
  {
    path: '/',
    component: () => import('@/layout/DefaultLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/predoc',
        name: 'preDoc',
        component: () => import('@/views/PreDoc.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: '/predoc/:docId',
        name: 'preDocDetail',
        component: () => import('@/views/SelfDoc/index.vue'),
        meta: { requiresAuth: true }
      },
      {
        name: 'preview',
        path: '/preview/:docId',
        component: () => import('@/views/Preview/index.vue'),
        meta: { requiresAuth: true }
      },
      {
        name: 'user',
        path: 'user',
        component: () => import('@/views/User/index.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/layout/LoginLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/views/Login/index.vue'),
        meta: { requiresAuth: false }
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/Register/index.vue'),
        meta: { requiresAuth: false }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
];
