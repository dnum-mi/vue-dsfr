import type { DsfrColorAccent } from '../DsfrCallout/DsfrCallout.types'

export type DsfrQuoteProps = {
  quote?: string
  author?: string
  details: { label: string, url: string }[]
  source: string
  sourceUrl: string
  quoteImage?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  accent?: DsfrColorAccent
}
