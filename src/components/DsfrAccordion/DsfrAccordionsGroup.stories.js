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
    id: {
      control: 'text',
      description: '(optionnel) Valeur de l’attribut `id` de l’accordéon. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    expandedId: {
      control: 'radio',
      options: [
        'none',
        'accordion-1',
        'accordion-2',
        'accordion-3',
      ],
      description: 'Valeur de l’`id` de l’accordéon déplié',
    },
    title1: {
      control: 'text',
      description: 'Titre du premier accordéon',
    },
    title2: {
      control: 'text',
      description: 'Titre du deuxième accordéon',
    },
    title3: {
      control: 'text',
      description: 'Titre du troisième accordéon',
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
        id="accordion-1"
        :title="title1"
        :expanded-id="expandedId"
        @expand="expandedId = $event"
      >
        Contenu de l’accordéon 1
      </DsfrAccordion>
    </li>
    <li>
      <DsfrAccordion
        id="accordion-2"
        :title="title2"
        :expanded-id="expandedId"
        @expand="id => expandedId = id"
      >
        Contenu de l’accordéon 2
      </DsfrAccordion>
    </li>
    <li>
      <DsfrAccordion
        id="accordion-3"
        :title="title3"
        :expanded-id="expandedId"
        @expand="id => expandedId = id"
      >
        Contenu de l’accordéon 3
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
  title1: 'Un titre d’accordéon 1',
  title2: 'Un titre d’accordéon 2',
  title3: 'Un titre d’accordéon 3',
  expandedId: '',
}
