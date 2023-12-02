import type { RouteLocationRaw } from 'vue-router'

export type DsfrNavigationMenuLinkProps = {
  id?: string,
  to?: string | RouteLocationRaw,
  text?: string,
  icon?: string,
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

type SimpleLink = { text?: string ; to?: RouteLocationRaw }
type MenuItem = { title?: string; active?: boolean; links?: DsfrNavigationMenuLinks }
type MegaMenuItem = { title?: string; description: string, link: SimpleLink, menus: { title?: string; active?: boolean; links?: DsfrNavigationMenuLinks }[]}

export type DsfrNavigationProps = {
  id?: string
  label?: string
  navItems:(
    SimpleLink
    | MenuItem
    | MegaMenuItem
  )[]
}
