import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: index
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
