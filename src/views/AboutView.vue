<script setup lang="ts">
import ColumnContainer from '@/components/ColumnContainer.vue'
import BaseBlock from '@/components/BaseBlock.vue'
import AboutServices from '@/components/about/AboutServices.vue'
import AboutTeam from '@/components/about/AboutTeam.vue'

const data = {
  mission: {
    component: BaseBlock,
    data: [
      '锚坞是一家以技术为基石的设计事务所，我们力求在复杂多变的创意行业里，为客户提供绝妙的想法和可靠的执行。在平面、字体、动效等领域的丰富经验促使我们时刻关注最前沿的技术动态，并广泛运用在展览、艺术、研究、出版和商业项目中。我们关注跨学科跨文化的设计实践，倡导建设聚焦新技术新思想的多元创意社区。',
      'atelierAnchor is a design studio based in Shanghai with an edge on crafts and technology. We aim to provide stunning ideas and reliable execution for our clients in the ever-changing creative scenes. Our extensive experience in graphic design, typeface development and motion graphics has sharpened our sensitivity to state-of-the-art technologies in the creative industry. We advocate an interdisciplinary and cross-cultural approach to design, and devote ourselves to building a diverse, forward-looking community with experimental thoughts and a keen interest in new technologies.',
    ],
  },
  services: {
    component: AboutServices,
    data: [
      {
        summary: '我们为客户和合作伙伴提供以下服务：',
        items: [
          '品牌设计 / 视觉识别',
          '字标 / 字体设计',
          '字体定制 / 字库产品开发',
          '产品包装开发 / 设计',
          '展览策划 / 设计、导视系统设计',
          '海报 / 手册设计、书籍装帧设计',
          '动态图形设计',
          '内容形象包装',
        ],
      },
      {
        summary: 'We offer the following services to our customers and collaborators:',
        items: [
          'Branding strategy & visual identity',
          'Logotype & typeface design ',
          'Packaging design',
          'Font customization & development',
          'Exhibition, curation & signage design',
          'Poster, brochure & book design',
          'Motion graphics',
        ],
      },
    ],
  },
  team: {
    component: AboutTeam,
    data: [
      {
        name: 'Nagisa Chen',
        avatar: { name: 'nagisa-chen', type: ['webp', 'jpg'] },
        titles: ['Co-founder', 'Graphic designer'],
      },
      {
        name: 'Willie Liu',
        avatar: { name: 'willie-liu', type: ['webp', 'jpg'] },
        titles: ['Co-founder', 'Type designer'],
      },
      {
        name: 'Xiyao Du',
        avatar: { name: 'xiyao-du', type: ['webp', 'jpg'] },
        titles: ['Co-founder', 'Academic director'],
      },
      {
        name: 'Chen Li',
        avatar: { name: 'chen-li', type: ['webp', 'jpg'] },
        titles: ['Graphic designer', 'Editor'],
      },
      {
        name: 'Money Su',
        avatar: { name: 'money-su', type: ['webp', 'jpg'] },
        titles: ['Graphic designer', 'Editor'],
      },
      {
        name: 'Xiangdong Zeng',
        avatar: { name: 'xiangdong-zeng', type: ['webp', 'jpg'] },
        titles: ['Engineer'],
      },
      {
        name: 'Shachō 🍗',
        avatar: { name: 'shacho', type: ['webp', 'jpg'] },
        titles: ['CEO'],
      },
    ],
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
</template>
