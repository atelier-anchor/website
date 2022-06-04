<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<template>
  <button
    class="NavBarHamburger font-anicons text-4xl text-primary duration-300 before:content-['A'] sm:hidden"
    :class="{ active }"
  ></button>
</template>

<style scoped>
.NavBarHamburger {
  font-variation-settings: 'TIME' 1;
}

.NavBarHamburger.active {
  font-variation-settings: 'TIME' 100;
}
</style>
