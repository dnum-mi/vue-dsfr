import DsfrAccordionsGroup from './DsfrAccordionsGroup.vue'
import DsfrAccordion from './DsfrAccordion.vue'

export default {
  component: DsfrAccordionsGroup,
  title: 'Composants/Accordéon - DsfrAccordionsGroup',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },

    expanded1: {
      control: 'boolean',
    },
    expanded2: {
      control: 'boolean',
    },
    expanded3: {
      control: 'boolean',
    },
    title1: {
      control: 'text',
    },
    title2: {
      control: 'text',
    },
    title3: {
      control: 'text',
    },
  },
}

export const AccordeonGroupe = (args) => ({
  components: {
    DsfrAccordionsGroup,
    DsfrAccordion,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
  <DsfrAccordionsGroup>
    <li>
      <DsfrAccordion
        :title="title1"
        :expanded="expanded1"
      >
        Contenu de l’accordéon
      </DsfrAccordion>
    </li>
    <li>
      <DsfrAccordion
        :title="title2"
        :expanded="expanded2"
      >
        Contenu de l’accordéon
      </DsfrAccordion>
    </li>
    <li>
      <DsfrAccordion
        :title="title3"
        :expanded="expanded3"
      >
        Contenu de l’accordéon
      </DsfrAccordion>
    </li>
  </DsfrAccordionsGroup>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
AccordeonGroupe.args = {
  dark: false,
  title1: 'Un titre d’accordéon',
  expanded1: false,
  title2: 'Un titre d’accordéon',
  expanded2: false,
  title3: 'Un titre d’accordéon',
  expanded3: false,
}
