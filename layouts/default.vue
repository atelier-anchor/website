<script setup lang="ts">
const footerHeight = ref(0)
onMounted(() => {
  const footerElem = document.querySelector('footer')
  if (footerElem) {
    const pt = parseInt(window.getComputedStyle(footerElem).getPropertyValue('padding-top'))
    const pb = parseInt(window.getComputedStyle(footerElem).getPropertyValue('padding-bottom'))
    footerHeight.value = footerElem.offsetHeight - pt - pb
  }
})
</script>

<template>
  <div
    class="relative mx-auto flex min-h-[max(100vh,480px)] min-w-[320px] max-w-[1800px] flex-col px-4 sm:flex-row sm:gap-16 lg:px-8"
  >
    <SiteHeader
      class="sm:mb-[--footer-height] [@media(min-height:480px)]:mb-0"
      :style="{ '--footer-height': `${footerHeight}px` }"
    />
    <main class="relative w-full grow sm:py-4 lg:py-8">
      <slot></slot>
    </main>
    <SiteFooter />
  </div>
</template>
