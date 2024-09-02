import type { TitleTag } from '@/common-types'

export type DsfrAlertType = 'error' | 'success' | 'warning' | 'info'

export type DsfrAlertProps = {
  alert?: boolean
  closed?: boolean
  closeable?: boolean
  id?: string
  title?: string
  description?: string
  small?: boolean
  titleTag?: TitleTag
  type?: DsfrAlertType
  closeButtonLabel?: string
}
