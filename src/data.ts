export type Numberish = number | string

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

type ImageType = 'webp' | 'jpg' | 'png' | 'gif' | 'svg'

export interface Image {
  name: string
  type: ImageType[]
  dark?: Boolean
}

export interface Video {
  source: string
  poster: string
}

export interface Work {
  name: string
  date: string
  type: string
  exclude?: boolean
  carousel_exclude?: boolean
  credits: Credits
  images: Image[]
  videos?: Video[]
  description?: string[]
}
