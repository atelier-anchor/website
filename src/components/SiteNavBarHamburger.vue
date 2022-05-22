<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<template>
  <button
    class="NavBarHamburger text-4xl text-primary duration-300 sm:hidden"
    :class="{ active }"
  ></button>
</template>

<style scoped>
.NavBarHamburger {
  font-family: 'Anicons Subset', sans-serif;
  font-variation-settings: 'TIME' 1;
}

.NavBarHamburger::before {
  content: 'A';
}

.NavBarHamburger.active {
  font-variation-settings: 'TIME' 100;
}
</style>
