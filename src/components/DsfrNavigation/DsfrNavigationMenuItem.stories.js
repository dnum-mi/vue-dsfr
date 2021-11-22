import DsfrNavigation from './DsfrNavigation.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenu from './DsfrNavigationMenu.vue'
import DsfrNavigationMenuItem from './DsfrNavigationMenuItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

export default {
  component: DsfrNavigationMenuItem,
  title: 'Composants/Navigation Principale/7. Item de menu de navigation - DsfrNavigationMenuItem',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    expandedId: {
      control: 'text',
      description: 'Valeur de l’id du menu déroulé.\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    menuId: {
      control: 'string',
      description: 'Valeur de l’attribut `id` de ce sous-menu. *N.B. : Il est recommandé de ne pas le donner, la bibliothèque lui en donnera un aléatoire*.',
    },
    id: {
      control: 'string',
      description: 'Valeur de l’attribut `id` de cet item de menu de navigation.',
    },
    active: {
      control: 'boolean',
      description: 'Indique l’élément est actif (l’utilisateur est actuellement sur la page pointée par cet item de menu de navigation).',
    },
  },
}

export const ItemDeMenuDeNavigation = args => ({
  components: {
    DsfrNavigation,
    DsfrNavigationItem,
    DsfrNavigationMenu,
    DsfrNavigationMenuItem,
    DsfrNavigationMenuLink,
  },

  data () {
    return args
  },

  methods: {
    toggle (id) {
      if (id === this.expandedId) {
        this.expandedId = undefined
        return
      }
      this.expandedId = id
    },
  },

  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrNavigation>
      <DsfrNavigationItem>
        <DsfrNavigationMenu
          title="Titre de menu"
          @toggle-id="toggle($event)"
          :expanded-id="expandedId"
          :id="menuId"
        >
          <DsfrNavigationMenuItem :id="id" :active="active">
            <DsfrNavigationMenuLink
              to="/"
              text="Texte du lien de l’item de menu"
            />
          </DsfrNavigationMenuItem>
        </DsfrNavigationMenu>
      </DsfrNavigationItem>
    </DsfrNavigation>
  </div>
  `,
})
ItemDeMenuDeNavigation.args = {
  dark: false,
  active: false,
  expandedId: '',
  id: undefined,
  menuId: 'test-menu-id',
}
