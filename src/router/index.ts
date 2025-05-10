import { createRouter, createWebHistory } from 'vue-router'
import Index from "../pages/index.vue";

const routes = [
  { path: '/', component: Index },
  { path: '/:season', component: Index },
  { path: '/:season/:zoneId', component: Index },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
