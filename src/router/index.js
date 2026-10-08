import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
  ],
  // The hash must match a section's id, such as /#programs.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      return { el: to.hash, behavior: reducedMotion ? 'auto' : 'smooth' }
    }

    return { top: 0 }
  },
})

export default router
