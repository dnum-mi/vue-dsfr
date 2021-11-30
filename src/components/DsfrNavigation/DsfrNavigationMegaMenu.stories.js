import DsfrNavigationMegaMenu from './DsfrNavigationMegaMenu.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigation from './DsfrNavigation.vue'

export default {
  component: DsfrNavigationMegaMenu,
  title: 'Composants/Navigation Principale/4. Mega-menu DsfrNavigationMegaMenu',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    title: {
      control: 'text',
      description: 'Intitulé du menu',
    },
    description: {
      control: 'text',
      description: 'Description au méga menu',
    },
    link: {
      control: 'array',
      description: 'Permet de définir un lien vers une page associée. C’est un objet qui contiendra les props attendues par <a href="/?path=/story/composants-navigation-principale-2-lien-de-menu-sous-menu-ou-mega-menu-dsfrnavigationmenulink--navigation-lien-menu">DsfrNavigationMenuLink</a>',
    },
    menus: {
      control: 'array',
      description: 'Liste des catégories au sein du méga menu via un tableau. Chaque objet de ce tableau contiendra les props attendues par <a href="/?path=/docs/composants-navigation-principale-5-catégorie-de-mega-menu-dsfrnavigationmegamenucategory--navigation-mega-menu-categorie">DsfrNavigationMegaMenuCategory</a>',
    },
    expandedId: {
      control: 'text',
      description: 'Indique l’id de l’élément "ouvert" ou "déplié" dans le menu. Permet au composant de savoir s’il doit être déplié (si `expandedId` est identique à son `id`) ou non (si `expandedId` est différent de son `id`)',
    },
  },
}

export const NavigationMegaMenu = (args) => ({
  components: {
    DsfrNavigationMegaMenu,
    DsfrNavigation,
    DsfrNavigationItem,
  },

  data () {
    return {
      ...args,
    }
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
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem; position: relative;">
    <DsfrNavigation>
      <DsfrNavigationItem>
        <DsfrNavigationMegaMenu
          :dark="dark"
          :title="title"
          :description="description"
          :link="link"
          :menus="menus"
          :expandedId="expandedId"
          @click="toggle($event)"
        />
      </DsfrNavigationItem>
    </DsfrNavigation>
  </div>
  `,
})

NavigationMegaMenu.args = {
  dark: false,
  title: 'Titre de MEGA MENU',
  expandedId: undefined,
  description: 'Un charmant MEGA MENU',
  link: {
    to: '#',
    text: 'Aller à la rubrique du MEGA MENU',
  },
  menus: [
    {
      title: 'Nom de catégorie 1',
      links: [
        {
          text: 'Lien 1',
          to: '#',
        },
        {
          text: 'Lien 2',
          to: '#',
        },
        {
          text: 'Lien 3',
          to: '#',
        },
        {
          text: 'Lien 4',
          to: '#',
        },
        {
          text: 'Lien 5',
          to: '#',
        },
      ],
    },
    {
      title: 'Nom de catégorie 2',
      links: [
        {
          text: 'Lien 1',
          to: '#',
        },
        {
          text: 'Lien 2',
          to: '#',
        },
        {
          text: 'Lien 3',
          to: '#',
        },
        {
          text: 'Lien 4',
          to: '#',
        },
        {
          text: 'Lien 5',
          to: '#',
        },
      ],
    },
    {
      title: 'Nom de catégorie 3',
      links: [
        {
          text: 'Lien 1',
          to: '#',
        },
        {
          text: 'Lien 2',
          to: '#',
        },
        {
          text: 'Lien 3',
          to: '#',
        },
        {
          text: 'Lien 4',
          to: '#',
        },
        {
          text: 'Lien 5',
          to: '#',
        },
      ],
    },
  ],
}
