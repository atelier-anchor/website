// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
    // typedPages: true,
  },
  features: {
    inlineStyles: false,
  },
  modules: ['@nuxtjs/robots', '@nuxtjs/tailwindcss'],
  nitro: {
    prerender: {
      routes: ['/subscription/thank-you', '/subscription/unsubscribed-successfully'],
    },
    routeRules: {
      '/dinkie-bitmap': { redirect: { to: 'https://dinkiebitmap.com', statusCode: 301 } },
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
