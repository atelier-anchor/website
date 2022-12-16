<script setup lang="ts">
import { computed } from 'vue'
import SectionItem from '@/components/section/SectionItem.vue'
import type { Work } from '@/components/post/PostView.vue'

const entries = computed(() =>
  Object.entries(props.items)
    .filter(([, item]) => !item.exclude)
    .sort(([, a], [, b]) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0))
    .reverse()
)

const props = defineProps<{
  items: Record<string, Work>
}>()
</script>

<template>
  <div class="flex flex-col gap-4 md:gap-8">
    <SectionItem v-for="[id, item] in entries" :id="id" v-bind="item" />
  </div>
</template>
