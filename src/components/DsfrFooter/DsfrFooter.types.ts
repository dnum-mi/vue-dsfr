import type { HTMLAttributes, StyleValue } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type VIcon from '../VIcon/VIcon.vue'

export type DsfrFooterPartner = {
  href: string
  logo: string
  name: string
}

export type DsfrFooterPartnersProps = {
  mainPartner?: DsfrFooterPartner
  subPartners?: DsfrFooterPartner[]
  title?: string
}

export type DsfrFooterLinkProps = {
  button?: boolean
  icon?: string | InstanceType<typeof VIcon>['$props']
  iconAttrs?: InstanceType<typeof VIcon>['$props'] & HTMLAttributes
  iconRight?: boolean
  label?: string
  target?: string
  onClick?: ($event: MouseEvent) => void
  to?: RouteLocationRaw
  href?: string
  title?: string
}

export type DsfrFooterLinkListProps = {
  categoryName: string
  links: DsfrFooterLinkProps[]
}

export type DsfrFooterProps = {
  a11yCompliance?: string
  a11yComplianceLink?: RouteLocationRaw
  legalLink?: string
  homeLink?: RouteLocationRaw
  homeTitle?: string
  partners?: DsfrFooterPartnersProps
  personalDataLink?: string
  cookiesLink?: string
  logoText?: string | string[]
  descText?: string
  beforeMandatoryLinks?: DsfrFooterLinkProps[]
  afterMandatoryLinks?: DsfrFooterLinkProps[]
  mandatoryLinks?: { label: string, to: RouteLocationRaw | undefined, title?: string }[]
  ecosystemLinks?: { label: string, href: string, title: string, [key: string]: string }[]
  operatorLinkText?: string
  operatorTo?: RouteLocationRaw | undefined
  operatorImgStyle?: StyleValue
  operatorImgSrc?: string
  operatorImgAlt?: string
  licenceTo?: string
  licenceLinkProps?: ({ href: string } | { to: RouteLocationRaw | undefined }) & Record<string, string>
  licenceText?: string
  licenceName?: string
}
