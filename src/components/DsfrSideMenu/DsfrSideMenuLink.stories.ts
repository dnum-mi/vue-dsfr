import DsfrSideMenu from './DsfrSideMenu.vue'
import DsfrSideMenuList from './DsfrSideMenuList.vue'
import DsfrSideMenuListItem from './DsfrSideMenuListItem.vue'
import DsfrSideMenuLink from './DsfrSideMenuLink.vue'

export default {
  component: DsfrSideMenuLink,
  title: 'Composants/DsfrSideMenuLink',
  argTypes: {
    to: {
      control: 'text',
      description: 'URL complète pour un lien externe, ou chaîne de caractère ou objet à donner à `to` de `RouterLink` pour un lien interne',
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

  template: `
  <DsfrSideMenu
    heading-title="Menu latéral exemplaire"
    buttonLabel="Bouton exemplaire"
  >
    <DsfrSideMenuList :id="id">
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
  active: false,
  to: '/',
  id: 'list-id',
}
