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
