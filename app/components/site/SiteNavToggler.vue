<script setup lang="ts">
defineProps<{
  active: boolean
}>()
</script>

<template>
  <button
    class="font-anicons text-4xl font-normal text-primary duration-400 vf-['TIME'_1] before:content-['A'] hover:no-underline aria-expanded:vf-['TIME'_100] sm:hidden"
    aria-label="Toggle navigation"
    :aria-expanded="active"
  ></button>
</template>
