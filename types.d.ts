export {}

declare global {
  export interface Credits {
    client?: string
    lead_agency?: string
    chief_editor?: string
    author?: string
    translator?: string
    editor?: string
    creative_director?: string
    art_director?: string
    type_director?: string
    designer?: string
    publisher?: string
  }

  export interface Video {
    src: string
    poster: string
  }

  export interface Post {
    id: string
    name: string
    date: string
    category: string
    exclude?: boolean
    carousel_exclude?: boolean
    credits: Credits
    description?: string[]
    images: string[]
    videos?: Video[]
  }
}
