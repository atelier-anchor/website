export const flat = <T>(array: T[][]): T[] => array.reduce((acc, value) => acc.concat(value), [])

export const fromEntries = <T>(entries: [string, T][]) =>
  entries.reduce((res, [key, value]) => ((res[key] = value), res), {} as Record<string, T>)

export const shuffle = <T>(array: T[]) =>
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
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank">$1</a>')

export const types: Record<string, string> = {
  jpg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  svg: 'image/svg+xml',
  webp: 'image/webp',
  webm: 'video/webm',
}
