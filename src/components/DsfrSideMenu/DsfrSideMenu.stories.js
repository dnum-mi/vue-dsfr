import DsfrSideMenu from './DsfrSideMenu.vue'

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

export default {
  component: DsfrSideMenu,
  title: 'Composants/Menu latéral/1 - Menu entier - DsfrSideMenu',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
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

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
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
  dark: false,
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
