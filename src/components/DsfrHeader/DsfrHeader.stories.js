import DsfrHeader from './DsfrHeader.vue'

import VIcon from 'oh-vue-icons/dist/v3/icon.es'
import {
  RiNotification3Line,
  RiPhoneLine,
} from 'oh-vue-icons/icons/ri/index.js'

VIcon.add(
  RiNotification3Line,
  RiPhoneLine,
)

export default {
  component: DsfrHeader,
  title: 'Composants/En-tête - DsfrHeader',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
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
    homeTo: {
      control: 'text',
      description: 'Lien cible au clic sur le logo ou le titre',
    },
    quickLinks: {
      control: 'array',
      description: `Tableau des liens d’accès rapide, chaque objet contiendra les props suivantes :

- \`label\`: (\`'Notifications'\`, par ex.)
- \`path\`: (\`'/notification'\` par ex.)
- \`icon\` pour le nom de l’icône à afficher (\`'ri-phone-line'\` par ex.)
- \`iconRight\` (\`true\` pour afficher l’icône à droite, \`false\` par défaut)
- \`button\`: (\`true\` pour avoir une balise \`button\`, \`false\` pour laisser en balise \`a\`)`,
    },
    modelValue: {
      control: 'text',
      description: 'Contenu du champs de saisie de la barre de recherche',
    },
    actionOnLogo: { action: 'clicked on logo' },
    actionOnLink: { action: 'clicked on quickLink' },
    onChangeSearchInput: { action: 'search changed' },
  },
}

export const EnTete = (args, { argTypes }) => ({
  components: {
    DsfrHeader,
  },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
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
    <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w);">
      <DsfrHeader
        :service-title="serviceTitle"
        :service-description="serviceDescription"
        :home-to="homeTo"
        :quick-links="quickLinks"
        :show-search="showSearch"
        :logo-text="logoText"
        @click="onClickOnLogo"
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
      />
    </div>
  `,
  methods: {
    onClickOnLogo ($event) {
      $event.preventDefault()
      $event.stopPropagation()
      this.actionOnLogo($event)
    },
  },
})
EnTete.args = {
  dark: false,
  showSearch: true,
  logoText: ['Ministère', 'de l’intérieur'],
  serviceTitle: 'Nom du Site/Service',
  serviceDescription: 'baseline - précisions sur l‘organisation',
  modelValue: '',
  homeTo: '#',
  quickLinks: [
    { label: 'Lien2', path: '', icon: 'ri-notification-3-line', iconOnly: true, button: true },
    { label: 'Lien1', path: '/path1', icon: '' },
    { label: 'Lien3', path: '/path3', icon: 'ri-phone-line', iconRight: true },
  ],
}
