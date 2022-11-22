<script setup lang="ts">
import { useRoute } from 'vue-router'
import { dash } from '@/data'
import ColumnContainer from '@/components/ColumnContainer.vue'
import BaseBlock from '@/components/BaseBlock.vue'
import LinkFigure from '@/components/LinkFigure.vue'
import DashGet from '@/components/dash/DashGet.vue'
import PostMeta from '@/components/post/PostMeta.vue'

const route = useRoute()
const to = (id: string) => `${route.path}/${id}`

const data = {
  'about dash': {
    component: BaseBlock,
    data: [
      'dash 是关于文字的视觉文化志，不定期更新。每期我们都会择取一个主题，通过独特的编辑思路和设计形式呈现给读者。我们希望能发现司空见惯中的不同寻常，连结跨领域、跨文化的声音，为创作者提供更广泛、更巧妙、更多元的视角。',
      'dash 通过电子版和实体书两种媒介发行。纸质版可以通过我们合作的实体书店或其网店购买，电子版在下方填写邮件地址即可订阅——不过，你得到的数字文件会带有某种形式的缺损，正如所有的虚拟物一样。',
      'dash is an irregularly-published zine about type, typography, design and visual culture. Each issue is brought to you in both physical and virtual format, showcasing a selected theme through unique editorial curation and layout design. dash aims to see the unseen and speak the unspoken, connecting cross-expertise and cross-cultural voices while giving designers and creators in all fields broader, subtler, and more diverse perspectives.',
    ],
  },
  'get dash': {
    component: DashGet,
    data: {
      printed: {
        summary: '纸质版购买 / Printed version available in:',
        stores: [
          { name: 'art book in China', url: 'https://j.youzan.com/K74_iB' },
          { name: 'Combo 书店', url: 'https://k.youshop10.com/d8uszPSI' },
          { name: 'postpostspace', url: 'https://k.youshop10.com/ClQ6KyGh' },
          { name: 'Text&Image 梯书店', url: 'https://m.tb.cn/h.fNUZ8G5?tk=2XHe24lSFcM' },
          { name: '半层书店', url: 'https://k.youshop10.com/d-0fYNcv' },
          { name: '摸摸艺术书', url: 'https://k.youshop10.com/47fxD233' },
          { name: '群岛 BOOKS', url: 'https://k.youshop10.com/iMHppbus' },
          { name: '香蕉鱼书店', url: 'https://m.tb.cn/h.fNsZL9E?tk=6Gh62UQAqFL' },
          { name: '野狗商店', url: 'https://k.youshop10.com/loehnj7O' },
          { name: '一爿旧店', url: 'https://m.tb.cn/h.fnv1L81?tk=3Pft2Up46Coi' },
          { name: '有个计划 LittlePlan', url: 'https://k.youshop10.com/8c2OfXQT' },
          { name: '附近书店' },
          { name: '乐开书店' },
          { name: '三克岛図書館' },
          { name: '無早 nomorning' },
        ],
      },
      digital: {
        summary: '电子版订阅 / Digital version subscription:',
        emailLabel: 'email address',
        submitLabel: 'subscribe',
        notice:
          '由于邮箱过滤机制可能因用户而异，建议不要使用 163、126、yeah 等邮箱。如果您没有收到邮件，请留意垃圾邮件（spam）文件夹或垃圾箱。如果仍然没有收到，可联络 [dash@<wbr>atelier-<wbr>anchor.<wbr>com](mailto:dash@atelier-anchor.com) 解决。',
      },
    },
  },
}
</script>

<template>
  <ColumnContainer v-for="(item, name) in data" is="section">
    <template #left>
      <h2 class="text-2xl lg:sticky lg:top-8">{{ name }}</h2>
    </template>
    <template #right>
      <component :is="item.component" :data="item.data" />
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
