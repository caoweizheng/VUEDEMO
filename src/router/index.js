import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/index')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/index')
  },
  {
    path: '/nav',
    name: 'navigate',
    component: () => import('@/pages/navigate/index')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/pages/search/index')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/pages/mine/index')
  },
  {
    path: '/goodsList',
    name: 'goodsList',
    component: () => import('@/pages/goods/index')
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
