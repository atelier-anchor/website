export const parseMarkdown = (s: string) =>
  s
    // Latin punctuations
    .replace(/---/g, '—')
    .replace(/"(.+?)"/g, '“$1”')
    .replace(/'/g, '’')
    // CJK punctuations
    .replace(/(——|……)/g, '<span class="cjk-punct">$1</span>')
    // Links
    .replace(/\[(.+?@.+?)\]\((.+?@.+?)\)/g, '<a href="$2" class="hyphens-none">$1</a>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
