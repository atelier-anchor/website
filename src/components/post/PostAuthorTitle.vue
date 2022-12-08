<script setup lang="ts">
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
  title: string
}>()
</script>

<template>
  <li class="flex">
    <abbr :title="toTitle(title)" class="w-8 flex-shrink-0 after:content-[':']">
      {{ title_aliases[title as keyof typeof title_aliases] }}
    </abbr>
    <slot></slot>
  </li>
</template>
