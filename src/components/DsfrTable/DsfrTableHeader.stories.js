import DsfrTable from './DsfrTable.vue'
import DsfrTableHeader from './DsfrTableHeader.vue'

import './table.stories.css'

export default {
  component: DsfrTableHeader,
  title: 'Composants/Tableau/En-tête de tableau - DsfrTableHeader',
  argTypes: {
    title: { control: 'text' },
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    header: {
      control: 'string',
      description: 'Texte de l’en-tête du tableau',
    },
    headerAttrs: {
      control: 'object',
      description: 'Objet contenant les props ou événements à passer à la balise `th`',
    },
    onClickHeader: {
      action: 'Clic sur en-tête',
    },
  },
}

const header = 'En-tête'
const headerAttrs = { class: 'ns-resize', onClick: () => {} }

export const EnTeteDeTableau = (args) => ({
  components: {
    DsfrTable,
    DsfrTableHeader,
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
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrTable
        :title="title"
      >
        <template v-slot:header>
          <tr>
            <DsfrTableHeader :header="header" :header-attrs="headerAttrs" />
          </tr>
        </template>
        &lt;Corps du tableau>
      </DsfrTable>
    </div>
  `,
})
EnTeteDeTableau.args = {
  dark: false,
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
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrTable
        :title="title"
      >
        <template v-slot:header>
          <tr>
            <DsfrTableHeader :header="header" :header-attrs="headerAttrs" :icon="icon" />
          </tr>
        </template>
        &lt;Corps du tableau>
      </DsfrTable>
    </div>
  `,
})
EnTeteDeTableauAvecIcone.args = {
  dark: false,
  header,
  headerAttrs: {
    ...headerAttrs,
    style: 'display: flex; justify-content: space-between; align-items: center',
  },
  icon,
}
