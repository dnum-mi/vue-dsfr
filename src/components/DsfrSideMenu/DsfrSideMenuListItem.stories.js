import DsfrSideMenu from './DsfrSideMenu.vue'
import DsfrSideMenuList from './DsfrSideMenuList.vue'
import DsfrSideMenuListItem from './DsfrSideMenuListItem.vue'
import DsfrSideMenuLink from './DsfrSideMenuLink.vue'

export default {
  component: DsfrSideMenuLink,
  title: 'Composants/Menu latéral/3 - Item de menu - DsfrSideMenuListItem',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    active: {
      control: 'boolean',
      description: 'Indique si l’item du menu correspond à la page courante (`true`) ou non (`false`)',
    },
  },
}

export const ElementDeListeDeMenuLateral = (args, { argTypes }) => ({
  components: {
    DsfrSideMenu,
    DsfrSideMenuList,
    DsfrSideMenuListItem,
    DsfrSideMenuLink,
  },

  data () {
    return {
      ...args,
      isExpanded: args.expanded,
    }
  },

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },

  template: `
  <DsfrSideMenu
    heading-title="Menu latéral exemplaire"
    buttonLabel="Bouton exemplaire"
  >
    <DsfrSideMenuList>
      <DsfrSideMenuListItem :active="active">
        <DsfrSideMenuLink
          :active="active"
          to="/"
        >
          Lien 1
        </DsfrSideMenuLink>
      </DsfrSideMenuListItem>
    </DsfrSideMenuList>
  </DsfrSideMenu>
  `,
})
ElementDeListeDeMenuLateral.args = {
  dark: false,
  active: false,
}
