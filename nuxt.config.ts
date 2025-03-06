export default defineNuxtConfig({
  compatibilityDate: '2025-03-01',
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/robots', '@nuxtjs/tailwindcss', 'nuxt-umami'],
  nitro: {
    prerender: {
      routes: ['/subscription/thank-you', '/subscription/unsubscribed-successfully'],
    },
    routeRules: {
      '/dinkie-bitmap': {
        redirect: { to: 'https://dinkiebitmap.com', statusCode: 301 },
      },
      '/luohei-variable': {
        redirect: { to: 'https://luohei.atelier-anchor.com', statusCode: 301 },
      },
      '/mingkwai': {
        redirect: { to: 'https://mingkwai.atelier-anchor.com', statusCode: 301 },
      },
    },
  },
  umami: {
    host: 'https://umami.dinkiebitmap.com',
    id: '442f071b-5e0a-4987-bdbe-e045c3519a41',
    ignoreLocalhost: true,
  },
  vite: {
    define: {
      'import.meta.env.VITE_BUILD_DATE': JSON.stringify(new Date()),
    },
  },
})
