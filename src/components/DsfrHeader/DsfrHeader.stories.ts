import type { DsfrHeaderProps } from './DsfrHeader.types'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

import { expect, fn, userEvent, within } from 'storybook/test'
import { ref, watch } from 'vue'

import DsfrNavigation from '../DsfrNavigation/DsfrNavigation.vue'

import DsfrHeader from './DsfrHeader.vue'

const delay = (timeout = 100) =>
  new Promise((resolve) => setTimeout(resolve, timeout))

const meta = {
  component: DsfrHeader,
  title: 'Composants/DsfrHeader',
  tags: ['autodocs'],
  argTypes: {
    logoText: {
      control: 'object',
      description: 'Texte ou liste de texte (chaque élément du tableau sera sur une ligne) du logo',
    },
    serviceTitle: {
      control: 'text',
      description: 'Titre principal de l’en-tête (ex.: Nom du service)',
    },
    serviceDescription: {
      control: 'text',
      description: 'Sous-titre de l’en-tête (ex.: Description du service)',
    },
    showSearch: {
      control: 'boolean',
      description: 'Indique si le champs de recherche doit être affiché (`true`) ou non (`false`, défaut)',
    },
    showBeta: {
      control: 'boolean',
      description: 'Indique si le badge "BETA" doit être affiché (`true`) ou non (`false`, défaut)',
    },
    homeTo: {
      control: 'text',
      description: 'Lien cible au clic sur le logo ou le titre',
    },
    quickLinks: {
      control: 'object',
      description: `Tableau des liens d’accès rapide, chaque objet contiendra les props suivantes :
- \`label\`: Texte du lien (\`'Notifications'\`, par ex.)
- \`to\`: Chemin ou objet à passer à \`to\` de \`RouterLink\` (\`'/notification'\` ou \`{ name: 'Notifications' }\` par ex.)
- \`href\`: URL à passer à \`href\` de la balise \`<a>\` (\`'https://www.systeme-de-design.gouv.fr\` par ex.) **pour un lien externe uniquement**.
- \`icon\` Nom de l’icône [Remix Icon](https://remixicon.com/) (ou toute autre icône de [@iconify/vue](https://iconify.design/docs/icon-components/vue/)) à afficher (\`'ri-phone-line'\` par ex.)
- \`target\` La target du lien (\`'_self'\`, \`'_blank'\` par ex.)
- \`iconRight\` Permet de mettre l’icône à droite (si la valeur est \`true\` ou <em>truthy</em> et que \`icon\` est renseigné )
- \`iconAttrs\` Ensemble des props/attributs à donner à \`<VIcon>\` (Cf. [Doc](/composants/VIcon)). Ex. : \`{ scale: 0.9, animation: 'spin' }\`
- \`button\`: \`true\` pour avoir une balise \`button\`, \`false\` pour laisser en balise \`a\`
- accepte aussi tout ce qui peut être mis sur un composant, par exemple \`class\`
`,
    },
    modelValue: {
      control: 'text',
      description: 'Contenu du champs de saisie de la barre de recherche',
    },
    placeholder: {
      control: 'text',
      description: '**placeholder** du champ de saisie de la barre de recherche',
    },
    operatorImgSrc: {
      control: 'text',
      description: 'URL vers l’image de l’opérateur',
    },
    operatorImgAlt: {
      control: 'text',
      description: 'Texte alternatif pour l’image de l’opérateur',
    },
    operatorImgStyle: {
      control: 'object',
      description: 'Style supplémentaire pour l’image de l’opérateur',
    },
    showSearchLabel: {
      control: 'text',
      description: 'Label du bouton pour afficher la recherche.',
    },
    menuLabel: {
      control: 'text',
      description: 'Label du menu.',
    },
    menuModalLabel: {
      control: 'text',
      description: 'Label du menu en mode modal.',
    },
    closeMenuModalLabel: {
      control: 'text',
      description: 'Label du bouton de fermeture du menu en mode modal.',
    },
    languageSelector: {
      control: 'object',
      description: 'Objet contenant les props attendues par DsfrLanguageSelector',
    },
    homeLabel: {
      control: 'text',
      description: 'Label de l\'accueil composant le titre du lien présentant le service.',
    },
    search: fn(),
  },
} satisfies Meta<typeof DsfrHeader>

export default meta
type Story = StoryObj<typeof meta>

