// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
  },
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    prerender: {
      routes: ['/subscription/thank-you', '/subscription/unsubscribed-successfully'],
    },
  },
  routeRules: {
    '/dinkie-bitmap/*': {
      redirect: 'https://dinkie-bitmap.vercel.app',
    },
    '/luohei-variable/*': {
      redirect: 'https://luohei-variable.vercel.app',
    },
  },
  tailwindcss: {
    cssPath: '@/assets/tailwind.css',
  },
})
