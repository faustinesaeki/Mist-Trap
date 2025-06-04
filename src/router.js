import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import GuidesView from './views/GuidesView.vue'
import ArenasView from './views/ArenasView.vue'
import ForumView from './views/ForumView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/guides', component: GuidesView },
  { path: '/arenas', component: ArenasView },
  { path: '/forum', component: ForumView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
