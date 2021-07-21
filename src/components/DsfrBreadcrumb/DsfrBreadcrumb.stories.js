import DsfrBreadcrumb from './DsfrBreadcrumb.vue'

export default {
  component: DsfrBreadcrumb,
  title: 'Basic/BreadCrumb',
  argTypes: {
    dark: { control: 'boolean' },
    links: { control: 'object' },
    showButton: { control: 'boolean' },
  },
}

const secondLinkText = 'Lien deux'
const currentPageText = 'Lien 3 avec plein de texte et patati et patata'

const links = [
  {
    to: '/lien-1',
    text: 'Lien 1',
  },
  {
    to: '/lien-2',
    text: secondLinkText,
  },
  {
    text: currentPageText,
  },
]

export const FilDAriane = (args) => ({
  components: { DsfrBreadcrumb },
  data () {
    return args
  },
  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrBreadcrumb
      :links="links"
      :showButton="showButton"
    />
  </div>
  `,
})

FilDAriane.args = {
  links,
  dark: false,
  showButton: true,
}
