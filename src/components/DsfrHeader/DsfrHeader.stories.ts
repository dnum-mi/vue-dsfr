import { addIcons } from 'oh-vue-icons'

import {
  RiAddCircleLine,
  RiLockLine,
  RiAccountCircleLine,
} from 'oh-vue-icons/icons'

import DsfrHeader from './DsfrHeader.vue'
import DsfrNavigation from '../DsfrNavigation/DsfrNavigation.vue'
import { DsfrLanguageSelectorElement } from '../DsfrLanguageSelector/DsfrLanguageSelector.types'

addIcons(
  RiAddCircleLine,
  RiLockLine,
  RiAccountCircleLine,
)

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/en-tete)
 */
export default {
  component: DsfrHeader,
  title: 'Composants/DsfrHeader',
  argTypes: {
    logoText: {
      control: 'object',
      description: 'Texte ou liste de texte (chaque élément du tableau sera sur une ligne) tu logo',
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
- \`icon\` Nom de l’icône [Remix Icon](https://remixicon.com/) (ou toute autre icône de [oh-vue-icons](https://oh-vue-icons.netlify.app/)) à afficher (\`'ri-phone-line'\` par ex.)
- \`target\` La target du lien (\`'_self'\`, \`'_blank'\` par ex.)
- \`iconRight\` Permet de mettre l’icône à droite (si la valeur est \`true\` ou <em>truthy</em> et que \`icon\` est renseigné )
- \`iconAttrs\` Ensemble des props/attributs à donner à \`<OhVueIcon>\` (Cf. [Doc](https://oh-vue-icons.netlify.app/docs#props)). Ex. : \`{ scale: 0.9, animation: 'spin' }\`
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
    'update:modelValue': {
      description: 'Événement émis lors du changement de la valeur du champ de saisie de la barre de recherche',
    },
    search: {
      description: 'Événement émis lors de la validation de la recherche de la barre de recherche',
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
    actionOnLogo: { action: 'clicked on logo' },
    actionOnLink: { action: 'clicked on quickLink' },
    onChangeSearchInput: { action: 'search changed' },
    onSearch: { action: 'Searching' },
  },
}

export const EnTeteSimple = (args) => ({
  components: {
    DsfrHeader,
  },
  data () {
    return {
      ...args,
      quickLinks: args.quickLinks.map((link, idx) => {
        if (idx === 0) {
          link.onClick = ($event) => {
            $event.preventDefault()
            this.actionOnLink()
          }
        }
        return link
      }),
    }
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
      @click="onClickOnLogo"
      @search="onSearch($event)"
    />
  `,

  methods: {
    onClickOnLogo ($event) {
      $event.preventDefault()
      $event.stopPropagation()
      this.actionOnLogo($event)
    },
  },

})
EnTeteSimple.args = {
  showSearch: true,
  logoText: ['Ministère', 'de l’intérieur'],
  serviceTitle: 'Nom du Site/Service',
  serviceDescription: 'baseline - précisions sur l‘organisation',
  modelValue: '',
  placeholder: '',
  homeTo: '#',
  quickLinks: [
    { label: 'Créer un espace', to: '/space/create', icon: 'ri-add-circle-line', iconAttrs: { scale: 0.9 } },
    { label: 'Se connecter', to: '/login', class: 'fr-fi-lock-line', target: '_blank' },
    { label: 'S’enregistrer', to: '/signin', icon: 'ri-account-circle-line', iconRight: true, iconAttrs: { animation: 'spin', speed: 'slow' } },
  ],
}

export const EnTeteAvecLogoOperateur = (args) => ({
  components: {
    DsfrHeader,
  },
  data () {
    return {
      ...args,
      quickLincks: args.quickLinks.map((link, idx) => {
        if (idx === 0) {
          link.onClick = ($event) => {
            $event.preventDefault()
            this.actionOnLink()
          }
        }
        return link
      }),
    }
  },

  template: `
    <DsfrHeader
      :service-title="serviceTitle"
      :service-description="serviceDescription"
      :home-to="homeTo"
      :quick-links="quickLinks"
      :show-search="showSearch"
      :logo-text="logoText"
      :operator-img-src="operatorImgSrc"
      :operator-img-alt="operatorImgAlt"
      :operator-img-style="operatorImgStyle"
      v-model="modelValue"
      @click="onClickOnLogo"
    />
  `,

  methods: {
    onClickOnLogo ($event) {
      $event.preventDefault()
      $event.stopPropagation()
      this.actionOnLogo($event)
    },
  },

})
EnTeteAvecLogoOperateur.args = {
  showSearch: true,
  logoText: ['Ministère', 'de l’intérieur'],
  serviceTitle: 'Nom du Site/Service',
  serviceDescription: 'baseline - précisions sur l‘organisation',
  modelValue: '',
  placeholder: '',
  homeTo: '#',
  quickLinks: [
    { label: 'Créer un espace', to: '/space/create', icon: 'ri-add-circle-line', iconAttrs: { scale: 0.9 } },
    { label: 'Se connecter', to: '/login', class: 'fr-fi-lock-line' },
    { label: 'S’enregistrer', to: '/signin', icon: 'ri-account-circle-line', iconRight: true, iconAttrs: { animation: 'spin', speed: 'slow' } },
  ],
  operatorImgSrc: '/cat.svg',
  operatorImgAlt: 'Logo opérateur',
  operatorImgStyle: { height: '40px' },
}

export const EnTeteAvecNavigation = (args) => ({
  components: {
    DsfrHeader,
    DsfrNavigation,
  },
  data () {
    return {
      ...args,
      quickLincks: args.quickLinks.map((link, idx) => {
        if (idx === 0) {
          link.onClick = ($event) => {
            $event.preventDefault()
            this.actionOnLink()
          }
        }
        return link
      }),
    }
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
      @click="onClickOnLogo"
      @search="onSearch($event)"
    >
      <template #mainnav>
        <DsfrNavigation
          :nav-items="navItems"
        />
      </template>
    </DsfrHeader>
  `,

  methods: {
    onClickOnLogo ($event) {
      $event.preventDefault()
      $event.stopPropagation()
      this.actionOnLogo($event)
    },
  },

})
EnTeteAvecNavigation.args = {
  showSearch: true,
  logoText: ['Ministère', 'de l’intérieur'],
  serviceTitle: 'Nom du Site/Service',
  serviceDescription: 'baseline - précisions sur l‘organisation',
  modelValue: '',
  placeholder: '',
  homeTo: '#',
  quickLinks: [
    { label: 'Créer un espace', to: '/space/create', icon: 'ri-add-circle-line', iconAttrs: { scale: 0.9 } },
    { label: 'Se connecter', to: '/login', class: 'fr-fi-lock-line', target: '_blank' },
    { label: 'S’enregistrer', to: '/signin', icon: 'ri-account-circle-line', iconRight: true, iconAttrs: { animation: 'spin', speed: 'slow' } },
  ],
  navItems: [
    {
      to: '#essai',
      text: 'Accès direct',
    },
    {
      title: 'Menu déroulant',
      links: [
        {
          text: 'Lien 1',
          to: '#',
        },
        {
          text: 'Lien 2',
          to: '#',
        },
        {
          text: 'Lien 3',
          to: '#',
        },
        {
          text: 'Lien 4',
          to: '#',
        },
        {
          text: 'Lien 5',
          to: '#',
        },
      ],
    },
    {
      title: 'Mega menu',
      link: {
        to: '#',
        text: 'Voir toute la rubrique',
      },
      menus: [
        {
          title: 'Nom de catégorie',
          links: [
            {
              text: 'Lien 1',
              to: '#',
            },
            {
              text: 'Lien 2',
              to: '#',
            },
            {
              text: 'Lien 3',
              to: '#',
            },
            {
              text: 'Lien 4',
              to: '#',
            },
            {
              text: 'Lien 5',
              to: '#',
            },
          ],
        },
        {
          title: 'Nom de catégorie',
          links: [
            {
              text: 'Lien 1',
              to: '#',
            },
            {
              text: 'Lien 2',
              to: '#',
            },
            {
              text: 'Lien 3',
              to: '#',
            },
            {
              text: 'Lien 4',
              to: '#',
            },
            {
              text: 'Lien 5',
              to: '#',
            },
          ],
        },
        {
          title: 'Nom de catégorie',
          links: [
            {
              text: 'Lien 1',
              to: '#',
            },
            {
              text: 'Lien 2',
              to: '#',
            },
            {
              text: 'Lien 3',
              to: '#',
            },
            {
              text: 'Lien 4',
              to: '#',
            },
            {
              text: 'Lien 5',
              to: '#',
            },
          ],
        },
      ],
    },
  ],
}

export const EnTeteAvecBadgeBeta = (args) => ({
  components: {
    DsfrHeader,
  },
  data () {
    return {
      ...args,
      quickLincks: args.quickLinks.map((link, idx) => {
        if (idx === 0) {
          link.onClick = ($event) => {
            $event.preventDefault()
            this.actionOnLink()
          }
        }
        return link
      }),
    }
  },

  template: `
    <DsfrHeader
      :service-title="serviceTitle"
      :service-description="serviceDescription"
      :home-to="homeTo"
      :quick-links="quickLinks"
      :show-search="showSearch"
      :logo-text="logoText"
      :show-beta="showBeta"
      v-model="modelValue"
      @click="onClickOnLogo"
      @search="onSearch($event)"
    />
  `,

  methods: {
    onClickOnLogo ($event) {
      $event.preventDefault()
      $event.stopPropagation()
      this.actionOnLogo($event)
    },
  },

})
EnTeteAvecBadgeBeta.args = {
  showSearch: false,
  showBeta: true,
  logoText: ['Ministère', 'de l’intérieur'],
  serviceTitle: 'Nom du Site/Service',
  serviceDescription: 'baseline - précisions sur l‘organisation',
  modelValue: '',
  placeholder: '',
  homeTo: '#',
  quickLinks: [],
}

export const EnTeteAvecSelecteurDeLangue = (args) => ({
  components: {
    DsfrHeader,
  },
  setup () {
    return {
      ...args,
      quickLincks: args.quickLinks.map((link, idx) => {
        if (idx === 0) {
          link.onClick = ($event) => {
            $event.preventDefault()
            this.actionOnLink()
          }
        }
        return link
      }),
    }
  },

  template: `
    <DsfrHeader
      :service-title="serviceTitle"
      :service-description="serviceDescription"
      :home-to="homeTo"
      :quick-links="quickLinks"
      :show-search="showSearch"
      :logo-text="logoText"
      :show-beta="showBeta"
      v-model="modelValue"
      :language-selector="languageSelector"
      @click="onClickOnLogo"
      @search="onSearch($event)"
      @language-select="selectLanguage($event)"
    />
  `,

  methods: {
    onClickOnLogo ($event) {
      $event.preventDefault()
      $event.stopPropagation()
      this.actionOnLogo($event)
    },
    selectLanguage ({ codeIso }: DsfrLanguageSelectorElement) {
      this.languageSelector.currentLanguage = codeIso
    },
  },

})
EnTeteAvecSelecteurDeLangue.args = {
  showSearch: false,
  showBeta: true,
  logoText: ['Ministère', 'de l’intérieur'],
  serviceTitle: 'Nom du Site/Service',
  serviceDescription: 'baseline - précisions sur l‘organisation',
  modelValue: '',
  placeholder: '',
  homeTo: '#',
  quickLinks: [
    { label: 'Créer un espace', to: '/space/create', icon: 'ri-add-circle-line', iconAttrs: { scale: 0.9 } },
    { label: 'Se connecter', to: '/login', class: 'fr-fi-lock-line', target: '_blank' },
    { label: 'S’enregistrer', to: '/signin', icon: 'ri-account-circle-line', iconRight: true, iconAttrs: { animation: 'spin', speed: 'slow' } },
  ],
  languageSelector: {
    id: 'language-selector-in-header',
    currentLanguage: 'fr',
    languages: [
      { label: 'Français', codeIso: 'fr' },
      { label: 'English', codeIso: 'en' },
      { label: 'Deutsch', codeIso: 'de' },
    ],
  },
}
