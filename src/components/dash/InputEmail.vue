<script setup lang="ts">
defineProps<{
  id: string
  label: string
  name: string
  placeholder?: string
  invalidFeedback?: string
}>()
</script>

<template>
  <div class="-mb-1">
    <label :for="id" class="hidden">{{ label }}</label>
    <input
      type="email"
      required
      :id="id"
      :name="name"
      :placeholder="placeholder"
      class="w-full border-b-2 border-primary bg-transparent"
    />
    <p
      v-if="invalidFeedback"
      class="InvalidFeedback mt-1 max-h-0 overflow-hidden text-xs text-red-500 duration-400"
    >
      {{ invalidFeedback }}
    </p>
  </div>
</template>

<style scoped>
input[type='email']::placeholder {
  @apply text-neutral-900/50 dark:text-neutral-100/50;
}

input[type='email']:invalid:not(:focus):not(:placeholder-shown) ~ .InvalidFeedback {
  @apply max-h-4;
}
</style>
