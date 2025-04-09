const capitalize = (s: string) => s[0]?.toUpperCase() + s.slice(1).toLowerCase()

export const formatName = (s: string | string[]) => (Array.isArray(s) ? s.join(', ') : s)

export const formatCategory = (s: string | string[]) =>
  Array.isArray(s) ? capitalize(s.join(', ')) : s
