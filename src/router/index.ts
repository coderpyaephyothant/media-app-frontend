import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/home-page',
    name:'homePage',
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/post/:id/detail',
    name:'postDetail',
    component: () => import('../views/PostDetail.vue')
  },
  {
    path:'/user-login',
    name:'userLogin',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path:'/user-profile',
    name:'userProfilePage',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path:'/user-404-error-page',
    name:'userErrorPage',
    component: () => import('../views/ErrorPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'userErrorPage' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
