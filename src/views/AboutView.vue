<script setup lang="ts">
import AboutMission from '@/components/AboutMission.vue'
import AboutServices from '@/components/AboutServices.vue'
import AboutTeam from '@/components/AboutTeam.vue'

const data = {
  mission: {
    component: AboutMission,
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
        avatar: 'https://i.loli.net/2021/09/15/vTGrt3JXzCFIpbY.jpg',
        titles: ['Co-founder', 'Graphic designer'],
      },
      {
        name: 'Willie Liu',
        avatar: 'https://i.loli.net/2021/09/11/q2dnRBEzpVtkmYa.jpg',
        titles: ['Co-founder', 'Type designer'],
      },
      {
        name: 'Xiyao Du',
        avatar: 'https://i.loli.net/2021/09/11/2AhGFDSwTvWi3eM.jpg',
        titles: ['Co-founder', 'Academic director'],
      },
      {
        name: 'Chen Li',
        avatar: 'https://i.loli.net/2021/09/11/OgGEkB3Cp7h8KNS.jpg',
        titles: ['Graphic designer', 'Editor'],
      },
      {
        name: 'Money Su',
        avatar: 'https://i.loli.net/2021/09/11/T8g2wOmNYbBUGpK.jpg',
        titles: ['Graphic designer', 'Editor'],
      },
      {
        name: 'Xiangdong Zeng',
        avatar: 'https://i.loli.net/2021/09/11/kj8XHicO6NJLVfe.jpg',
        titles: ['Engineer'],
      },
      {
        name: 'Shachō 🍗',
        avatar: 'https://i.loli.net/2021/09/11/otN4awsfW6UbjxH.png',
        titles: ['CEO'],
      },
    ],
  },
}
</script>

<template>
  <section v-for="(item, name) in data" class="flex flex-col lg:flex-row gap-4 sm:gap-8">
    <div class="w-64 flex-shrink-0">
      <h2 class="text-2xl lg:sticky lg:top-8">{{ name }}</h2>
    </div>
    <component :is="item.component" :data="item.data" />
  </section>
</template>
