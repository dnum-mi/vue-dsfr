import DsfrTooltip from './DsfrTooltip.vue'
export default {
  component: DsfrTooltip,
  title: 'Composants/DsfrTooltip',
  argTypes: {
    id: {
      control: 'text',
      description: '(optionnel) Valeur de l’attribut `id` du tooltip. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    content: {
      control: 'text',
      description: 'Contenu de votre bulle d’aide : il s’agit d’un texte sans mise en forme.',
    },
    onHover: {
      control: 'boolean',
      description: 'Permet de définir si l’infobulle doit s’afficher au survol de l’élément (`true`) ou au clic (`false`, défaut).',
    },
  },
}

export const Infobulle = (args) => ({
  components: {
    DsfrTooltip,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrTooltip
      :content="content"
      :on-hover="onHover"
    >
      Un élément intriguant
    </DsfrTooltip>
  `,

})
Infobulle.args = {
  content: 'Un élément assez intriguant',
  onHover: false,
}

export const InfobulleParDefaut = (args) => ({
  components: {
    DsfrTooltip,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <DsfrTooltip
      :content="content"
    >
      Un contenu qui n’apparaîtra que si hover est à \`true\`
    </DsfrTooltip>
  `,

})
InfobulleParDefaut.args = {
  content: 'Un élément assez intriguant',
}

export const InfobulleAuSurvol = (args) => ({
  components: {
    DsfrTooltip,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    Du texte
    <DsfrTooltip
      :content="content"
      onHover
    >
      avec une précision à donner ici
    </DsfrTooltip>
  `,

})
InfobulleAuSurvol.args = {
  content: 'Texte précisant pourquoi ce texte est là',
}
