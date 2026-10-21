export type DsfrPictogramProps = {
  /**
   * Chemin d’une image matricielle (ou d’un SVG à afficher tel quel) à utiliser comme pictogramme
   */
  imgSrc?: string
  /**
   * Chemin du pictogramme SVG, tel qu’importé depuis `@gouvfr/dsfr/dist/artwork/pictograms`
   */
  svgPath?: string
  /**
   * Attributs à poser sur la balise `svg` (`viewBox`, `width` et `height` par défaut)
   */
  svgAttrs?: Record<string, unknown>
  /**
   * Titre du pictogramme, à ne renseigner que s’il porte une information absente du texte environnant
   */
  title?: string
}
