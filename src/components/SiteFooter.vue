<script setup lang="ts">
const address = ['15A, Lane 141', 'Xing’an Road', 'Huangpu District', 'Shanghai, China']
const mail = {
  name: 'hi@atelier-anchor.com',
  href: 'mailto:hi@atelier-anchor.com',
}
const socialMedia = [
  {
    name: 'tw',
    title: 'Twitter',
    href: 'https://twitter.com/atelier_anchor',
  },
  {
    name: 'ins',
    title: 'Instagram',
    href: 'https://www.instagram.com/atelier_anchor',
  },
  {
    name: 'wb',
    title: 'Weibo',
    href: 'https://weibo.com/u/7568137725',
  },
]
</script>

<template>
  <footer class="z-10 py-4 sm:absolute sm:bottom-0 lg:py-8 sm:tall:fixed">
    <h2 class="mb-2 text-3xl">contact</h2>
    <address class="not-italic">
      <template v-for="line in address">{{ line }}<br /></template>
      <a :href="mail.href" target="_blank">{{ mail.name }}</a>
    </address>
    <ul class="flex gap-2">
      <li v-for="item in socialMedia">
        <a :href="item.href" :title="item.title" target="_blank">{{ item.name }}</a>
      </li>
    </ul>
  </footer>
</template>
