import DsfrTabs from './DsfrTabs.vue'

import OhVueIcon from 'oh-vue-icons/dist/v3/icon.es'

import { RiCheckboxCircleLine } from 'oh-vue-icons/icons'

OhVueIcon.add(RiCheckboxCircleLine)

export default {
  component: DsfrTabs,
  title: 'Basic/Onglets (Tabs)',
  argTypes: {
    dark: { control: 'boolean' },
    tabListName: { control: 'text' },
    tabTitles: { control: 'object' },
    tabContents: { control: 'object' },
  },
}

const tabListName = 'Liste d’onglet'
const title1 = 'Titre 1'
const tabTitles = [
  { title: title1, icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 2', icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 3', icon: 'ri-checkbox-circle-line' },
  { title: 'Titre 4', icon: 'ri-checkbox-circle-line' },
]
const tabContents = ['Contenu1', 'Contenu2', 'Contenu3', 'Contenu4']

export const Onglets = (args) => ({
  components: { DsfrTabs },
  data () {
    return args
  },
  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrTabs
      :tab-list-name="tabListName"
      :tab-titles="tabTitles"
      :tab-contents="tabContents"
    />
  </div>
  `,
})
Onglets.args = {
  dark: false,
  tabListName,
  tabTitles,
  tabContents,
}
