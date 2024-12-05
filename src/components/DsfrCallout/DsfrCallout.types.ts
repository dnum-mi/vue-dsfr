import type { DsfrButtonProps } from '../DsfrButton/DsfrButton.types'
import type { VIconProps } from '../VIcon/VIcon.vue'

export type DsfrCalloutProps = {
  title?: string
  content?: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  button?: DsfrButtonProps
  icon?: string | VIconProps
}
