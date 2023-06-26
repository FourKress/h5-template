export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/layout/index.vue'),
    meta: {
      hasTabbar: true,
      title: 'Home',
    },
    children: [
      {
        path: '/order',
        name: 'Order',
        component: () => import('/@/views/order/index.vue'),
        meta: {
          hasTabbar: false,
          title: '我的报告',
        },
      },
      {
        path: '/orderDetails',
        name: 'OrderDetails',
        component: () => import('/@/views/order/details.vue'),
        meta: {
          hasTabbar: false,
          title: '报告详情',
        },
      },
      {
        path: '/agentProduct',
        name: 'AgentProduct',
        component: () => import('/@/views/agent-product/index.vue'),
        meta: {
          title: '代理产品',
        },
      },

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
  {
    path: '/agentRegister',
    name: 'AgentRegister',
    component: () => import('/@/views/agent-register/index.vue'),
  },

  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到 404 页面
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
];

export default routes;
