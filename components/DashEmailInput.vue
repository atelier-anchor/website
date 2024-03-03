<script setup lang="ts">
defineProps<{
  id: string
  label: string
  name: string
  placeholder?: string
  feedback?: string
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
      class="peer w-full border-b-2 border-primary bg-transparent placeholder-white/50"
    />
    <p
      v-if="feedback"
      class="mt-1 max-h-4 overflow-hidden text-xs text-red-500 duration-400 peer-placeholder-shown:max-h-0 peer-valid:max-h-0 peer-focus:max-h-0"
    >
      {{ feedback }}
    </p>
  </div>
</template>
