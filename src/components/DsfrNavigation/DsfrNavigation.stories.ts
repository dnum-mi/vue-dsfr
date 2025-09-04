import DsfrNavigation from './DsfrNavigation.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/navigation-principale)
 */
export default {
  component: DsfrNavigation,
  title: 'Composants/DsfrNavigation',
  argTypes: {
    navItems: {
      control: 'object',
      description: `Tableau d'objets. Chacun de ces objets contiendra :

  - soit les props d’un lien direct <a href="/?path=/docs/composants-dsfrnavigationmenulink--docs">DsfrNavigationMenuLink</a> de navigation (\`to\` et \`text\`)
  - soit les props d’un sous-menu <a href="/?path=/docs/composants-dsfrnavigationmenu--docs">DsfrNavigationMenu</a> de navigation (\`title\`, \`links\` et \`active\`)
  - soit les props d’un mega-menu <a href="/?path=/docs/composants-dsfrnavigationmegamenu--docs">DsfrNavigationMegaMenu</a> de navigation (\`title\`, \`link\`, \`active\` et \`menus\`)
      `,
    },
    label: {
      control: 'text',
      description: 'Contenu de l’attribut `aria-label` de la balise `<nav>`',
    },
    id: {
      control: 'text',
      description:
        '(Optionnel) Valeur de l’attribut `id` de la balise `<nav>`. Aura une valeur pseudo-aléatoire par défaut',
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

  template: `
  <DsfrNavigation
    :nav-items="navItems"
  />
  `,
})

NavigationPrincipale.args = {
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
