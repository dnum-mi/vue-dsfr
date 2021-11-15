import DsfrNavigationMenu from './DsfrNavigationMenu.vue'

export default {
  component: DsfrNavigationMenu,
  title: 'Éléments/Navigation Principale - Main Navigation/Menu',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    links: {
      control: 'array',
      description: 'Tableau contenant les liens du menu de navigation',
    },
  },
}

export const NavigationMenuSimple = (args) => ({
  components: {
    DsfrNavigationMenu,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem; position: relative;">
      <ul class="fr-nav__list" style="list-style: none">
        <li class="fr-nav__item fr-nav__item--active">
          <DsfrNavigationMenu
            :title="title"
            :links="links"
          />
        </li>
      </ul>
    </div>
  `,
})

NavigationMenuSimple.args = {
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
