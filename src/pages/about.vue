<script setup lang="ts">
const mission = [
  '锚坞是一家以技术为基石的设计事务所，我们力求在复杂多变的创意行业里，为客户提供绝妙的想法和可靠的执行。在平面、字体、动效等领域的丰富经验促使我们时刻关注最前沿的技术动态，并广泛运用在展览、艺术、研究、出版和商业项目中。我们关注跨学科跨文化的设计实践，倡导建设聚焦新技术新思想的多元创意社区。',
  'atelierAnchor is a design studio based in Shanghai with an edge on crafts and technology. We aim to provide stunning ideas and reliable execution for our clients in the ever-changing creative scenes. Our extensive experience in graphic design, typeface development and motion graphics has sharpened our sensitivity to state-of-the-art technologies in the creative industry. We advocate an interdisciplinary and cross-cultural approach to design, and devote ourselves to building a diverse, forward-looking community with experimental thoughts and a keen interest in new technologies.',
]
const services = [
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
]
</script>

<template>
  <BaseContainer is="section" class="mb-4 sm:mb-8">
    <template #left>
      <h2 class="text-2xl md:sticky md:top-4 lg:top-8">mission</h2>
    </template>
    <template #right>
      <p v-for="p in mission">{{ p }}</p>
    </template>
  </BaseContainer>
  <BaseContainer is="section" class="mb-4 sm:mb-8">
    <template #left>
      <h2 class="text-2xl md:sticky md:top-4 lg:top-8">service</h2>
    </template>
    <template #right>
      <template v-for="service in services">
        <p>{{ service.summary }}</p>
        <ul class="list-disc last:mb-0 sm:mb-2">
          <li v-for="item in service.items" class="ml-4">{{ item }}</li>
        </ul>
      </template>
    </template>
  </BaseContainer>
  <BaseContainer is="section">
    <template #left>
      <h2 class="text-2xl md:sticky md:top-4 lg:top-8">team</h2>
    </template>
    <template #right>
      <AboutTeam />
    </template>
  </BaseContainer>
</template>
