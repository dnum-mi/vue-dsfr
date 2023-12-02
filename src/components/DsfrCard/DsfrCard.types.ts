import type { RouteLocationRaw } from 'vue-router'
import type { DsfrButtonProps } from '../DsfrButton/DsfrButton.vue'

export type DsfrCardProps = {
  imgSrc?: string
  link?: string | RouteLocationRaw
  title: string
  description: string
  size?: 'md' | 'medium' | 'large' | 'lg' | 'sm' | 'small' | undefined
  detail?: string
  altImg?: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  buttons?: DsfrButtonProps[]
  linksGroup?:({ label: string, to?: RouteLocationRaw, link?: string, href?: string })[]
  noArrow?: boolean
  horizontal?: boolean
  download?: boolean
}
