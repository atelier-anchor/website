import { RouteLocationNormalized, RouteRecordRaw, RouterScrollBehavior } from 'vue-router'
import { useHead } from '@vueuse/head'
import { isValidPost } from '@/utils'
// import NotFound from '@/pages/NotFound.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/works',
    name: 'works',
    component: () => import('@/pages/section.vue'),
  },
  {
    path: '/typefaces',
    name: 'typefaces',
    component: () => import('@/pages/section.vue'),
  },
  {
    path: '/dash',
    name: 'dash',
    component: () => import('@/pages/dash.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about.vue'),
  },
  {
    path: '/:section/:id',
    name: 'post',
    component: () => import('@/pages/post.vue'),
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
    component: () => import('@/pages/subscription.vue'),
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
    component: () => import('@/pages/subscription.vue'),
  },
  {
    path: '/:path(.*)*',
    name: '404',
    component: () => import('@/pages/404.vue'),
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
  if (!['index', 'post', 'thank-you', 'unsubscribed-successfully'].includes(to.name as string)) {
    useHead({
      title: to.name as string,
    })
  }
}
