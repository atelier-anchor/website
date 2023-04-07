<script setup lang="ts">
const titleAliases = {
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
  author?: string
}>()
</script>

<template>
  <div class="flex">
    <dt class="w-8 flex-shrink-0 after:content-[':']">
      <abbr :title="toTitle(title)">
        {{ titleAliases[title] }}
      </abbr>
    </dt>
    <dd>{{ author }}</dd>
  </div>
</template>
