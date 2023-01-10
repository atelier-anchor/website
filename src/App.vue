<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHead } from '@vueuse/head'
import SiteHeader from '@/components/header/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'

const title = 'atelierAnchor'
const description = 'graphic & typeface design studio in shanghai. we make typeface as A narrative.'
const url = 'https://atelier-anchor.com'
const date = new Date(import.meta.env.VITE_BUILD_DATE)
const specialPages = ['404', 'thank-you', 'unsubscribed-successfully']

useHead({
  meta: [
    { name: 'description', content: description },
    { name: 'copyright', content: `© ${date.getFullYear()} ${title}` },
    { name: 'build-time', content: date.toISOString() },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@atelier_anchor' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
  ],
})
</script>

<template>
  <div
    v-if="!specialPages.includes($route.name as string)"
    class="relative mx-auto flex min-h-[max(100vh,480px)] min-w-[320px] max-w-[1800px] flex-col px-4 sm:flex-row sm:gap-16 lg:px-8"
  >
    <SiteHeader />
    <main class="relative w-full grow sm:py-4 lg:py-8">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
  <main
    v-else
    class="mx-auto flex min-h-[max(100vh,320px)] min-w-[320px] max-w-[1800px] flex-col items-center justify-around gap-16 p-4 lg:p-8"
  >
    <RouterView />
  </main>
</template>
