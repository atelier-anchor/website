<script setup lang="ts">
const links = ['works', 'typefaces', 'dash', 'about']

defineProps<{
  show: boolean
}>()
</script>

<template>
  <Transition>
    <nav
      v-show="show"
      class="absolute max-h-48 w-full overflow-hidden bg-white transition-[max-height] duration-400 dark:bg-black sm:relative sm:!block"
    >
      <ul class="my-2 sm:mb-0 sm:mt-4">
        <li
          v-for="link in links"
          class="text-3xl"
          :class="{ 'text-primary': $route.path.includes(link) }"
        >
          <RouterLink :to="`/${link}`">{{ link }}</RouterLink>
        </li>
      </ul>
    </nav>
  </Transition>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  @apply max-h-0;
}
</style>
