export const alphanum = 'abcdefghijklmnopqrstuvwyz0123456789'

export const getRandomAlphaNum = () => {
  const randomIndex = Math.floor(Math.random() * alphanum.length)
  return alphanum[randomIndex]
}

export const getRandomId = (prefix = '', suffix = '') => {
  return (prefix ? prefix + '-' : '') + getRandomString(5) + (suffix ? '-' + suffix : '')
}

export const getRandomString = length => {
  return Array.from({ length })
    .map(getRandomAlphaNum).join('')
}

export const repeatFn = (length, func) => {
  return Array.from({ length }).map(func)
}
