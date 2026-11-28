import type { DsfrBadgeProps } from './DsfrBadge.types'
import type { HTMLAttributes } from 'vue'

/**
 * Props d’un badge au sein d’un groupe.
 * Les attributs HTML (dont `class` et `style`, utile pour borner la largeur des badges en troncature `ellipsis`)
 * sont transmis au badge, comme dans `DsfrTagsTagProps`. Le tag est forcé à `span` pour respecter le markup DSFR.
 */
export type DsfrBadgeGroupBadgeProps = Omit<DsfrBadgeProps, 'tagName'> & HTMLAttributes

export type DsfrBadgeGroupProps = {
  /**
   * Badges à afficher dans le groupe.
   * Le tag est forcé à `span` pour respecter le markup DSFR (`ul.fr-badges-group > li > span.fr-badge`).
   */
  badges: DsfrBadgeGroupBadgeProps[]
}
