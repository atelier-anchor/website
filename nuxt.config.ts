export default defineNuxtConfig({
  modules: ['@nuxtjs/robots', '@nuxtjs/tailwindcss'],
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
  tailwindcss: {
    cssPath: '@/assets/tailwind.css',
  },
  vite: {
    define: {
      'import.meta.env.VITE_BUILD_DATE': JSON.stringify(new Date()),
    },
  },
})
