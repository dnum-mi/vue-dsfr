import type { RouteLocationRaw } from 'vue-router'

export type DsfrBreadcrumbProps = {
  breadcrumbId?: string
  links?: {
    to?: RouteLocationRaw
    text: string
  }[]
  navigationLabel?: string
  showBreadcrumbLabel?: string
}
