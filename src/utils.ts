import data from '@/data/posts.json'

const flat = <T>(array: T[][]): T[] => array.reduce((acc, value) => acc.concat(value), [])

const shuffle = <T>(array: T[]) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

export const parseMarkdown = (s: string) =>
  s
    // CJK punctuations
    .replace(/(——|……)/g, '<span class="cjk-punct">$1</span>')
    // Latin punctuations
    .replace(/---/g, '—')
    .replace(/"(.+?)"/g, '“$1”')
    .replace(/'/g, '’')
    // Fix CSS classes
    .replace(/class=“(.+?)”/g, 'class="$1"')
    // Links
    .replace(/\[(.+?@.+?)\]\((.+?@.+?)\)/g, '<a href="$2" style="hyphens: none">$1</a>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')

const posts = data as Record<string, Post[]>

export const getCarouselPosts = () =>
  shuffle(flat(Object.values(posts)).filter((post) => !post.exclude && !post.carousel_exclude))

export const getPosts = (section: string) =>
  posts[section]
    .filter(({ exclude }) => !exclude)
    .sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0))
    .reverse()

export const getPost = (section: string, id: string) =>
  posts[section].find((post) => post.id === id) as Post

export const isValidPost = (section: string, id: string) =>
  section in posts && !!getPost(section, id)
