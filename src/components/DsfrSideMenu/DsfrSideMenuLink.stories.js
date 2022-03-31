import DsfrSideMenu from './DsfrSideMenu.vue'
import DsfrSideMenuList from './DsfrSideMenuList.vue'
import DsfrSideMenuListItem from './DsfrSideMenuListItem.vue'
import DsfrSideMenuLink from './DsfrSideMenuLink.vue'

export default {
  component: DsfrSideMenuLink,
  title: 'Composants/Menu latéral/4 - Lien de menu dépliable - DsfrSideMenuLink',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    to: {
      control: 'text',
      description: 'URL complète pour un lien externe, ou chaîne de caractère ou objet à donner à `to` de `router-link` (ou `nuxt-link`) pour un lien interne',
    },
    active: {
      control: 'boolean',
      description: 'Indique si le lien correspond à la page courante (`true`) ou non (`false`)',
    },
  },
}

export const LienDansUnElementDeListeDeMenuLateral = (args, { argTypes }) => ({
  components: {
    DsfrSideMenu,
    DsfrSideMenuList,
    DsfrSideMenuListItem,
    DsfrSideMenuLink,
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
  <DsfrSideMenu
    heading-title="Menu latéral exemplaire"
    buttonLabel="Bouton exemplaire"
  >
    <DsfrSideMenuList>
      <DsfrSideMenuListItem :active="active">
        <DsfrSideMenuLink
          :active="active"
          :to="to"
        >
          Lien 1
        </DsfrSideMenuLink>
      </DsfrSideMenuListItem>
    </DsfrSideMenuList>
  </DsfrSideMenu>
  `,
})
LienDansUnElementDeListeDeMenuLateral.args = {
  dark: false,
  active: false,
  to: '/',
}
