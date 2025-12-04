import type { DsfrBadgeProps } from '../DsfrBadge/DsfrBadge.types'
import type { DsfrButtonProps } from '../DsfrButton/DsfrButton.types'
import type VIcon from '../VIcon/VIcon.vue'
import type { RouteLocationRaw } from 'vue-router'

export type DsfrCardDetailProps = {
  icon?: string | InstanceType<typeof VIcon>['$props']
}

export type DsfrCardProps = {
  imgSrc?: string
  link?: string | RouteLocationRaw
  title: string
  titleLinkAttrs?: Record<string, unknown>
  description: string
  size?: 'md' | 'medium' | 'large' | 'lg' | 'sm' | 'small' | undefined
  detail?: string
  detailIcon?: DsfrCardDetailProps['icon']
  endDetail?: string
  endDetailIcon?: DsfrCardDetailProps['icon']
  altImg?: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  badges?: DsfrBadgeProps[]
  buttons?: DsfrButtonProps[]
  imgRatio?: 'md' | 'medium' | 'lg' | 'large' | 'sm' | 'small'
  linksGroup?: {
    label: string
    to?: RouteLocationRaw
    /** @deprecated utiliser href à la place, link sera supprimé dans une version future */
    link?: string
    href?: string
  }[]
  noArrow?: boolean
  horizontal?: boolean
  download?: boolean
  enlarge?: boolean
}
