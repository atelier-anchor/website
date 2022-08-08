import { ViteSSG } from 'vite-ssg'
import routes from '@/routes'
import App from '@/App.vue'
import '@/index.css'

export const createApp = ViteSSG(App, { routes })
