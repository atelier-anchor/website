export {}

declare global {
  type Category =
    | 'Book design'
    | 'Custom typeface'
    | 'Graphic design'
    | 'Motion graphic'
    | 'Product design'
    | 'Self-publishing'
    | 'Translation'
    | 'Type design'
    | 'Visual identity'

  type CreditTitle =
    | 'Art director'
    | 'Author'
    | 'Chief editor'
    | 'Client'
    | 'Creative director'
    | 'Designer'
    | 'Editor'
    | 'Lead agency'
    | 'Publisher'
    | 'Translator'
    | 'Type director'

  interface Credit {
    title: CreditTitle
    name: string | string[]
  }

  interface Video {
    src: string
    poster?: string
  }

  interface Post {
    id: string
    name: string
    date: string
    category: Category | Category[]
    exclude?: boolean | 'carousel'
    credits: Credit[]
    description?: string[]
    cover?: string
    images: string[]
    videos?: Video[]
  }
}
