// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    inlineSSRStyles: false,
    payloadExtraction: false,
    // typedPages: true,
  },
  modules: ['@nuxtjs/robots', '@nuxtjs/tailwindcss'],
  nitro: {
    prerender: {
      routes: ['/subscription/thank-you', '/subscription/unsubscribed-successfully'],
    },
  },
  tailwindcss: {
    cssPath: '@/assets/tailwind.css',
  },
})
