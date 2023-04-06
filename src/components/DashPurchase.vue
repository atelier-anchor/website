<script setup lang="ts">
interface Store {
  name: string
  city?: string
  url?: string
}

const stores: Store[] = [
  { name: 'Combo 书店', city: '武汉', url: 'https://k.youshop10.com/d8uszPSI' },
  { name: 'postpostspace', city: '北京', url: 'https://k.youshop10.com/ClQ6KyGh' },
  { name: 'Text&Image 梯书店', city: '上海', url: 'https://m.tb.cn/h.fzJtERp' },
  { name: '半层书店', city: '上海', url: 'https://k.youshop10.com/d-0fYNcv' },
  { name: '假杂志图书馆', city: '宁波', url: 'https://m.tb.cn/h.U1H7UbZ' },
  { name: '摸摸艺术书 ', url: 'https://k.youshop10.com/47fxD233' },
  { name: '群岛 BOOKS', city: '上海', url: 'https://k.youshop10.com/iMHppbus' },
  { name: '尚文堂', city: '惠州', url: 'https://k.youshop10.com/4m=DZw0T' },
  { name: '無早 nomorning', city: '成都', url: 'https://k.youshop10.com/mXkRJJEL' },
  { name: '香蕉鱼书店', city: '上海', url: 'https://m.tb.cn/h.fzJHjbl' },
  { name: '野狗商店', city: '郑州', url: 'https://k.youshop10.com/loehnj7O' },
  { name: '一爿旧店', city: '舟山', url: 'https://m.tb.cn/h.fBthoCn' },
  { name: '有个计划 LittlePlan', city: '郑州', url: 'https://k.youshop10.com/8c2OfXQT' },
  { name: 'art book in China' },
  { name: 'Inside 艺术商店', city: '天津' },
  { name: 'Protopaper', city: '西安' },
  { name: '刺鱼书店', city: '北京' },
  { name: '附近书店', city: '昆明' },
  { name: '假杂志 SeP', city: '上海' },
  { name: '乐开书店', city: '上海' },
  { name: '三克岛図書館', city: '贵阳' },
  { name: '万花筒书店', city: '沈阳' },
  { name: '一介', city: '成都' },
  { name: '脏像素 Inky Pixel', city: '广州' },
]

const storeName = (s: Store) => (s.city ? `${s.name}（${s.city}）` : s.name)
</script>

<template>
  <ul class="grid list-disc lg:grid-cols-2">
    <li v-for="store in stores" class="ml-4">
      <a v-if="store.url" :href="store.url" target="_blank" class="after:content-['↗']">
        {{ storeName(store) }}
      </a>
      <template v-else>{{ storeName(store) }}</template>
    </li>
  </ul>
</template>
