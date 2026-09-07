import type { TitleTag } from '../../common-types'
import type { DsfrButtonProps } from '../DsfrButton/DsfrButton.types'

export type DsfrModalProps = {
  modalId?: string
  opened?: boolean
  actions?: DsfrButtonProps[]
  isAlert?: boolean
  origin?: { focus: () => void }
  title: string
  titleTag?: TitleTag
  icon?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  closeButtonLabel?: string
  closeButtonTitle?: string
  disableOutsideInteraction?: boolean
}
