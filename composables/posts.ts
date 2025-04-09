import _data from 'assets/data.json'
const data = _data as Record<string, Post[]>

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
  const posts = flat([data.works, data.typefaces] as Post[][])
  return shuffle(posts.filter(({ exclude }) => !exclude))
}
