import { sanitizeInlineSvgMarkupFromDataUri } from './svg-data-uri-utils'

describe('svg-data-uri-utils', () => {
  it('should sanitize dangerous SVG content', () => {
    const unsafeSvg = '<svg xmlns="http://www.w3.org/2000/svg" onload="alert(1)"><script>alert(1)</script><a href="javascript:alert(1)"><rect width="10" height="10" /></a></svg>'
    const svgDataUri = `data:image/svg+xml,${encodeURIComponent(unsafeSvg)}`

    const result = sanitizeInlineSvgMarkupFromDataUri(svgDataUri, 'suffix')

    expect(result).toContain('<svg')
    expect(result).not.toContain('onload=')
    expect(result).not.toContain('<script')
    expect(result).not.toContain('javascript:')
  })

  it('should rewrite DSFR artwork ids safely', () => {
    const svgWithArtworkIds = '<svg xmlns="http://www.w3.org/2000/svg"><defs><g id="artwork-decorative" /></defs><use href="#artwork-decorative" /><path clip-path="url(#artwork-decorative)" /></svg>'
    const svgDataUri = `data:image/svg+xml,${encodeURIComponent(svgWithArtworkIds)}`

    const result = sanitizeInlineSvgMarkupFromDataUri(svgDataUri, 'abc')

    expect(result).toContain('id="artwork-decorative-abc"')
    expect(result).toContain('href="#artwork-decorative-abc"')
    expect(result).toContain('url(#artwork-decorative-abc)')
  })

  it('should return empty string when data uri is invalid', () => {
    expect(sanitizeInlineSvgMarkupFromDataUri('data:image/png;base64,abc', 'x')).toBe('')
  })
})
