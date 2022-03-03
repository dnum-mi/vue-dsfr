import DsfrConsent from './DsfrConsent.vue'

export default {
  component: DsfrConsent,
  title: 'Composants/Gestionnaire de consentement - DsfrConsent',
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
