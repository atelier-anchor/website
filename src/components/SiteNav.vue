<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navLinks = ['works', 'typefaces', 'dash', 'about']

defineProps<{
  isNavOpen: boolean
}>()
</script>

<template>
  <Transition>
    <nav class="max-h-48 overflow-hidden sm:!block" v-show="isNavOpen">
      <ul>
        <li v-for="link in navLinks">
          <h2 class="mb-2 text-3xl">
            <RouterLink :to="{ name: link }">{{ link }}</RouterLink>
          </h2>
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
