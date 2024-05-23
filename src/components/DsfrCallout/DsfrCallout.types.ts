import type { OhVueIcon as VIcon } from 'oh-vue-icons'
import type { DsfrButtonProps } from '../DsfrButton/DsfrButton.types'

export type DsfrCalloutProps = {
  title?: string
  content: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  button?: DsfrButtonProps
  icon?: string | InstanceType<typeof VIcon>['$props']
}
