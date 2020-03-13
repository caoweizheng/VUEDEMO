import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld')
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
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
