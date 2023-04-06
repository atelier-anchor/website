<script setup lang="ts">
defineProps<{
  showNav: boolean
}>()
</script>

<template>
  <Transition>
    <nav
      v-show="showNav"
      class="absolute max-h-48 w-full overflow-hidden bg-white dark:bg-black sm:relative sm:!block"
    >
      <SiteNavLinks />
    </nav>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  @apply duration-400;
}

.v-enter-from,
.v-leave-to {
  @apply max-h-0;
}
</style>
