<script setup lang="ts">
import { Credits } from '@/types'

const title_aliases = {
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
}>()
</script>

<template>
  <li class="flex">
    <abbr :title="toTitle(title)" class="w-8 flex-shrink-0 after:content-[':']">
      {{ title_aliases[title] }}
    </abbr>
    <slot></slot>
  </li>
</template>
