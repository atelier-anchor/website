export {}

declare global {
  type CreditTitle =
    | 'art_director'
    | 'author'
    | 'chief_editor'
    | 'client'
    | 'creative_director'
    | 'designer'
    | 'editor'
    | 'lead_agency'
    | 'publisher'
    | 'translator'
    | 'type_director'

  interface Credit {
    title: CreditTitle
    name: string | string[]
  }

  interface Video {
    src: string
    poster: string
  }

  interface Post {
    id: string
    name: string
    date: string
    category: string
    exclude?: boolean | 'carousel'
    credits: Credit[]
    description?: string[]
    images: string[]
    videos?: Video[]
  }
}
