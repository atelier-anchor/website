import { ViteSSG } from 'vite-ssg'
import { routes, scrollBehavior, updateHead } from '@/routes'
import App from '@/App.vue'
import '@/index.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior,
  },
  ({ router }) => {
    router.beforeEach(updateHead)
  }
)
