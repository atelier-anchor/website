<script setup lang="ts">
const title = 'atelierAnchor'
const description = 'graphic & typeface design studio in shanghai. we make typeface as A narrative.'
const url = 'https://atelier-anchor.com'
const date = new Date(import.meta.env.VITE_BUILD_DATE as string)

useHead({
  titleTemplate: (name) => (name ? `${name} · ${title}` : title),
  link: [{ rel: 'icon', href: '/favicon.png' }],
  meta: [
    { name: 'copyright', content: `© ${date.getFullYear()} ${title}` },
    { name: 'build-time', content: date.toISOString() },
  ],
  htmlAttrs: {
    lang: 'en',
  },
  script: [
    {
      src: 'https://umami.atelier-anchor.com/script.js',
      async: true,
      'data-website-id': '523e185f-0f92-44b7-8a78-25c3a6c4e4e6',
    },
  ],
})
useServerSeoMeta({
  description,
  twitterCard: 'summary',
  twitterSite: '@atelier_anchor',
  twitterTitle: title,
  twitterDescription: description,
  ogType: 'website',
  ogUrl: url,
  ogTitle: title,
  ogDescription: description,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