const baseArgs: Partial<DsfrHeaderProps> & { search: () => void } = {
  showSearch: true,
  logoText: ['Ministère', 'de l’intérieur'],
  serviceTitle: 'Nom du Site/Service',
  serviceDescription: 'baseline - précisions sur l‘organisation',
  modelValue: '',
  placeholder: 'Rechercher...',
  homeTo: '/',
  search: fn(),
  quickLinks: [
    {
      label: 'Créer un espace',
      to: '/space/create',
      icon: 'ri-add-circle-line',
      iconAttrs: { scale: 0.9 },
    },
    {
      label: 'Se connecter',
      to: '/login',
      icon: 'ri-lock-line',
    },
    {
      label: 'S’enregistrer',
      to: '/signin',
      icon: 'ri-account-circle-line',
      iconRight: true,
      iconAttrs: { animation: 'spin', speed: 'slow' },
    },
  ],
}

const render = (args) => ({
  components: { DsfrHeader },
  setup () {
    const languageSelector = ref(args.languageSelector)
    watch(() => args.languageSelector?.currentLanguage, (val) => {
      languageSelector.value.currentLanguage = val
    })
    return { args, languageSelector }
  },
  template: `
    <DsfrHeader
      :service-title="args.serviceTitle"
      :service-description="args.serviceDescription"
      :home-to="args.homeTo"
      :quick-links="args.quickLinks"
      :show-search="args.showSearch"
      :language-selector="args.languageSelector"
      :logo-text="args.logoText"
      :operator-img-src="args.operatorImgSrc"
      :operator-img-alt="args.operatorImgAlt"
      :operator-img-style="args.operatorImgStyle"
      :show-beta="args.showBeta"
      v-model="args.modelValue"
      @search="args.search"
      @update:model-value="args['onUpdate:modelValue']"
      @click:quick-link="args['onClick:quick-link']"
      @language-select="languageSelector.currentLanguage = $event.codeIso"
    />
  `,
})

export const EnTeteSimple: Story = {
  render,
  args: {
    ...baseArgs,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const searchInput = canvas.getByPlaceholderText(args.placeholder!)
    await userEvent.type(searchInput, 'test', { delay: 100 })
    const searchButton = canvas.getByTitle('Rechercher')
    await userEvent.click(searchButton)
    expect(args.search).toHaveBeenCalledWith('test')
  },
}

export const EnTeteAvecLogoOperateur: Story = {
  render,
  args: {
    ...baseArgs,
    operatorImgSrc: '/cat.svg',
    operatorImgAlt: 'Logo opérateur',
    operatorImgStyle: { height: '40px' },
  },
}

export const EnTeteAvecNavigation: Story = {
  render: (args) => ({
    components: { DsfrHeader, DsfrNavigation },
    setup () {
      const modelValue = ref(args.modelValue)
      watch(() => args.modelValue, (val) => {
        modelValue.value = val
      })
      return { ...args, modelValue }
    },
    template: `
      <DsfrHeader
        :service-title="serviceTitle"
        :service-description="serviceDescription"
        :home-to="homeTo"
        :quick-links="quickLinks"
        :show-search="showSearch"
        :logo-text="logoText"
        v-model="modelValue"
        @search="$attrs.search"
        @update:model-value="$attrs['onUpdate:modelValue']"
      >
        <template #mainnav>
          <DsfrNavigation :nav-items="navItems" />
        </template>
      </DsfrHeader>
    `,
  }),
  args: {
    ...baseArgs,
    navItems: [
      { to: '#essai', text: 'Accès direct' },
      {
        title: 'Menu déroulant',
        links: [{ text: 'Lien 1', to: '#' }, { text: 'Lien 2', to: '#' }],
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const menuTitle = canvas.getByText('Menu déroulant')
    const lien1 = menuTitle?.parentElement?.nextElementSibling
    expect(lien1).not.toBeVisible()
    await userEvent.click(menuTitle)
    await delay(300)
    expect(lien1).toBeVisible()
  },
}

export const EnTeteAvecBadgeBeta: Story = {
  render,
  args: {
    ...baseArgs,
    showBeta: true,
    quickLinks: [],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const badge = canvas.getByText('BETA')
    expect(badge).toBeVisible()
  },
}

export const EnTeteAvecSelecteurDeLangue: Story = {
  render,
  args: {
    ...baseArgs,
    languageSelector: {
      id: 'language-selector-in-header',
      currentLanguage: 'fr',
      languages: [
        { label: 'Français', codeIso: 'fr' },
        { label: 'English', codeIso: 'en' },
        { label: 'Deutsch', codeIso: 'de' },
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const languageSelectorFR = canvas.getByText('FR')
    expect(languageSelectorFR).toBeVisible()
    await userEvent.click(languageSelectorFR)
    const languageSelectorEN = canvas.getByText('EN - English')
    await userEvent.click(languageSelectorEN)
    const languageSelectorSelectedEN = canvas.getByText('EN')
    expect(languageSelectorSelectedEN).toBeVisible()
  },
}
