import DsfrAccordion from './DsfrAccordion.vue'
import DsfrAccordionsGroup from './DsfrAccordionsGroup.vue'

export default {
  component: DsfrAccordion,
  title: 'Composants/Accordéon - DsfrAccordion',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    title: {
      control: 'text',
      description: 'Intitulé de l’accordéon',
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
    }
  },

  template: `
  <DsfrAccordionsGroup>
    <li>
      <DsfrAccordion
        :title="title + ' 1'"
        :expanded-id="expandedId"
        @expand="expandedId = $event"
      >
        Contenu de l’accordéon 1
      </DsfrAccordion>
    </li>
    <li>
      <DsfrAccordion
        :title="title + ' 2'"
        :expanded-id="expandedId"
        @expand="expandedId = $event"
      >
        Contenu de l’accordéon 2
      </DsfrAccordion>
    </li>
  </DsfrAccordionGroup>
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
      titleSub: 'Intitulé du sous-accordéon',
      expandedId: undefined,
      subExpandedId1: undefined,
      subExpandedId2: undefined,
    }
  },

  template: `
    <DsfrAccordionsGroup>
      <DsfrAccordion
        :title="title + ' 1'"
        :expanded-id="expandedId"
        @expand="expandedId = $event"
      >
        <li>
          <DsfrAccordion
            :title="titleSub + ' 1'"
            :expanded-id="subExpandedId1"
            @expand="subExpandedId1 = $event"
          >
            Contenu de l’accordéon dans l’accordéon
          </DsfrAccordion>
        </li>
        <li>
          <DsfrAccordion
            :title="titleSub + ' 2'"
            :expanded-id="subExpandedId1"
            @expand="subExpandedId1 = $event"
          >
            Contenu de l’accordéon dans l’accordéon
          </DsfrAccordion>
        </li>
      </DsfrAccordion>
      <DsfrAccordion
        :title="title + ' 2'"
        :expanded-id="expandedId"
        @expand="expandedId = $event"
      >
        <li>
          <DsfrAccordion
            :title="titleSub + ' 1'"
            :expanded-id="subExpandedId2"
            @expand="subExpandedId2 = $event"
          >
            Contenu de l’accordéon dans l’accordéon
          </DsfrAccordion>
        </li>
        <li>
          <DsfrAccordion
            :title="titleSub + ' 2'"
            :expanded-id="subExpandedId2"
            @expand="subExpandedId2 = $event"
          >
            Contenu de l’accordéon dans l’accordéon
          </DsfrAccordion>
        </li>
      </DsfrAccordion>
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
