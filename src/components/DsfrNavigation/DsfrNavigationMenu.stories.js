import DsfrNavigation from './DsfrNavigation.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenu from './DsfrNavigationMenu.vue'

export default {
  component: DsfrNavigationMenu,
  title: 'Composants/Navigation Principale/3. Sous-menu - DsfrNavigationMenu',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    id: {
      control: 'text',
      description: '(Optionnel) Valeur de l’attribut `id` de ce sous-menu. *N.B. : Il est recommandé de ne pas le donner, la bibliothèque lui en donnera un pseudo-aléatoire*.',
    },
    'toggle-id': {
      description: 'Événement émis lors du click sur le lien, avec en argument l’id de l’élément cliqué',
    },
    links: {
      control: 'object',
      description: 'Tableau contenant les liens du menu de navigation. Chaque objet de ce tableau contiendra les props d’un lien direct <a href="/?path=/story/composants-navigation-principale-2-lien-de-menu-sous-menu-ou-mega-menu-dsfrnavigationmenulink--navigation-lien-menu">DsfrNavigationMenuLink</a> de navigation (`to` et `text`)',
    },
    title: {
      control: 'text',
      description: 'Intitulé du menu',
    },
    expandedId: {
      control: 'text',
      description: 'Indique l’id de l’élément "ouvert" ou "déplié" dans le menu. Permet au composant de savoir s’il doit être déplié (si `expandedId` est identique à son `id`) ou non (si `expandedId` est différent de son `id`)',
    },
  },
}

export const NavigationSousMenu = (args) => ({
  components: {
    DsfrNavigation,
    DsfrNavigationItem,
    DsfrNavigationMenu,
  },

  data () {
    return {
      ...args,
      expandedMenuId: undefined,
    }
  },

  methods: {
    toggle (id) {
      if (id === this.expandedMenuId) {
        this.expandedMenuId = undefined
        return
      }
      this.expandedMenuId = id
    },
  },

  template: `
    <DsfrNavigation>
      <DsfrNavigationItem>
        <DsfrNavigationMenu
          :title="title"
          :links="links"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        />
      </DsfrNavigationItem>
    </DsfrNavigation>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
NavigationSousMenu.args = {
  dark: false,
  title: 'Nom de menu original',
  links: [
    {
      text: 'Valeur 1',
      to: '#val1',
    },
    {
      text: 'Valeur 2',
      to: '#val2',
    },
    {
      text: 'Valeur 3',
      to: '#val3',
    },
  ],
}
