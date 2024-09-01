import type { HTMLAttributes, StyleValue } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type VIcon from '../VIcon/VIcon.vue'
import type { DsfrLanguageSelectorProps } from '../DsfrLanguageSelector/DsfrLanguageSelector.types'

export type DsfrHeaderMenuLinkProps = {
  button?: boolean
  icon?: string | InstanceType<typeof VIcon>['$props']
  iconAttrs?: InstanceType<typeof VIcon>['$props'] & HTMLAttributes
  iconRight?: boolean
  label?: string
  target?: string
  onClick?: ($event: MouseEvent) => void
  to?: RouteLocationRaw
  href?: string
}

export type DsfrHeaderProps = {
  searchbarId?: string
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
  languageSelector?: DsfrLanguageSelectorProps
  searchLabel?: string
  quickLinksAriaLabel?: string
  showSearch?: boolean
  showSearchLabel?: string
  showBeta?: boolean
  menuLabel?: string
  menuModalLabel?: string
  closeMenuModalLabel?: string
  homeLabel?: string
}
