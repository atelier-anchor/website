<script setup lang="ts">
import type { Credits } from '@/data'

const aliases = {
  client: 'CL',
  lead_agency: 'LA',
  chief_editor: 'CE',
  author: 'A',
  translator: 'T',
  editor: 'E',
  creative_director: 'CD',
  art_director: 'AD',
  type_director: 'TD',
  designer: 'D',
  publisher: 'P',
}

const capitalize = (s: string) => s[0].toUpperCase() + s.slice(1)
const toTitle = (s: string) => capitalize(s.replace('_', ' '))

defineProps<{
  title: keyof Credits
  name: string
}>()
</script>

<template>
  <li class="flex">
    <div class="w-8 flex-shrink-0">
      <abbr :title="toTitle(title)" class="after:content-[':']">{{ aliases[title] }}</abbr>
    </div>
    <div>{{ name }}</div>
  </li>
</template>
