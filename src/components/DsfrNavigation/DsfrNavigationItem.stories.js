import DsfrNavigation from './DsfrNavigation.vue'
import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'

export default {
  component: DsfrNavigationItem,
  title: 'Composants/Navigation Principale/6. Item de navigation - DsfrNavigationItem',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    id: {
      control: 'string',
      description: 'Valeur de l’attribut `id` de ce sous-menu. *N.B. : Il est recommandé de ne pas le donner, la bibliothèque lui en donnera un aléatoire*.',
    },
    active: {
      control: 'boolean',
      description: 'Indique l’élément est actif (l’utilisateur est actuellement sur la page pointée par cet item de menu de navigation).',
    },
  },
}

export const ItemDeNavigation = args => ({
  components: {
    DsfrNavigation,
    DsfrNavigationItem,
    DsfrNavigationMenuLink,
  },

  data () {
    return args
  },

  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrNavigation>
      <DsfrNavigationItem :active="active">
        <DsfrNavigationMenuLink
          to="/"
          text="Texte du lien de l’item de menu"
        />
      </DsfrNavigationItem>
    </DsfrNavigation>
  </div>
  `,
})
ItemDeNavigation.args = {
  dark: false,
  active: false,
}
