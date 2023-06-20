export const routes = [
  {
    path: '/',
    component: () => import('/@/layout/basic/index.vue'),
  },
  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到 404 页面
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
];

export default routes;
