import type VIcon from '../VIcon/VIcon.vue'
import type { DsfrButtonProps } from '../DsfrButton/DsfrButton.types'

export type DsfrCalloutProps = {
  title?: string
  content: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  button?: DsfrButtonProps
  icon?: string | InstanceType<typeof VIcon>['$props']
}
