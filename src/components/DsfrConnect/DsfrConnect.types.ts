export type DsfrConnectVariant = 'plus' | 'pro'

export type DsfrConnectI18nKey = DsfrConnectVariant | 'default'

export type DsfrConnectI18n = {
  /** Texte affiché à côté du logo */
  logotext?: string
  /** Texte visible du lien ET valeur de l'attribut title (identiques pour l'accessibilité) */
  text: string
  /** Texte masqué visuellement indiquant l'ouverture dans une nouvelle fenêtre */
  newWindow: string
}

export type DsfrConnectProps = {
  // secure?: boolean obsolete remplacé par variant (plus) faut il le garder pour faciliter une migration ? ou le supprimer pour forcer à utiliser variant ?
  // url?: string obsolete codé en dur faut il le garder pour faciliter une migration et ou une latence de mise à jour en cas de changement d'URL des services ?
  variant?: DsfrConnectVariant
  // markup?: 'button' | 'a' vérifier si l'tilisation d'une ancre est bien accessible (doc DSFR pas forcément à jour sur ce plan)
  lang?: string // pas de limitation de code de langue, par défaut en français pour les langues non gérées
}
