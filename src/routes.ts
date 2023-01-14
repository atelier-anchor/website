import { RouteLocationNormalized, RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import { useHead } from '@vueuse/head'
import { isValidPost } from '@/utils'
import NotFound from '@/components/special/NotFound.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/home/HomeView.vue'),
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('@/components/section/SectionView.vue'),
  },
  {
    path: '/typefaces',
    name: 'typefaces',
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
  },
]

export const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 0)
    })
  }
}

export const updateHead = (to: RouteLocationNormalized) => {
  if (!['home', 'post', 'thank-you', 'unsubscribed-successfully'].includes(to.name as string)) {
    useHead({
      title: to.name as string,
    })
  }
}
