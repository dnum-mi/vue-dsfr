import DsfrNavigation from './DsfrNavigation.vue'

export default {
  component: DsfrNavigation,
  title: 'Composants/Navigation Principale/1. Navigation Principale - DsfrNavigation',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    navItems: {
      control: 'object',
      description: `Tableau d'objets. Chacun de ces objets contiendra :

  - soit les props d’un lien direct <a href="/?path=/story/composants-navigation-principale-2-lien-de-menu-sous-menu-ou-mega-menu-dsfrnavigationmenulink--navigation-lien-menu">DsfrNavigationMenuLink</a> de navigation (\`to\` et \`text\`)
  - soit les props d’un sous-menu <a href="/?path=/docs/composants-navigation-principale-3-sous-menu-dsfrnavigationmenu--navigation-sous-menu">DsfrNavigationMenu</a> de navigation (\`title\` et \`links\`)
  - soit les props d’un mega-menu <a href="/?path=/story/composants-navigation-principale-4-mega-menu-dsfrnavigationmegamenu--navigation-mega-menu">DsfrNavigationMegaMenu</a> de navigation (\`title\`, \`link\` et \`menus\`)
      `,
    },
  },
}

export const NavigationPrincipale = (args) => ({
  components: {
    DsfrNavigation,
  },

  data () {
    return {
      ...args,
    }
  },
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },

  template: `
  <DsfrNavigation
    :nav-items="navItems"
  />
  `,
})

NavigationPrincipale.args = {
  dark: false,
  navItems: [
    {
      to: '#essai',
      text: 'Accès direct',
    },
    {
      title: 'Menu déroulant',
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
      title: 'Mega menu',
      link: {
        to: '#',
        text: 'Voir toute la rubrique',
      },
      menus: [
        {
          title: 'Nom de catégorie',
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
          title: 'Nom de catégorie',
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
          title: 'Nom de catégorie',
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
    },
  ],
}
