import type { TitleTag } from '../../common-types'
import type { DsfrButtonProps } from '../DsfrButton/DsfrButton.types'
import type { VIconProps } from '../VIcon/VIcon.vue'

/**
 * Type union des accents de couleur DSFR utilisable dans DsfrCallout.
 * Représente les noms des thèmes de couleur (avant "-main")
 */
export type DsfrColorAccent =
  | 'blue-france'
  | 'red-marianne'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'green-tilleul-verveine'
  | 'green-bourgeon'
  | 'green-emeraude'
  | 'green-menthe'
  | 'green-archipel'
  | 'blue-ecume'
  | 'blue-cumulus'
  | 'purple-glycine'
  | 'pink-macaron'
  | 'pink-tuile'
  | 'yellow-tournesol'
  | 'yellow-moutarde'
  | 'orange-terre-battue'
  | 'brown-cafe-creme'
  | 'brown-caramel'

export type DsfrCalloutProps = {
  title?: string
  content?: string
  titleTag?: TitleTag
  button?: DsfrButtonProps
  icon?: string | VIconProps
  accent?: DsfrColorAccent
}
