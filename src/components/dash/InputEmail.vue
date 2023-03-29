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
      class="border-primary peer w-full border-b-2 bg-transparent placeholder-neutral-900/50 dark:placeholder-neutral-100/50"
    />
    <p
      v-if="invalidFeedback"
      class="duration-400 mt-1 max-h-4 overflow-hidden text-xs text-red-500 peer-placeholder-shown:max-h-0 peer-valid:max-h-0 peer-focus:max-h-0"
    >
      {{ invalidFeedback }}
    </p>
  </div>
</template>
