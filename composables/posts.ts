const data: Record<string, Post[]> = {
  works: [
    {
      id: 'agt',
      name: 'Arcade Game Typography',
      date: '2021-02-01',
      category: 'Translation',
      credits: [
        { title: 'translator', name: 'Willie Liu' },
        { title: 'editor', name: 'Xiyao Du' },
        { title: 'designer', name: 'Telos' },
        { title: 'publisher', name: 'Telos' },
      ],
      description: [
        '《街机游戏字体》中文版。本书聚焦于 1970 年代—2000 年代街机游戏中的 8×8 像素字体，是第一本关于游戏字体的专著。书中包含约 250 套具有代表性的字体，并附有深刻的评论。原版由字体设计师大曲都市以英文撰写，我们将其译为中文，并和出版方共同策划并执行了宣发工作。',
        'The Chinese edition of "Arcade Game Typography". Originally written by Toshi Omagari in English, this is a comprehensive book on 8×8 pixels fonts in arcade video games from \'70s to \'00s, showcasing around 250 fonts that represent the best of the industry. It is an interesting cross between typeface design and video game subjects, and the first book of its kind.',
      ],
      images: ['agt-1.webp', 'agt-2.webp', 'agt-3.webp', 'agt-4.webp'],
    },
    {
      id: 'ambitful',
      name: 'Ambitful',
      date: '2021-04-01',
      category: 'Visual identity',
      credits: [
        { title: 'client', name: 'Ambitful' },
        { title: 'art_director', name: 'Nagisa Chen' },
        { title: 'designer', name: 'Nagisa Chen' },
      ],
      description: [
        'Ambitful 是一家来自中国的摄影灯品牌。我们从光线出发，将其作为一个核心概念为他们创作了一款全新的字体标识。',
        'Ambitful is a Chinese photoflood lamp brand. We extracted elements from the concept of light and created a new logotype.',
      ],
      images: [
        'ambitful-1.webp',
        'ambitful-2.webp',
        'ambitful-3.webp',
        'ambitful-4.webp',
        'ambitful-5.webp',
      ],
    },
    {
      id: 'black-box',
      name: 'Dinkie Bitmap Black Box',
      date: '2020-09-01',
      category: 'Product design',
      credits: [
        { title: 'client', name: '3type' },
        { title: 'art_director', name: 'Nagisa Chen' },
        { title: 'designer', name: ['Nagisa Chen', 'Willie Liu'] },
      ],
      description: [
        '字体，本质上是基于信息载体的数字产品，在数字时代以虚拟方式出售并不奇怪。为字体准备物理包装是为了获得一种埋在数字浪潮下的真实感。它代表了一种与字体精神一致的复古情结。「像素」和「8×8」，源自「Dinkie Bitmap」的设计尺度，是我们打破数字世界壁垒所需要的一切。',
        'Fonts, intrinsically digital products based on packages of information, are unsurprisingly sold in a virtual manner in the digital age. To prepare a physical packaging for a font is to fetch a sense of reality buried under the digital tide. It represents a retro complex that is in consistency with the typeface\'s ethos. "Pixels" and "8×8", themes derived from "Dinkie Bitmap", are all we need to break the walls of the digital world.',
      ],
      images: [
        'black-box-1.webp',
        'black-box-2.webp',
        'black-box-3.webp',
        'black-box-4.webp',
        'black-box-5.webp',
      ],
    },
    {
      id: 'chen-shi-fu-hua',
      name: '尘世浮华',
      date: '2020-10-01',
      category: 'Graphic design',
      exclude: true,
      credits: [
        { title: 'client', name: 'Guiyang WOW' },
        { title: 'art_director', name: 'Nagisa Chen' },
        { title: 'designer', name: 'Nagisa Chen' },
      ],
      images: ['chen-shi-fu-hua-1.webp', 'chen-shi-fu-hua-2.webp'],
    },
    {
      id: 'dangxia-tiu',
      name: 'This is Us',
      date: '2021-10-01',
      category: 'Visual identity, motion graphic',
      exclude: 'carousel',
      credits: [
        { title: 'client', name: 'Dangxia Channel' },
        { title: 'art_director', name: 'Willie Liu' },
        { title: 'designer', name: ['Willie Liu', 'Money Su', 'Leove Li'] },
      ],
      description: [
        '《This is Us》是当下频道推出的一档聚焦年轻人新职业的季播栏目，第四季聚焦于「两个同岁年轻人不同的职业状貌」，特色包括「职业科普」、「选择反思」和「隔空对话」。我们为这一季《This is Us》设计了全新的片名字标，以此为基础制定了整季节目的视觉风格、动画表现和排版规范，并参与了片中动画部分的制作。',
        '"This is Us", produced by Dangxia Channel, is a series show focusing on professional choices of the younger generation in China. atelierAnchor designs for the program its new title logo, visual identity, animation storyboard, typographic guidelines, as well as its post-production motion graphics.',
        '➡ [观看系列节目 / Watch the series](https://space.bilibili.com/32360194/channel/collectiondetail?sid=172)',
      ],
      images: [
        'dangxia-tiu-1.webp',
        'dangxia-tiu-2.webp',
        'dangxia-tiu-3.webp',
        'dangxia-tiu-4.webp',
        'dangxia-tiu-5.webp',
      ],
    },
    {
      id: 'double-win',
      name: 'Double Win',
      date: '2021-07-01',
      category: 'Visual identity',
      credits: [
        { title: 'client', name: 'Double Win' },
        { title: 'lead_agency', name: 'LxU' },
        { title: 'type_director', name: 'Willie Liu' },
        { title: 'designer', name: ['Willie Liu', 'Nagisa Chen'] },
      ],
      description: [
        '品牌与粉丝之间的互动，使品牌的昵称本身的变成了一个重要的记忆点。基于粉丝给品牌的昵称「大波纹」，我们将「大」与原有 logo 的设计中的「星形」提取出来，在 W 与「星形」组合的空间中创造出「大」的负形，将其视为品牌的图形识别元素，它既是 logotype 的构成组件，也是一个独立的图形。同时，我们将「波纹」作为整个品牌视觉系统中最具扩展性的元素推广到 logotype 的设计细节以及其他品牌视觉的字体排印设计中，为其增添了新鲜、活泼的气质。',
        'The interaction between a brand and its customers plays an important role in brand communication. Based on the nickname "大波纹" (Big Ripple) given to the coffee brand Double Win by its ardent customers, we extract visual features from the character "大" (Big) and the star shape in its original logo, creating a negative shape of "大" in combination with the whites in "W" and the star above, the most crucial identity of the brand. Meanwhile we forward the idea of "Ripple" as the extensive element to the entire brand visual system, including wavy features in the new logotype and other typographic perks in graphics, adding a fresh and lively look to the brand.',
      ],
      images: [
        'double-win-1.webp',
        'double-win-2.webp',
        'double-win-3.webp',
        'double-win-4.webp',
        'double-win-5.webp',
        'double-win-6.webp',
        'double-win-7.webp',
      ],
      videos: [{ src: 'double-win-8.webm', poster: 'double-win-8-poster.webp' }],
    },
    {
      id: 'freds-inside',
      name: 'Freds Inside',
      date: '2018-04-01',
      category: 'Motion graphic',
      credits: [
        { title: 'client', name: 'Candybook' },
        { title: 'art_director', name: 'Willie Liu' },
        { title: 'designer', name: 'Willie Liu' },
      ],
      description: [
        '为展览制作的 AR 插画。参观者通过特定的手机应用程序观察两件日常用品——加湿器和蓝牙音箱，会发现其中藏着一群被称作 Fred 的白色生物，不停工作，驱动它们的运转。',
        'AR illustrations made for an exhibition. The hardworking creatures inside the humidifier and the bluetooth speaker could be observed only when you see through a specific AR app.',
      ],
      images: [
        'freds-inside-1.webp',
        'freds-inside-2.webp',
        'freds-inside-3.webp',
        'freds-inside-4.webp',
      ],
    },
    {
      id: 'g3',
      name: 'Glyphs 3 Event',
      date: '2020-11-01',
      category: 'Motion design, graphic design',
      credits: [
        { title: 'client', name: 'Glyphs' },
        { title: 'art_director', name: 'Nagisa Chen' },
        { title: 'designer', name: ['Nagisa Chen', 'Leove Li'] },
      ],
      description: [
        'Glyphs 是一款广受好评的字体编辑器。我们为它第三个版本更新的发布会提供了设计支持。为此，我们聚集了 Glyphs 在字体设计、平面设计、动态图形设计、UX 设计等领域的用户。',
        'Glyphs is a well-received font editor. We have provided design of prints event for its third version. We have gathered Glyphs users in the fields of type design, graphic design, motion graphic design, UX design, etc.',
      ],
      images: ['g3-1.webp', 'g3-2.webp', 'g3-3.webp', 'g3-4.webp'],
      videos: [
        { src: 'g3-5.webm', poster: 'g3-5-poster.webp' },
        { src: 'g3-6.webm', poster: 'g3-6-poster.webp' },
      ],
    },
    {
      id: 'kuusi',
      name: 'Kuusi Sans Scented Candle',
      date: '2020-12-01',
      category: 'Graphic design',
      credits: [
        { title: 'client', name: '3type' },
        { title: 'art_director', name: 'Nagisa Chen' },
        { title: 'designer', name: ['Nagisa Chen', 'Denise Dou'] },
      ],
      description: [
        '这款字体是由来自芬兰的字体设计师窦颖秋创作的。为了它的发布，我们以「冬日的优雅」为概念制作了一个礼盒。使用香薰蜡烛作为概念的载体，将字体的创作起点和精神以实物的形式传递。',
        'This typeface was created by Denise Dou living in Finland. For its release we made a gift box based on the concept of "Elegance in Winter". Using scented candles as the concept\'s carrier, the creativity and ethos of the typeface are delivered in the form of physical objects.',
      ],
      images: ['kuusi-1.webp', 'kuusi-2.webp', 'kuusi-3.webp', 'kuusi-4.webp', 'kuusi-5.webp'],
    },
    {
      id: 'out-of-mountain',
      name: 'Out of Mountain',
      date: '2021-03-01',
      category: 'Book design',
      credits: [
        { title: 'client', name: 'Guiyang WOW' },
        { title: 'art_director', name: 'Nagisa Chen' },
        { title: 'designer', name: ['Nagisa Chen', 'Zhiqian Li'] },
      ],
      description: [
        '我们从杂志的立意中提取了贵州人这种取自于「山地」的坚韧，挑选了近代贵阳的城市风貌之一的传统招牌字体——行楷。在全书的视觉概念上，将地图本身作为一个设计的概念进行延展。它既是一本真正意义上的地图，也是一本看起来不太像地图的书。山地之上耸立的建筑，地图之中包裹的文字。它将成为这座城市的昨日、今日、明日，直至未来。',
        "We extracted the tenacity of Guizhou people from the \"mountain\" from the conception of the magazine, and selected Xingkai, one of the traditional signature typeface of Guiyang's urban style in modern times. In the visual concept of the whole book, the map as a design concept. It is not only a map in the true sense, but also a book that doesn't look like a map. Buildings towering above the mountains, text wrapped in the map. It will become the city's yesterday, today, tomorrow, and into the future.",
      ],
      images: [
        'out-of-mountain-1.webp',
        'out-of-mountain-2.webp',
        'out-of-mountain-3.webp',
        'out-of-mountain-4.webp',
        'out-of-mountain-5.webp',
      ],
    },
    {
      id: 'psa',
      name: 'PSA Model',
      date: '2019-10-01',
      category: 'Product design',
      credits: [
        { title: 'client', name: 'PSA' },
        { title: 'art_director', name: 'Willie Liu' },
        { title: 'designer', name: 'Willie Liu' },
      ],
      description: [
        '上海当代艺术博物馆的拼插模型，由激光切割工艺制造，材质为椴木层板和亚克力板，充分还原建筑的造型特征。模型采用零部件彼此穿插咬合的设计，拼装过程简单安全，无需胶水。',
        'A miniature PSA model that could be assembled by the consumers themselves. Made of laser-cut plywood and acrylic plates.',
      ],
      images: ['psa-1.webp', 'psa-2.webp', 'psa-3.webp', 'psa-4.webp', 'psa-5.webp'],
    },
    {
      id: 'receipt-poster',
      name: 'Receipt Poster',
      date: '2021-06-01',
      category: 'Graphic design',
      credits: [
        { title: 'art_director', name: 'Nagisa Chen' },
        { title: 'designer', name: ['Willie Liu', 'Nagisa Chen'] },
      ],
      images: [
        'receipt-poster-1.webp',
        'receipt-poster-2.webp',
        'receipt-poster-3.webp',
        'receipt-poster-4.webp',
      ],
    },
    {
      id: 'vip',
      name: 'Virtual Immunization Project',
      date: '2021-08-01',
      category: 'Graphic design, motion graphic',
      credits: [
        { title: 'client', name: 'Sicheng Wang' },
        { title: 'designer', name: 'Nagisa Chen' },
      ],
      images: ['vip-1.webp', 'vip-2.webp'],
      videos: [{ src: 'vip-3.webm', poster: 'vip-3-poster.webp' }],
    },
  ],
  typefaces: [
    {
      id: 'dinkie-bitmap',
      name: 'Dinkie Bitmap',
      date: '2020-09-01',
      category: 'Type design',
      exclude: 'carousel',
      credits: [
        { title: 'type_director', name: 'Willie Liu' },
        { title: 'designer', name: 'Willie Liu' },
      ],
      description: [
        '丁卯点阵体的设计初衷是探索小尺寸像素汉字的可能性，以此致敬将中文世界带入信息化时代的先驱们。',
        '如果您想要咨询「丁卯点阵体」的商用授权事宜、购买授权或进行询价，请向 [dinkie<wbr>bit<wbr>map@<wbr>atelier-<wbr>anchor.<wbr>com](mailto:licensing@atelier-anchor.com) 发送邮件说明您的需求，我们将尽快回复。',
        'Dinkie Bitmap is a pixel typeface that explores the limit of Chinese legibility. It is our sincerest tribute to the pioneers of Chinese Information technology, and their remarkable works.',
        'If you would like to know our commercial licensing options for Dinkie Bitmap or purchase a license, please write to [dinkie<wbr>bit<wbr>map@<wbr>atelier-<wbr>anchor.<wbr>com](mailto:licensing@atelier-anchor.com) stating your intended use of the font. We will get back to you as soon as possible.',
        '➡ [试用版下载 / Trial version download](/downloads/DinkieBitmap_Demo_v1_100.zip)',
      ],
      images: [
        'dinkie-bitmap-1.{light,dark}.svg',
        'dinkie-bitmap-2.{light,dark}.svg',
        'dinkie-bitmap-3.{light,dark}.svg',
        'dinkie-bitmap-4.{light,dark}.svg',
        'dinkie-bitmap-5.{light,dark}.svg',
      ],
    },
    {
      id: 'sart-sans',
      name: 'Sart Sans',
      date: '2019-05-01',
      category: 'Type design',
      exclude: 'carousel',
      credits: [
        { title: 'type_director', name: 'Willie Liu' },
        { title: 'designer', name: 'Willie Liu' },
      ],
      description: [
        '一款标题字体，灵感来自 1960 年代中国大庆「石油大会战」期间的手绘标语。字体名「Sart」为大庆的别称「萨尔图」，源自蒙古语「月亮之地」。',
        'A display typeface inspired by the hand-paint slogans during the 1960s "Big Battle for Oil" in Daqing, China. The name comes from the Mongolian word "Sart", which means "Land of moon".',
      ],
      images: [
        'sart-sans-1.{light,dark}.svg',
        'sart-sans-2.{light,dark}.svg',
        'sart-sans-3.{light,dark}.svg',
        'sart-sans-4.{light,dark}.svg',
        'sart-sans-5.{light,dark}.svg',
      ],
    },
    {
      id: 'smiley-sans',
      name: 'Smiley Sans',
      date: '2022-11-15',
      category: 'Type design',
      exclude: 'carousel',
      credits: [
        { title: 'art_director', name: 'Nagisa Chen' },
        {
          title: 'designer',
          name: ['oooooohmygosh', 'Nagisa Chen', 'Janine Sui', 'Heda Shi', 'Jian Li'],
        },
      ],
      description: [
        '得意黑是一款在人文观感和几何特征中寻找视觉平衡的现代窄斜体。',
        'A condensed and oblique Chinese typeface seeking a visual balance between the humanist and the geometric.',
        '➡ [下载 / Download](https://github.com/atelier-anchor/smiley-sans/releases)',
      ],
      images: [
        'smiley-sans-1.{light,dark}.svg',
        'smiley-sans-2.{light,dark}.svg',
        'smiley-sans-3.{light,dark}.svg',
        'smiley-sans-4.{light,dark}.svg',
      ],
    },
    {
      id: 'tbh',
      name: 'tbh Typeface',
      date: '2020-01-01',
      category: 'Custom typeface',
      exclude: 'carousel',
      credits: [
        { title: 'client', name: 'tbh' },
        { title: 'creative_director', name: 'Zhengzhong Pan @Studio Bibliography' },
        { title: 'type_director', name: 'Nagisa Chen' },
        { title: 'designer', name: ['Zhengzhong Pan', 'Nagisa Chen'] },
      ],
      description: [
        'tbh 是一家来自上海的年轻家居品牌，Studio Bibliography 以「童趣」为核心概念创作了这款字体，并委托我们将其开发成了一款具有两轴可变的品牌可变字体，同时将该风格迁移到了中文标识的设计中。',
        'tbh is a young home furnishing brand based in Shanghai. Studio Bibliography create core concept as "childhood". They commissioned us to produce a new brand font, in a variable fonts format with two axes. This style migrated to the Chinese logotype.',
      ],
      images: [
        'tbh-1.{light,dark}.svg',
        'tbh-2.{light,dark}.svg',
        'tbh-3.{light,dark}.svg',
        'tbh-4.{light,dark}.svg',
        'tbh-5.webp',
        'tbh-6.webp',
      ],
    },
  ],
  dash: [
    {
      id: 'dash-0',
      name: 'dash #0',
      date: '2022-03-01',
      category: 'Self-publishing',
      credits: [
        { title: 'chief_editor', name: 'Xiyao Du' },
        {
          title: 'author',
          name: ['Heshan Huang', 'Chen Li', 'Willie Liu', 'Money Su', 'Zihao Tan', 'Yanjun Zhang'],
        },
        { title: 'editor', name: ['Chen Li', 'Money Su'] },
        { title: 'designer', name: ['Nagisa Chen', 'Chen Li', 'Willie Liu'] },
      ],
      description: [
        '本期试刊号讨论的主题是城市生活中的文字，街道、店铺、招贴、广告等属于公共空间的文字，我们邀请了四位创作者在不同的空间场域中游移，探索城市公共空间内字体辐射出的多样表达，将文字从书写的工具，转换为被书写的主体；而「逐层」是我们的编辑思路——你会在本期 dash 中发现对文字的图层堆叠，对层层累积视觉印象的解剖，还有对时空、记忆、社会肌理的深度层析。除此之外，本期试刊号还有一本「破折号」别册——对于整本刊物来说，别册就是一个破折号，延续、连接、打断、转折、补充。',
        'This trial issue of dash spotlights words in cityscape --- characters, signs and types you see on streets, storefronts, building facades, promo posters, product packages and other overlooked urban environments. Our contributors wander in different typographic spaces, presenting four dashing articles and a carefully-curated photography booklet. "Layers" is our editorial echo in this issue, as you will see it recurrently in both the zine\'s design and contents.',
      ],
      images: [
        'dash-0-1.webp',
        'dash-0-2.webp',
        'dash-0-3.webp',
        'dash-0-4.webp',
        'dash-0-5.webp',
        'dash-0-6.webp',
        'dash-0-7.webp',
        'dash-0-8.webp',
        'dash-0-9.webp',
        'dash-0-10.webp',
        'dash-0-11.webp',
      ],
    },
  ],
}

export function usePosts(section?: string) {
  if (!section) {
    const { params } = useRoute()
    section = params.section as string
  }
  return data[section]
    ?.filter(({ exclude }) => exclude !== true)
    .sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0))
    .reverse()
}

export function usePost(section?: string, id?: string) {
  if (!section || !id) {
    const { params } = useRoute()
    section = params.section as string
    id = params.id as string
  }
  return data[section]?.find((post) => post.id === id)
}

export function useQuery(section: string, id?: string) {
  return {
    isValidSection: section in data,
    isValidPost: data[section]?.some((post) => post.id === id),
  }
}

export function useCarouselPosts() {
  const flat = <T>(array: T[][]): T[] => array.reduce((acc, value) => acc.concat(value), [])
  const shuffle = <T>(array: T[]) =>
    array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  const posts = flat(Object.values(data))
  return shuffle(posts.filter(({ exclude }) => !exclude))
}
