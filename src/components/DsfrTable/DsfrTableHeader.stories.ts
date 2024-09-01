import { fn } from '@storybook/test'

import DsfrTable from './DsfrTable.vue'
import DsfrTableHeader from './DsfrTableHeader.vue'

import VIcon from '../VIcon/VIcon.vue'

import './table.stories.css'

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
      description:
        'Objet contenant les props ou événements à passer à la balise `th`',
    },
    icon: {
      control: 'object',
      description:
        'Objet contenant les props à passer à VIcon pour afficher une icône dans l’en-tête',
    },
    onClickHeader: {
      action: fn(),
      description: 'Fonction pour montrer le clic sur un en-tête',
    },
  },
}

const header = 'En-tête'
const headerAttrs = {
  class: 'ns-resize',
  onClick: () => {},
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
        <tr>
          <td>
            Corps du tableau
          </td>
        </tr>
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
          this.icon =
            iconName === 'ri-sort-desc'
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
        <tr>
          <td>
            Corps du tableau
          </td>
        </tr>
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
