<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { dash, works } from '@/data'
import { flat, shuffle } from '@/utils'
import LinkFigure from '@/components/LinkFigure.vue'

const route = useRoute()
const router = useRouter()

// const items = computed(() => shuffle(flat([works, dash].map(Object.entries))))
const items = computed(() => shuffle(Object.entries(works)))

const to = (id: string) => `${router.resolve(id in works ? 'works' : 'dash').path}/${id}`

const itemIndex = ref<number>(0)
const updateItemIndex = () => (itemIndex.value = (itemIndex.value + 1) % items.value.length)
onMounted(() => setInterval(updateItemIndex, 6000))
</script>

<template>
  <div class="relative">
    <Transition v-for="(entry, i) in items">
      <div v-if="itemIndex === i" class="w-full sm:absolute">
        <LinkFigure
          :image="entry[1].images[0]"
          :to="to(entry[0])"
          class="sm:h-[calc(100vh-2rem)] lg:h-[calc(100vh-4rem)]"
        />
      </div>
    </Transition>
  </div>
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

:deep(figure) {
  @apply h-full;
}

:deep(img) {
  @apply h-full w-full object-cover;
}
</style>
