import DsfrSideMenu from './DsfrSideMenu.vue'
import DsfrSideMenuList from './DsfrSideMenuList.vue'
import DsfrSideMenuListItem from './DsfrSideMenuListItem.vue'
import DsfrSideMenuLink from './DsfrSideMenuLink.vue'
import DsfrSideMenuButton from './DsfrSideMenuButton.vue'

export default {
  component: DsfrSideMenuButton,
  title: 'Composants/DsfrSideMenuButton',
  argTypes: {
    active: {
      control: 'boolean',
      description: 'indique que l’item de menu correspond à la page courante',
    },
    expanded: {
      control: 'boolean',
      description: 'Permet de dire si le menu associé est plié (`false`) ou déplié (`true`)',
    },
    controlId: {
      control: 'text',
      description: 'Valeur de l’id du menu associé qui sera plié et déplié lors du clic sur ce bouton',
    },
  },
}

export const BoutonDeMenuDepliable = (args, { argTypes }) => ({
  components: {
    DsfrSideMenu,
    DsfrSideMenuList,
    DsfrSideMenuListItem,
    DsfrSideMenuLink,
    DsfrSideMenuButton,
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
      <DsfrSideMenuListItem>
        <DsfrSideMenuButton
          :active="active"
          :expanded="isExpanded"
          :control-id="controlId"
          @toggle-expand="isExpanded = !isExpanded"
        >
          Item de menu actifavec sous-menu
        </DsfrSideMenuButton>
        <DsfrSideMenuList
          :id="controlId"
          :expanded="expanded"
          :collapsable="true"
        >
          <DsfrSideMenuListItem>
            <DsfrSideMenuLink
              to="/one"
            >
              Lien 1
            </DsfrSideMenuLink>
          </DsfrSideMenuListItem>
          <DsfrSideMenuListItem>
            <DsfrSideMenuLink
              to="/two"
            >
              Lien 2
            </DsfrSideMenuLink>
          </DsfrSideMenuListItem>
        </DsfrSideMenuList>
      </DsfrSideMenuListItem>
    </DsfrSideMenuList>
  </DsfrSideMenu>
  `,
})
BoutonDeMenuDepliable.args = {
  active: false,
  expanded: false,
  controlId: 'sidemenu-1',
  id: 'list-id',
}
