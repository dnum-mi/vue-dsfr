import type { RouteLocationRaw } from 'vue-router'

export type DsfrNavigationMenuLinkProps = {
  id?: string
  to?: string | RouteLocationRaw
  text?: string
  icon?: string
  onClick?: ($event: MouseEvent) => void
}

export type DsfrNavigationMenuItemProps = {
  id?: string
  active?: boolean
}

export type DsfrNavigationMenuProps = {
  id?: string
  title: string
  links?: DsfrNavigationMenuLinkProps[]
  expandedId?: string
  active?: boolean
}

export type DsfrNavigationItemProps = {
  id?: string
  active?: boolean
}

export type DsfrNavigationMegaMenuCategoryProps = {
  title: string
  active?: boolean
  links: DsfrNavigationMenuLinkProps[]
}

export type DsfrNavigationMegaMenuProps = {
  id?: string
  title: string
  description?: string
  link?: { to: RouteLocationRaw, text: string }
  menus?: DsfrNavigationMegaMenuCategoryProps[]
  expandedId?: string
  active?: boolean
}

export type DsfrNavigationMenuLinks = (DsfrNavigationMenuLinkProps | DsfrNavigationMegaMenuProps | DsfrNavigationMenuProps)[]

export type DsfrNavigationProps = {
  id?: string
  label?: string
  navItems: (
    DsfrNavigationMenuLinkProps
    | DsfrNavigationMenuProps
    | DsfrNavigationMegaMenuProps
  )[]
}
