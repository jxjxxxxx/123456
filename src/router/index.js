import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/MainPage.vue')
    },
    {
      path: '/gachaOne',
      component: () => import('@/pages/gachaOne.vue')
    },
    {
      path: '/gachaTen',
      component: () => import('@/pages/gachaTen.vue')
    },
    {
      path: '/login',
      component: () => import('@/pages/LoginPage.vue')
    },
    {
      path: '/rewards',
      component: () => import('@/pages/UserReward.vue')
    },
    {
      path: '/user',
      redirect: '/user/turn',
      component: () => import('@/pages/UserManage.vue'),
      children: [
        {
          path: '/user/turn',
          component: () => import('@/pages/FlopRecord.vue')
        },
        {
          path: '/user/address',
          component: () => import('@/pages/AddressManage.vue')
        }
      ]
    },
    {
      path: '/share',
      component: () => import('@/pages/sharePage.vue')
    },
    {
      path: '/t',
      component: () => import('@/pages/testShare.vue')
    }
  ]
})
