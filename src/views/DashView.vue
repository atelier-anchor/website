<script setup lang="ts">
import { useRoute } from 'vue-router'
import { dash } from '@/data'
import ColumnContainer from '@/components/ColumnContainer.vue'
import LinkFigure from '@/components/LinkFigure.vue'
import DashGet from '@/components/dash/DashGet.vue'
import PostMeta from '@/components/post/PostMeta.vue'

const route = useRoute()
const to = (id: string) => `${route.path}/${id}`

const dashAbout = [
  'dash 是关于文字的视觉文化志，不定期更新。每期我们都会择取一个主题，通过独特的编辑思路和设计形式呈现给读者。我们希望能发现司空见惯中的不同寻常，连结跨领域、跨文化的声音，为创作者提供更广泛、更巧妙、更多元的视角。',
  'dash 通过电子版和实体书两种媒介发行。纸质版可以通过我们合作的实体书店或其网店购买，电子版在下方填写邮件地址即可订阅——不过，你得到的数字文件会带有某种形式的缺损，正如所有的虚拟物一样。',
  'dash is an irregularly-published zine about type, typography, design and visual culture. Each issue is brought to you in both physical and virtual format, showcasing a selected theme through unique editorial curation and layout design. dash aims to see the unseen and speak the unspoken, connecting cross-expertise and cross-cultural voices while giving designers and creators in all fields broader, subtler, and more diverse perspectives.',
]
</script>

<template>
  <ColumnContainer is="section">
    <template #left>
      <h2 class="text-2xl lg:sticky lg:top-8">about dash</h2>
    </template>
    <template #right>
      <p v-for="p in dashAbout" class="mb-4 sm:mb-8">{{ p }}</p>
    </template>
  </ColumnContainer>
  <ColumnContainer is="section">
    <template #left>
      <h2 class="text-2xl lg:sticky lg:top-8">get dash</h2>
    </template>
    <template #right>
      <DashGet />
    </template>
  </ColumnContainer>
  <ColumnContainer v-for="(item, id) in dash" is="article" class="items-center gap-0">
    <template #left>
      <PostMeta :work="item" :to="to(id)" class="hidden md:block" />
    </template>
    <template #right>
      <LinkFigure :image="item.images[0]" :to="to(id)" width="1920" height="1440" />
    </template>
  </ColumnContainer>
</template>
