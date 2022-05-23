import type { RouteRecordRaw } from 'vue-router'
import { works, typefaces } from '@/data'
import NotFound from '@/views/NotFound.vue'

const isValidPost = (section: string, id: string) =>
  (section === 'works' && id in works) || (section === 'typefaces' && id in typefaces)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('@/views/WorksView.vue'),
  },
  {
    path: '/typefaces',
    name: 'typefaces',
    component: () => import('@/views/WorksView.vue'),
  },
  {
    path: '/dash',
    name: 'dash',
    component: () => import('@/views/DashView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/:section/:id',
    name: 'post',
    component: () => import('@/views/PostView.vue'),
    beforeEnter: (to) => {
      if (!isValidPost(to.params.section as string, to.params.id as string)) {
        return { name: 'not-found' }
      }
    },
  },
  {
    path: '/:path(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]

export default routes
