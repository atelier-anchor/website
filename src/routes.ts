import type { RouteRecordRaw } from 'vue-router'
import { dash, typefaces, works } from '@/data'
import NotFound from '@/components/NotFound.vue'

const isValidPost = (section: string, id: string) =>
  (section === 'works' && id in works) ||
  (section === 'typefaces' && id in typefaces) ||
  (section === 'dash' && id in dash)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/home/HomeView.vue'),
  },
  {
    path: '/works',
    name: 'works',
    props: { items: works },
    component: () => import('@/components/section/SectionView.vue'),
  },
  {
    path: '/typefaces',
    name: 'typefaces',
    props: { items: typefaces },
    component: () => import('@/components/section/SectionView.vue'),
  },
  {
    path: '/dash',
    name: 'dash',
    component: () => import('@/components/dash/DashView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/about/AboutView.vue'),
  },
  {
    path: '/:section/:id',
    name: 'post',
    component: () => import('@/components/post/PostView.vue'),
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
