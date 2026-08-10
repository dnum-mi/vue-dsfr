import type { IconifyJSON } from '@iconify/vue'

import { resolveOfflineIcon } from './resolve-offline-icon'

const collections: IconifyJSON[] = [{
  height: 24,
  icons: {
    'flag-line': {
      body: '<path d="M3 3h18v18H3z" />',
    },
  },
  prefix: 'ri',
  width: 24,
}]

describe('resolve-offline-icon', () => {
  it('should resolve an icon using the colon-separated format (prefix:name)', () => {
    const icon = resolveOfflineIcon('ri:flag-line', collections)

    expect(icon).toEqual({
      body: '<path d="M3 3h18v18H3z" />',
      height: 24,
      left: 0,
      top: 0,
      width: 24,
    })
  })

  it('should resolve an icon using the hyphen-separated format (prefix-name), as used by DsfrButton/DsfrTag/etc.', () => {
    const icon = resolveOfflineIcon('ri-flag-line', collections)

    expect(icon).toEqual({
      body: '<path d="M3 3h18v18H3z" />',
      height: 24,
      left: 0,
      top: 0,
      width: 24,
    })
  })

  it('should return null when the icon is absent from the local collections', () => {
    expect(resolveOfflineIcon('ri:missing-icon', collections)).toBeNull()
    expect(resolveOfflineIcon('ri-missing-icon', collections)).toBeNull()
  })

  it('should return null when the collection prefix is unknown', () => {
    expect(resolveOfflineIcon('unknown:flag-line', collections)).toBeNull()
    expect(resolveOfflineIcon('unknown-flag-line', collections)).toBeNull()
  })

  it('should return null when the name is malformed', () => {
    expect(resolveOfflineIcon('flagline', collections)).toBeNull()
    expect(resolveOfflineIcon(':flag-line', collections)).toBeNull()
    expect(resolveOfflineIcon('ri:', collections)).toBeNull()
    expect(resolveOfflineIcon('-flag-line', collections)).toBeNull()
    expect(resolveOfflineIcon('ri-', collections)).toBeNull()
  })
})
