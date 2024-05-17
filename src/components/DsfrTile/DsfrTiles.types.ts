import type { RouteLocationRaw } from 'vue-router'

export type DsfrTileProps = {
  title?: string
  imgSrc?: string
  svgPath?: string
  svgAttrs?: Record<string, unknown>
  description?: string
  details?: string
  disabled?: boolean
  horizontal?: boolean
  vertical?: 'md' | 'lg'
  to?: RouteLocationRaw
  titleTag?: string
  download?: boolean
  small?: boolean
  icon?: boolean
  noBorder?: boolean
  shadow?: boolean
  noBackground?: boolean
  grey?: boolean
}

export type DsfrTilesProps = {
  tiles?: (DsfrTileProps & { containerClass: string })[]
  horizontal?: boolean
}
