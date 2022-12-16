<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { flat, shuffle } from '@/utils'
import { dash, works } from '@/data.json'
import LinkFigure from '@/components/LinkFigure.vue'
import type { Work } from '@/components/post/PostView.vue'

const items = computed(() => shuffle(flat([works, dash].map(Object.entries) as [string, Work][][])))
const itemIndex = ref<number>(0)
const updateItemIndex = () => (itemIndex.value = (itemIndex.value + 1) % items.value.length)
onMounted(() => setInterval(updateItemIndex, 6000))
</script>

<template>
  <ClientOnly>
    <Transition v-for="([id, { name, images }], i) in items">
      <div
        v-show="itemIndex === i"
        class="absolute top-0 flex h-full items-center overflow-hidden py-4 lg:py-8"
      >
        <LinkFigure
          :image="images[0]"
          :to="`${$router.resolve(id in works ? 'works' : 'dash').path}/${id}`"
          :title="name"
          width="1920"
          height="1440"
        />
      </div>
    </Transition>
  </ClientOnly>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  @apply duration-[2s];
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}

:deep(img) {
  @apply min-h-[max(50vh,200px)] object-cover sm:h-full;
}
</style>
