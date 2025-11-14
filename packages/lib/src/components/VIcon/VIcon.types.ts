export type VIconProps = {
  name?: string
  scale?: string | number
  verticalAlign?: string
  animation?: 'spin' | 'wrench' | 'pulse' | 'spin-pulse' | 'flash' | 'float' | 'ring'
  speed?: 'fast' | 'slow'
  flip?: 'horizontal' | 'vertical' | 'both'
  label?: string
  title?: string
  color?: string
  fill?: string
  inverse?: boolean
  /**
   * Active le rendu côté serveur (SSR) pour l'icône.
   * Par défaut: false pour éviter les problèmes d'hydratation.
   * Utilisez true seulement pour les icônes critiques.
   */
  ssr?: boolean
  display?: 'block' | 'inline-block' | 'inline'
}
