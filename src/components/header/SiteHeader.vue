<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteLogo from '@/components/header/SiteLogo.vue'
import SiteNav from '@/components/header/SiteNav.vue'
import SiteNavBarHamburger from '@/components/header/SiteNavBarHamburger.vue'

const isNavOpen = ref(false)
const toggleNav = () => (isNavOpen.value = !isNavOpen.value)
const closeNav = () => (isNavOpen.value = false)

const route = useRoute()
watch(route, closeNav)

onMounted(() => {
  const navElem = document.querySelector('nav')
  document.addEventListener('click', (e) => {
    if (navElem && e.clientY > navElem.offsetTop + navElem.offsetHeight) closeNav()
  })
})
</script>

<template>
  <header class="sticky top-0 z-10 h-fit bg-white py-4 dark:bg-black lg:py-8">
    <div class="flex items-center justify-between">
      <SiteLogo />
      <SiteNavBarHamburger :active="isNavOpen" @click="toggleNav" />
    </div>
    <SiteNav :isNavOpen="isNavOpen" />
  </header>
</template>
