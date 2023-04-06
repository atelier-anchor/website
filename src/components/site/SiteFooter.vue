<script setup lang="ts">
const socialMediaItems = [
  {
    name: 'tw',
    title: 'Twitter',
    url: 'https://twitter.com/atelier_anchor',
  },
  {
    name: 'ins',
    title: 'Instagram',
    url: 'https://www.instagram.com/atelier_anchor',
  },
  {
    name: 'wb',
    title: 'Weibo',
    url: 'https://weibo.com/u/7568137725',
  },
]

const showQrCode = ref(false)
const toggleQrCode = () => {
  showQrCode.value = !showQrCode.value
}
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (showQrCode.value && !(e.target as HTMLElement).closest('#QrCode, #QrCodeToggler')) {
      showQrCode.value = false
    }
  })
  document.addEventListener('scroll', (e) => {
    if (showQrCode.value) {
      showQrCode.value = false
    }
  })
})
</script>

<template>
  <footer
    class="relative z-10 pb-4 pt-6 sm:absolute sm:bottom-0 lg:py-8 sm:[@media(min-height:480px)]:fixed"
  >
    <div class="transition-opacity" :class="{ 'opacity-0': showQrCode }">
      <h2 class="mb-2 text-3xl">contact</h2>
      <SiteFooterAddress />
    </div>
    <SiteFooterQrCode id="QrCode" :show="showQrCode" />
    <ul class="flex gap-2">
      <li v-for="{ name, title, url } in socialMediaItems">
        <a :href="url" :title="title" target="_blank" rel="noopener noreferrer">
          {{ name }}
        </a>
      </li>
      <li>
        <button title="WeChat" class="QrCodeToggler" @click="toggleQrCode">wx</button>
      </li>
    </ul>
  </footer>
</template>
