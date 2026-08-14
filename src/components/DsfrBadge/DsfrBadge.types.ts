import type { DsfrColorAccent } from '../DsfrCallout/DsfrCallout.types'

/**
 * Couleurs d’accent utilisables pour un badge `standard`.
 * Exclut les couleurs système (déjà gérées par `type`) ainsi que `grey`,
 * `blue-france` et `red-marianne`, qui ne génèrent aucune classe `fr-badge--*` côté DSFR.
 */
export type DsfrBadgeColorAccent = Exclude<DsfrColorAccent, 'grey' | 'blue-france' | 'red-marianne' | 'success' | 'error' | 'warning' | 'info'>

export type DsfrBadgeProps = {
  label: string
  type?: 'success' | 'error' | 'new' | 'info' | 'warning' | 'standard' | undefined
  colorAccent?: DsfrBadgeColorAccent
  noIcon?: boolean
  small?: boolean
  ellipsis?: boolean
}
