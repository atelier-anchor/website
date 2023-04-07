<script setup lang="ts">
const title = 'atelierAnchor'
const description = 'graphic & typeface design studio in shanghai. we make typeface as A narrative.'
const url = 'https://atelier-anchor.com'
const date = new Date()

useHead({
  titleTemplate: (name) => (name ? `${name} - ${title}` : title),
  link: [{ rel: 'icon', href: '/favicon.png' }],
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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
