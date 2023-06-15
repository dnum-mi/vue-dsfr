import DsfrSideMenu from './DsfrSideMenu.vue'
import DsfrAccordion from '../DsfrAccordion/DsfrAccordion.vue'
import DsfrAccordionsGroup from '../DsfrAccordion/DsfrAccordionsGroup.vue'
import DsfrCheckboxSet from '../DsfrCheckbox/DsfrCheckboxSet.vue'

function toggleExpandedForMenuWithId (menuItems, id) {
  menuItems.forEach(menuItem => {
    if (menuItem.id === id) {
      menuItem.expanded = !menuItem.expanded
      return
    }
    if (menuItem.menuItems) {
      toggleExpandedForMenuWithId(menuItem.menuItems, id)
    }
  })
}

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/menu-lateral)
 */
export default {
  component: DsfrSideMenu,
  title: 'Composants/DsfrSideMenu',
  argTypes: {
    id: {
      control: 'text',
      description: '(optionnel) Valeur de l’attribut `id` du side menu. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    headingTitle: {
      control: 'text',
      description: 'Titre de la rubrique (c’est le titre du menu latéral)',
    },
    buttonLabel: {
      control: 'text',
      description: 'Label associé au bouton en état responsive dont le rôle est de déplier le side menu',
    },
    menuItems: {
      control: 'object',
      description: 'Tableau d’objets contenant les props attendus par DsfrSideMenuList',
    },
    onclick: {
      action: 'Clicked',
    },
  },
}

export const MenuLateral = (args, { argTypes }) => ({
  components: {
    DsfrSideMenu,
  },

  data () {
    return {
      ...args,
    }
  },

  methods: {
    toggleExpand (id) {
      toggleExpandedForMenuWithId(this.menuItems, id)
    },
  },

  template: `
    <DsfrSideMenu
      :heading-title="headingTitle"
      :buttonLabel="buttonLabel"
      :menu-items="menuItems"
      @toggle-expand="toggleExpand"
    />
  `,
})
MenuLateral.args = {
  buttonLabel: 'Dans cette rubrique',
  headingTitle: 'Titre de la rubrique',
  menuItems: [
    {
      id: '11',
      to: '/rubrique-1',
      text: 'Premier titre de niveau 1',
    },
    {
      id: '12',
      to: '/rubrique-2',
      text: 'Deuxième titre de niveau 1',
      active: true,
      menuItems: [
        {
          id: '21',
          to: '/rubrique-2/sous-rubrique-1',
          text: 'Premier titre de niveau 2',
        },
        {
          id: '22',
          to: '/rubrique-2/sous-rubrique-2',
          text: 'Deuxième titre de niveau 2',
          active: true,
          menuItems: [
            {
              id: '31',
              to: '/rubrique-2/sous-rubrique-2/sous-sous-rubrique-1',
              text: 'Premier titre de niveau 3',
            },
            {
              id: '32',
              to: '/rubrique-2/sous-rubrique-2/sous-sous-rubrique-2',
              text: 'Deuxième titre de niveau 3',
              active: true,
            },
          ],
        },
      ],
    },
  ],
}

export const MenuLateralAvecAccordeonEtCheckbox = (args) => ({
  components: {
    DsfrSideMenu,
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
    <dsfr-side-menu
      heading-title="Filtres"
      button-label="Afficher les filtres"
    >
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
    </dsfr-side-menu>
  `,
})
MenuLateralAvecAccordeonEtCheckbox.args = {
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
