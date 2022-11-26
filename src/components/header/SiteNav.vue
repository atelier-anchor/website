<script setup lang="ts">
import SiteNavItem from '@/components/header/SiteNavItem.vue'

const navLinks = ['works', 'typefaces', 'dash', 'about']

defineProps<{
  isNavOpen: boolean
}>()
</script>

<template>
  <Transition>
    <nav
      v-show="isNavOpen"
      class="absolute max-h-48 w-full overflow-hidden bg-white dark:bg-black sm:relative sm:!block"
    >
      <ul class="my-4 sm:mb-0">
        <li v-for="link in navLinks">
          <SiteNavItem :link="link" />
        </li>
      </ul>
    </nav>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  @apply duration-300;
}

.v-enter-from,
.v-leave-to {
  @apply max-h-0;
}
</style>
