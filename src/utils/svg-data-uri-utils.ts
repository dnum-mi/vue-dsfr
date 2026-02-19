const SVG_DATA_URI_REGEX = /^data:image\/svg\+xml(?:;([^,]*))?,(.*)$/i
const DANGEROUS_SVG_TAGS_SELECTOR = 'script,foreignObject,iframe,object,embed,audio,video,canvas'
const DANGEROUS_ATTR_NAME_REGEX = /^on/i
const ARTWORK_ID_REGEX = /^artwork-(?:decorative|minor|major)$/

const decodeSvgDataUriPayload = (metadata: string, payload: string): string => {
  const isBase64 = metadata
    .toLowerCase()
    .split(';')
    .filter(Boolean)
    .includes('base64')

  return isBase64 ? globalThis.atob(payload) : decodeURIComponent(payload)
}

const sanitizeSvgElement = (svgElement: SVGElement): void => {
  svgElement.querySelectorAll(DANGEROUS_SVG_TAGS_SELECTOR).forEach(node => node.remove())

  const nodesToSanitize = [svgElement, ...Array.from(svgElement.querySelectorAll('*'))]
  nodesToSanitize.forEach((node) => {
    Array.from(node.attributes).forEach((attribute) => {
      const name = attribute.name.toLowerCase()
      const value = attribute.value.trim()

      if (DANGEROUS_ATTR_NAME_REGEX.test(name) || name === 'src' || name === 'style') {
        node.removeAttribute(attribute.name)
        return
      }

      if (value.toLowerCase().includes('javascript:')) {
        node.removeAttribute(attribute.name)
        return
      }

      if ((name === 'href' || name === 'xlink:href') && !value.startsWith('#')) {
        node.removeAttribute(attribute.name)
      }
    })
  })
}

const rewriteArtworkIds = (svgElement: SVGElement, suffix: string): void => {
  const idMap = new Map<string, string>()

  svgElement.querySelectorAll('[id]').forEach((node) => {
    const currentId = node.getAttribute('id')
    if (!currentId || !ARTWORK_ID_REGEX.test(currentId)) {
      return
    }
    const newId = `${currentId}-${suffix}`
    idMap.set(currentId, newId)
    node.setAttribute('id', newId)
  })

  if (idMap.size === 0) {
    return
  }

  svgElement.querySelectorAll('*').forEach((node) => {
    Array.from(node.attributes).forEach((attribute) => {
      let nextValue = attribute.value
      idMap.forEach((newId, currentId) => {
        nextValue = nextValue
          .replaceAll(`#${currentId}`, `#${newId}`)
          .replaceAll(`url(#${currentId})`, `url(#${newId})`)
      })
      if (nextValue !== attribute.value) {
        node.setAttribute(attribute.name, nextValue)
      }
    })
  })
}

export const sanitizeInlineSvgMarkupFromDataUri = (svgDataUri: string | undefined, idSuffix: string): string => {
  if (!svgDataUri || !globalThis.DOMParser || !globalThis.XMLSerializer) {
    return ''
  }

  const match = svgDataUri.match(SVG_DATA_URI_REGEX)
  if (!match) {
    return ''
  }

  try {
    const metadata = match[1] ?? ''
    const payload = match[2] ?? ''
    const decodedMarkup = decodeSvgDataUriPayload(metadata, payload)
    const parser = new DOMParser()
    const parsed = parser.parseFromString(decodedMarkup, 'image/svg+xml')
    const svgElement = parsed.documentElement

    if (svgElement.tagName.toLowerCase() !== 'svg') {
      return ''
    }

    sanitizeSvgElement(svgElement as unknown as SVGElement)
    rewriteArtworkIds(svgElement as unknown as SVGElement, idSuffix)

    return new XMLSerializer().serializeToString(svgElement)
  } catch {
    return ''
  }
}
