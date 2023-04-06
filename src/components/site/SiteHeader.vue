<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteLogo from '@/components/site/SiteLogo.vue'
import SiteNav from '@/components/site/SiteNav.vue'
import SiteNavToggler from '@/components/site/SiteNavToggler.vue'

const showNav = ref(false)
const toggleNav = () => {
  showNav.value = !showNav.value
}
const closeNav = () => {
  showNav.value = false
}
onMounted(() => {
  const navElem = document.querySelector('nav')
  document.addEventListener('click', (e) => {
    if (navElem && e.clientY > navElem.offsetTop + navElem.offsetHeight) {
      closeNav()
    }
  })
  window.addEventListener('resize', (e) => closeNav())
})

const route = useRoute()
watch(route, closeNav)

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
  <header
    class="sticky top-0 z-20 h-fit bg-white py-4 dark:bg-black sm:mb-[--footer-height] lg:py-8 [@media(min-height:480px)]:mb-0"
    :style="{ '--footer-height': `${footerHeight}px` }"
  >
    <div class="flex items-center justify-between">
      <SiteLogo />
      <SiteNavToggler :active="showNav" @click="toggleNav" />
    </div>
    <SiteNav :show-nav="showNav" />
  </header>
</template>
