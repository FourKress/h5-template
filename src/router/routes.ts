export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/layout/index.vue'),
    children: [
      {
        path: '/protocol',
        name: 'Protocol',
        component: () => import('/@/views/protocol/index.vue'),
      },
    ],
  },

  {
    path: '/protocol',
    name: 'Protocol',
    component: () => import('/@/views/protocol/index.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('/@/views/register/index.vue'),
  },

  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到 404 页面
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
];

export default routes;
