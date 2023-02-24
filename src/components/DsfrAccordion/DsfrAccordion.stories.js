import DsfrAccordion from './DsfrAccordion.vue'
import DsfrAccordionsGroup from './DsfrAccordionsGroup.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/accordeon/)
 */
export default {
  component: DsfrAccordion,
  title: 'Composants/Accordéon - DsfrAccordion',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
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

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Accordeon.args = {
  dark: false,
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

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },

})
AccordeonDansUnAccordeon.args = {
  dark: false,
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

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },

})
AccordeonTitreCustom.args = {
  dark: false,
  title1: 'Un titre d’accordéon customisé',
  title2: 'Un autre titre d’accordéon',
}
