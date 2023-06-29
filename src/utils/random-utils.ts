const alphanumBase = 'abcdefghijklmnopqrstuvwyz0123456789'
// We need to duplicate the base string to have a longer string
// to avoid Math.random to return the same value twice
export const alphanum = alphanumBase.repeat(10)

export const getRandomAlphaNum = () => {
  const randomIndex = Math.floor(Math.random() * alphanum.length)
  return alphanum[randomIndex]
}

export const getRandomId = (prefix = '', suffix = '') => {
  return (prefix ? prefix + '-' : '') + getRandomString(5) + (suffix ? '-' + suffix : '')
}

export const getRandomString = (length: number) => {
  return Array.from({ length })
    .map(getRandomAlphaNum).join('')
}

export const repeatFn = <T, U>(
  length: number,
  func: (el?: T, i?: number, arr?: T[]) => U,
): U[] => {
  return Array.from({ length }).map((_, i) => func(undefined, i, undefined))
}
