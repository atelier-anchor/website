import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior: (to, from, savedPosition) =>
    savedPosition
      ? savedPosition
      : new Promise((resolve) => {
          setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 0)
        }),
}
