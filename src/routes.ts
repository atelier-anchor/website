import { useHead } from '@vueuse/head'
import data from '@/data.json'
import NotFound from '@/components/NotFound.vue'
import type { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

const updateHead = (to: RouteLocationNormalized) => {
  useHead({
    title: to.name === 'home' ? 'atelierAnchor' : `${to.name as string} - atelierAnchor`,
  })
}

const isValidPost = (section: string, id: string) =>
  section in data && id in data[section as keyof typeof data]

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/home/HomeView.vue'),
    beforeEnter: updateHead,
  },
  {
    path: '/works',
    name: 'works',
    props: { items: data.works },
    component: () => import('@/components/section/SectionView.vue'),
    beforeEnter: updateHead,
  },
  {
    path: '/typefaces',
    name: 'typefaces',
    props: { items: data.typefaces },
    component: () => import('@/components/section/SectionView.vue'),
    beforeEnter: updateHead,
  },
  {
    path: '/dash',
    name: 'dash',
    component: () => import('@/components/dash/DashView.vue'),
    beforeEnter: updateHead,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/components/about/AboutView.vue'),
    beforeEnter: updateHead,
  },
  {
    path: '/:section/:id',
    name: 'post',
    component: () => import('@/components/post/PostView.vue'),
    beforeEnter: (to) => {
      if (!isValidPost(to.params.section as string, to.params.id as string)) {
        return { name: '404' }
      }
    },
  },
  {
    path: '/subscription/:name',
    name: 'subscription-feedback',
    component: () => import('@/components/SubscriptionFeedback.vue'),
    beforeEnter: (to) => {
      if (to.params.name !== 'thank-you' && to.params.name !== 'unsubscription-successful') {
        return { name: '404' }
      }
    },
  },
  {
    path: '/:path(.*)*',
    name: '404',
    component: NotFound,
    beforeEnter: updateHead,
  },
]

export default routes
