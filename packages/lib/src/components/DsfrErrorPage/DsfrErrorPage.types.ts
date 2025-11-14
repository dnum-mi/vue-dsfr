import type { DsfrButtonProps } from '../DsfrButton/DsfrButton.vue'

export type DsfrErrorPageProps = {
  title?: string
  subtitle?: string
  description?: string
  help?: string
  buttons?: DsfrButtonProps[]
}
