import DsfrTable from './DsfrTable.vue'
import DsfrTableHeader from './DsfrTableHeader.vue'

import { OhVueIcon as VIcon, addIcons } from 'oh-vue-icons'
import { RiSortAsc, RiSortDesc } from 'oh-vue-icons/icons/ri/index.js'

import './table.stories.css'

addIcons(RiSortAsc, RiSortDesc)

export default {
  component: DsfrTableHeader,
  title: 'Composants/DsfrTableHeader',
  argTypes: {
    header: {
      control: 'text',
      description: 'Texte de l’en-tête du tableau',
    },
    headerAttrs: {
      control: 'object',
      description: 'Objet contenant les props ou événements à passer à la balise `th`',
    },
    icon: {
      control: 'object',
      description: 'Objet contenant les props à passer à OhVueIcon pour afficher une icône dans l’en-tête',
    },
    onClickHeader: {
      action: 'Clic sur en-tête',
      description: 'Fonction pour montrer le clic sur un en-tête',
    },
  },
}

const header = 'En-tête'
const headerAttrs = {
  class: 'ns-resize',
  onClick: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
}

export const EnTeteDeTableau = (args) => ({
  components: {
    DsfrTable,
    DsfrTableHeader,
    VIcon,
  },

  data () {
    return {
      ...args,
      headerAttrs: {
        ...args.headerAttrs,
        onClick () {
          args.onClickHeader(args.header)
        },
      },
    }
  },

  template: `
      <DsfrTable
        title="Titre du tableau"
      >
        <template v-slot:header>
          <tr>
            <DsfrTableHeader :header="header" :header-attrs="headerAttrs" />
          </tr>
        </template>
        &lt;Corps du tableau>
      </DsfrTable>
  `,
})

EnTeteDeTableau.args = {
  header,
  headerAttrs,
}

const icon = {
  name: 'ri-sort-desc',
}

export const EnTeteDeTableauAvecIcone = (args) => ({
  components: {
    DsfrTable,
    DsfrTableHeader,
    VIcon,
  },

  data () {
    return {
      ...args,
      headerAttrs: {
        ...args.headerAttrs,
        onClick: () => {
          const iconName = this.icon?.name
          this.icon = iconName === 'ri-sort-desc'
            ? { name: 'ri-sort-asc' }
            : iconName === 'ri-sort-asc'
              ? undefined
              : { name: 'ri-sort-desc' }
          args.onClickHeader(args.header)
        },
      },
    }
  },

  template: `
      <DsfrTable
        title="Titre du tableau"
      >
        <template v-slot:header>
          <tr>
            <DsfrTableHeader :header="header" :header-attrs="headerAttrs" :icon="icon" />
          </tr>
        </template>
        &lt;Corps du tableau>
      </DsfrTable>
  `,

})
EnTeteDeTableauAvecIcone.args = {
  header,
  headerAttrs: {
    ...headerAttrs,
    style: 'display: flex; justify-content: space-between; align-items: center',
  },
  icon,
}
