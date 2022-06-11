export const flat = <T>(array: T[][]): T[] => array.reduce((acc, value) => acc.concat(value), []);

export const fromEntries = <T>(entries: [string, T][]) =>
  entries.reduce((res, [key, value]) => ((res[key] = value), res), {} as Record<string, T>)

export const shuffle = <T>(array: T[]) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
