<script setup lang="ts">
const address = ['15A, Lane 141', 'Xing’an Road', 'Huangpu District', 'Shanghai, China']
const mail = {
  name: 'hi@atelier-anchor.com',
  href: 'mailto:hi@atelier-anchor.com',
}
const socialMedia = [
  {
    name: 'twitter',
    href: 'https://twitter.com/atelier_anchor',
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/atelier_anchor',
  },
  {
    name: 'weibo',
    href: 'https://weibo.com/u/7568137725',
  },
]
</script>

<template>
  <footer>
    <h2>contact</h2>
    <address>
      <template v-for="line in address">{{ line }}<br /></template>
      <a :href="mail.href" target="_blank">{{ mail.name }}</a>
      <br />
      <div class="flex gap-2">
        <template v-for="item in socialMedia">
          <a :href="item.href" target="_blank">{{ item.name }}</a>
        </template>
      </div>
    </address>
  </footer>
</template>
