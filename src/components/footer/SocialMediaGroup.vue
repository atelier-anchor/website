<script setup lang="ts">
import { inject } from 'vue'

const toggleQrCode = inject('toggleQrCode') as () => void

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
  <ul class="flex gap-2">
    <li v-for="{ name, title, href } in socialMedia">
      <a :href="href" :title="title" target="_blank" rel="noopener noreferrer">
        {{ name }}
      </a>
    </li>
    <li>
      <button title="WeChat Official Accounts" class="QrCodeToggler" @click="toggleQrCode">
        wx
      </button>
    </li>
  </ul>
</template>
