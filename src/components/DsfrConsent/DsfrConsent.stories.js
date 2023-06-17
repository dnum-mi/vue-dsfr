import DsfrConsent from './DsfrConsent.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/gestionnaire-de-consentement)
 */
export default {
  component: DsfrConsent,
  title: 'Composants/DsfrConsent',
  argTypes: {
    onAcceptAll: {
      action: 'onClickAcceptAll',
    },
    onRefuseAll: {
      action: 'onClickRefuseAll',
    },
    onCustomize: {
      action: 'onClickCustomize',
    },
    url: {
      control: 'text',
      description: '',
    },
    'accept-all': {
      description: 'Évenement émis lors du clic sur le bouton \'Tout accepter\'',
    },
    'refuse-all': {
      description: 'Évenement émis lors du clic sur le bouton \'Tout refuser\'',
    },
    customize: {
      description: 'Évenement émis lors du clic sur le bouton \'Personnaliser\'',
    },
  },
}

export const GestionnaireDeConsentementSimple = (args) => ({
  components: { DsfrConsent },
  data () {
    return { ...args }
  },
  template: `
    <DsfrConsent
      @accept-all="onAcceptAll()"
      @refuse-all="onRefuseAll()"
      @customize="onCustomize()"
      :url="url"
    />
  `,
})

GestionnaireDeConsentementSimple.args = {
  url: '/',
}

export const GestionnaireDeConsentementPersonnalisé = (args) => ({
  components: { DsfrConsent },
  data () {
    return { ...args }
  },
  template: `
  <DsfrConsent>
    Description personnalisée
  </DsfrConsent>
  `,
})
