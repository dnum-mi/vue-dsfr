import type { DsfrBadgeProps } from './DsfrBadge.types'

export type DsfrBadgeGroupProps = {
  /**
   * Badges à afficher dans le groupe.
   * Le tag est forcé à `span` pour respecter le markup DSFR (`ul.fr-badges-group > li > span.fr-badge`).
   */
  badges: Omit<DsfrBadgeProps, 'tagName'>[]
}
