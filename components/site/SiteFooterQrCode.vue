<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <Transition>
    <div v-show="show" class="absolute bottom-12 transition-opacity lg:bottom-16">
      <img
        src="https://open.weixin.qq.com/qr/code?username=atelierAnchor"
        alt="atelierAnchor"
        width="128"
        height="128"
        class="h-32 w-32"
      />
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}
</style>
