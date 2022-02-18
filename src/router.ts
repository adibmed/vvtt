import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('./pages/Blog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
