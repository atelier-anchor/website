// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
  },
  typescript: {
    typeCheck: 'build',
  },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '@/assets/tailwind.css',
  },
})
