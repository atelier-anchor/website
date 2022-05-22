<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SiteLogo from '@/components/SiteLogo.vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteNavBarHamburger from '@/components/SiteNavBarHamburger.vue'

const isNavOpen = ref(false)
const toggleNav = () => (isNavOpen.value = !isNavOpen.value)

onMounted(() => window.addEventListener('resize', () => (isNavOpen.value = false)))
</script>

<template>
  <header class="sticky h-fit sm:top-4 lg:top-8">
    <div class="flex justify-between items-center mb-4 sm:mb-8">
      <h1>
        <SiteLogo class="w-32 sm:w-40" />
      </h1>
      <SiteNavBarHamburger :active="isNavOpen" @click="toggleNav" />
    </div>
    <SiteNav :isNavOpen="isNavOpen" />
  </header>
</template>
