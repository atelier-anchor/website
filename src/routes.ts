import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router'
import { useHead } from '@vueuse/head'
import { isValidPost } from '@/utils'
import NotFound from '@/components/special/NotFound.vue'

const updateHead = (to: RouteLocationNormalized) => {
  useHead({
    title: to.name === 'home' ? 'atelierAnchor' : `${to.name as string} - atelierAnchor`,
  })
}

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
    component: () => import('@/components/section/SectionView.vue'),
    beforeEnter: updateHead,
  },
  {
    path: '/typefaces',
    name: 'typefaces',
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
    path: '/subscription/thank-you',
    name: 'thank-you',
    props: {
      msg: {
        zh: '感谢订阅',
        en: 'thank you~',
      },
    },
    component: () => import('@/components/special/SubscriptionFeedback.vue'),
  },
  {
    path: '/subscription/unsubscribed-successfully',
    name: 'unsubscribed-successfully',
    props: {
      msg: {
        zh: '退订成功',
        en: 'unsubscribed successfully',
      },
    },
    component: () => import('@/components/special/SubscriptionFeedback.vue'),
  },
  {
    path: '/:path(.*)*',
    name: '404',
    component: NotFound,
    beforeEnter: updateHead,
  },
]

export default routes
