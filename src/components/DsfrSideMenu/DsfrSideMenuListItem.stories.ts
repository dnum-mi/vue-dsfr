import DsfrSideMenu from './DsfrSideMenu.vue'
import DsfrSideMenuList from './DsfrSideMenuList.vue'
import DsfrSideMenuListItem from './DsfrSideMenuListItem.vue'
import DsfrSideMenuLink from './DsfrSideMenuLink.vue'

export default {
  component: DsfrSideMenuListItem,
  title: 'Composants/DsfrSideMenuListItem',
  argTypes: {
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

  template: `
  <DsfrSideMenu
    heading-title="Menu latéral exemplaire"
    buttonLabel="Bouton exemplaire"
  >
    <DsfrSideMenuList :id="id">
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
  active: false,
  id: 'list-id',
}
