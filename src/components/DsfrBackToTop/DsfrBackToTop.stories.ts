import DsfrBackToTop from './DsfrBackToTop.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/retour-en-haut-de-page/)
 */
export default {
  component: DsfrBackToTop,
  title: 'Composants/DsfrBackToTop',
  argTypes: {
    label: {
      control: 'text',
      description: 'Titre (texte)',
    },
    position: {
      options: ['left', 'right'],
      control: 'select',
      description: '(Optionnel) **Position** de la fleche îcone : `left` (à gauche), `right` (à droite)',
    },
  },
}

export const BackToTop = (args) => ({
  components: {
    DsfrBackToTop,
  },
  data () {
    return args
  },
  template: `
      <DsfrBackToTop :label="label" :position="position"/>
    `,
})
BackToTop.args = {
  position: 'left',
  label: 'Haut de page',
}

export const TousLesBacktoTop = (args) => ({
  components: {
    DsfrBackToTop,
  },
  data () {
    return args
  },
  template: `
      <p>
      <DsfrBackToTop label="Haut de page" position="left"/>
      </p>
      <p>
      <DsfrBackToTop label="Haut de page" position="right"/>
      </p>
      <p>
      <DsfrBackToTop label="Haut" position="right"/>
      </p>
    `,
})
TousLesBacktoTop.args = {
}
