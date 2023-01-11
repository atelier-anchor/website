<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import SiteAddress from '@/components/footer/SiteAddress.vue'
import SocialMediaGroup from '@/components/footer/SocialMediaGroup.vue'
import WeChatQrCode from '@/components/footer/WeChatQrCode.vue'

const showQrCode = ref(false)
provide('toggleQrCode', () => (showQrCode.value = !showQrCode.value))

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (showQrCode.value && !(e.target as HTMLElement).closest('.WeChatQrCode, .QrCodeToggler')) {
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
  <footer class="relative z-10 pt-6 pb-4 sm:absolute sm:bottom-0 lg:py-8 sm:tall:fixed">
    <div class="transition-opacity" :class="{ 'opacity-0': showQrCode }">
      <h2 class="mb-2 text-3xl">contact</h2>
      <SiteAddress />
    </div>
    <WeChatQrCode
      class="absolute bottom-12 transition-opacity lg:bottom-16"
      :class="{ 'opacity-0': !showQrCode }"
    />
    <SocialMediaGroup />
  </footer>
</template>
