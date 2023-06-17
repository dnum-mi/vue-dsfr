import DsfrAccordionsGroup from './DsfrAccordionsGroup.vue'
import DsfrAccordion from './DsfrAccordion.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon/)
 */
export default {
  component: DsfrAccordionsGroup,
  title: 'Composants/DsfrAccordionsGroup',
  argTypes: {
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

})
AccordeonGroupe.args = {
  title1: 'Un titre d’accordéon 1',
  title2: 'Un titre d’accordéon 2',
  title3: 'Un titre d’accordéon 3',
  expandedId: '',
}
