export type DsfrStepperTitleTag = 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export type DsfrStepperProps = {
  steps: string[]
  currentStep: number
  /** Balise HTML du titre de l'étape en cours (par défaut `h2`, conforme DSFR) */
  titleTag?: DsfrStepperTitleTag
}
