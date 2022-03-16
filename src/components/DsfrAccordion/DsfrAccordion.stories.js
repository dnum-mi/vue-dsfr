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
      titleSub1: args.titleSub + ' 1',
      titleSub2: args.titleSub + ' 2',
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
