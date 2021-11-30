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
      control: 'string',
      description: 'Valeur de l’attribut `id` de ce sous-menu.\n\n *N.B. : Il est recommandé de ne pas le donner, la bibliothèque lui en donnera un aléatoire*.',
    },
    links: {
      control: 'array',
      description: 'Tableau contenant les liens du menu de navigation. Chaque objet de ce tableau contiendra les props d’un lien direct <a href="/?path=/story/composants-navigation-principale-2-lien-de-menu-sous-menu-ou-mega-menu-dsfrnavigationmenulink--navigation-lien-menu">DsfrNavigationMenuLink</a> de navigation (`to` et `text`)',
    },
    title: {
      control: 'text',
      description: 'Intitulé du menu',
    },
    expandedId: {
      control: 'text',
      description: 'Indique l’id de l’élément "ouvert" ou "déplié" dans le menu.\n\nPermet au composant de savoir s’il doit être déplié (si `expandedId` est identique à son `id`) ou non (si `expandedId` est différent de son `id`)',
    },
  },
}

export const NavigationSousMenu = (args) => ({
  components: {
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
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem; position: relative;">
      <DsfrNavigation>
        <DsfrNavigationItem>
          <DsfrNavigationMenu
            :title="title"
            :links="links"
            :expanded-id="expandedMenuId"
            @click="toggle($event)"
          />
        </DsfrNavigationItem>
      </DsfrNavigation>
    </div>
  `,
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
