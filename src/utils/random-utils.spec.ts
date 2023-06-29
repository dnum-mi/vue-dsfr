import {
  getRandomString,
  getRandomAlphaNum,
  repeatFn,
} from './random-utils.js'

describe('Random-utils', () => {
  it('should return a random string of specified length Stan', () => {
    const length = 10

    const randomString = getRandomString(length)

    expect(randomString).toHaveLength(length)
  })

  it('should return a random alphanumeric character', () => {
    // Given

    // When
    const randomAlphaNum = getRandomAlphaNum()
    const randomAlphaNum2 = getRandomAlphaNum()
    const randomAlphaNum3 = getRandomAlphaNum()
    const randomAlphaNum4 = getRandomAlphaNum()

    // Then
    expect(randomAlphaNum).not.toBeUndefined()
    expect(randomAlphaNum + randomAlphaNum2).not.toBe(randomAlphaNum3 + randomAlphaNum4)
  })

  it('should repeat x times a specific function', () => {
    // Given
    const n = 5
    const fn = () => 42

    // When
    const results = repeatFn(n, fn)

    // Then
    expect(results).toBeInstanceOf(Array)
    expect(results).toEqual([42, 42, 42, 42, 42])
  })

  it('should return a random alphanumeric character', () => {
    // Given
    const times = 33

    // When
    const alphanums = repeatFn(times, getRandomAlphaNum)

    // Then
    expect(alphanums).not.toBeUndefined()
    expect(alphanums).toBeInstanceOf(Array)
    expect(alphanums).toHaveLength(times)
  })
})
