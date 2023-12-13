import type { StyleValue } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type DsfrFooterPartner = {
  href: string
  logo: string
  name: string
}

export type DsfrFooterPartnersProps = {
  mainPartner?: DsfrFooterPartner
  subPartners?: DsfrFooterPartner[],
  title?: string,
}

export type DsfrFooterLinkProps = {
  label: string
  to: string | RouteLocationRaw
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
  partners?: DsfrFooterPartnersProps
  personalDataLink?: string
  cookiesLink?: string
  logoText?: string | string[]
  descText?: string
  beforeMandatoryLinks?: {label: string, to: RouteLocationRaw | undefined}[]
  afterMandatoryLinks?: {label: string, to: RouteLocationRaw | undefined}[]
  mandatoryLinks?: {label: string, to: RouteLocationRaw | undefined}[]
  ecosystemLinks?: {label: string, href: string}[]
  operatorLinkText?: string
  operatorTo?: RouteLocationRaw | undefined
  operatorImgStyle?: StyleValue
  operatorImgSrc?: string
  operatorImgAlt?: string
  licenceTo?: string
  licenceLinkProps?: { href: string } | { to: RouteLocationRaw | undefined }
  licenceText?: string
  licenceName?: string
}
