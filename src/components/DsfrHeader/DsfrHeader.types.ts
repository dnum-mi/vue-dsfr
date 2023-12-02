import type { HTMLAttributes, StyleValue } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type DsfrHeaderMenuLinkProps = {
  button?: boolean
  icon?: string
  iconAttrs?: HTMLAttributes
  iconRight?: boolean
  label?: string
  target?: string
  onClick?: ($event: MouseEvent) => void
  to?: RouteLocationRaw
  href?: string
}

export type DsfrHeaderProps = {
  serviceTitle?: string
  serviceDescription?: string
  homeTo?: string
  logoText?: string | string[]
  modelValue?: string
  operatorImgAlt?: string
  operatorImgSrc?: string
  operatorImgStyle?: StyleValue
  placeholder?: string
  quickLinks?: DsfrHeaderMenuLinkProps[]
  searchLabel?: string
  quickLinksAriaLabel?: string
  showSearch?: boolean
  showBeta?: boolean
}
