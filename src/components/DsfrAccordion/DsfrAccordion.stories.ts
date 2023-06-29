import DsfrAccordion from './DsfrAccordion.vue'
import DsfrAccordionsGroup from './DsfrAccordionsGroup.vue'
import DsfrCheckboxSet from '../DsfrCheckbox/DsfrCheckboxSet.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon/)
 */
export default {
  component: DsfrAccordion,
  title: 'Composants/DsfrAccordion',
  argTypes: {
    id: {
      control: 'text',
      description: '(optionnel) Valeur de l’attribut `id` de l’accordéon. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    title: {
      control: 'text',
      description: 'Intitulé de l’accordéon',
    },
    expand: {
      description: 'Événement déclenché au clic sur le titre de l’accordéon et qui renvoie l’`id` de l’accordéon correspondant.',
    },
    expandedId: {
      control: 'text',
      description: 'Id de l’accordéon déplié',
    },
  },
}

export const Accordeon = (args) => ({
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
  },

  data () {
    return {
      ...args,
      expandedId: undefined,
      title1: args.title + ' 1',
      title2: args.title + ' 2',
    }
  },

  template: `
  <DsfrAccordionsGroup>
    <li>
      <DsfrAccordion
        :title="title1"
        :expanded-id="expandedId"
        @expand="expandedId = $event"
      >
        Contenu de l’accordéon 1
      </DsfrAccordion>
    </li>
    <li>
      <DsfrAccordion
        :title="title2"
        :expanded-id="expandedId"
        @expand="expandedId = $event"
      >
        Contenu de l’accordéon 2
      </DsfrAccordion>
    </li>
  </DsfrAccordionsGroup>
  `,
})
Accordeon.args = {
  title: 'Un titre d’accordéon',
}

export const AccordeonSimple = (args) => ({
  components: {
    DsfrAccordion,
  },

  data () {
    return {
      ...args,
      expandedId: undefined,
      title1: args.title + ' 1',
    }
  },

  template: `
    <DsfrAccordion
      :title="title1"
      :expanded-id="expandedId"
      @expand="expandedId = $event"
    >
    Contenu de l’accordéon 1
    </DsfrAccordion>
  `,
})
AccordeonSimple.args = {
  title: 'Un titre d’accordéon',
}

export const AccordeonDejaOuvert = (args) => ({
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
  },

  data () {
    return {
      ...args,
      expandedId: 'accordeon-1',
      title1: args.title + ' 1',
      title2: args.title + ' 2',
    }
  },

  template: `
  <DsfrAccordionsGroup>
    <li>
      <DsfrAccordion
        :title="title1"
        id="accordeon-1"
        :expanded-id="expandedId"
        @expand="expandedId = $event"
      >
        Contenu de l’accordéon 1
      </DsfrAccordion>
    </li>
    <li>
      <DsfrAccordion
        :title="title2"
        id="accordeon-2"
        :expanded-id="expandedId"
        @expand="expandedId = $event"
      >
        Contenu de l’accordéon 2
      </DsfrAccordion>
    </li>
  </DsfrAccordionsGroup>
  `,
})
AccordeonDejaOuvert.args = {
  title: 'Un titre d’accordéon',
}

export const AccordeonDansUnAccordeon = (args) => ({
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
  },

  data () {
    return {
      ...args,
      title1: args.title + ' 1',
      title2: args.title + ' 2',
      titleSub1: args.titleSub + ' 1.1',
      titleSub2: args.titleSub + ' 1.2',
      expandedId: undefined,
      subExpandedId: undefined,
    }
  },

  template: `
    <DsfrAccordionsGroup>
      <li>
        <DsfrAccordion
          :title="title1"
          :expanded-id="expandedId"
          @expand="expandedId = $event"
        >
          <DsfrAccordionsGroup>
            <li>
              <DsfrAccordion
                :title="titleSub1"
                :expanded-id="subExpandedId"
                @expand="subExpandedId = $event"
              >
                Contenu de l’accordéon dans l’accordéon
              </DsfrAccordion>
            </li>
            <li>
              <DsfrAccordion
                :title="titleSub2"
                :expanded-id="subExpandedId"
                @expand="subExpandedId = $event"
              >
                Contenu de l’accordéon dans l’accordéon
              </DsfrAccordion>
            </li>
          </DsfrAccordionsGroup>
        </DsfrAccordion>
      </li>
    </DsfrAccordionsGroup>
  `,

})
AccordeonDansUnAccordeon.args = {
  title: 'Un titre d’accordéon',
  titleSub: 'Accordéon dans l’accordéon',
}

export const AccordeonTitreCustom = (args) => ({
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
  },

  data () {
    return {
      ...args,
      title1: args.title1,
      title2: args.title2,
      expandedId: undefined,
    }
  },

  template: `
    <DsfrAccordionsGroup>
      <li>
        <DsfrAccordion
          :expanded-id="expandedId"
          @expand="expandedId = $event"
        >
          <template #title><h1>{{title1}}</h1></template>
        </DsfrAccordion>
      </li>
      <li>
        <DsfrAccordion
          :title="title2"
          :expanded-id="expandedId"
          @expand="expandedId = $event"
        >
          Test DsfrAccordion
        </DsfrAccordion>
      </li>
    </DsfrAccordionsGroup>
  `,

})
AccordeonTitreCustom.args = {
  title1: 'Un titre d’accordéon customisé',
  title2: 'Un autre titre d’accordéon',
}

export const AccordeonAvecCheckbox = (args) => ({
  components: {
    DsfrAccordion,
    DsfrAccordionsGroup,
    DsfrCheckboxSet,
  },

  data () {
    return {
      ...args,
      expandedId: undefined,
      accordions: args.accordions,
    }
  },

  template: `
    <dsfr-accordions-group>
      <li
        v-for="(accordion, name) in accordions"
        :id="\`accordion_${name}\`"
        :key="name"
      >
        <dsfr-accordion
          :id="name"
          :title="name"
          :expanded-id="expandedId"
          @expand="id => expandedId = id"
        >
          <dsfr-checkbox-set
            :options="accordion.options"
            small
          />
        </dsfr-accordion>
      </li>
    </dsfr-accordions-group>
  `,
})
AccordeonAvecCheckbox.args = {
  accordions: {
    'Accordéon 1': {
      options: [
        { label: 'Option 1', value: 'option1', name: 'option1' },
        { label: 'Option 2', value: 'option2', name: 'option2' },
        { label: 'Option 3', value: 'option3', name: 'option3' },
      ],
    },
    'Accordéon 2': {
      options: [
        { label: 'Option 1', value: 'option1', name: 'option1' },
        { label: 'Option 2', value: 'option2', name: 'option2' },
        { label: 'Option 3', value: 'option3', name: 'option3' },
      ],
    },
    'Accordéon 3': {
      options: [
        { label: 'Option 1', value: 'option1', name: 'option1' },
        { label: 'Option 2', value: 'option2', name: 'option2' },
        { label: 'Option 3', value: 'option3', name: 'option3' },
      ],
    },
  },
}
