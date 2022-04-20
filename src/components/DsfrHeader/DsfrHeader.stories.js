import DsfrHeader from './DsfrHeader.vue'

import { addIcons } from 'oh-vue-icons'

import {
  RiAddCircleLine,
  RiLockLine,
  RiAccountCircleLine,
} from 'oh-vue-icons/icons/ri/index.js'

addIcons(
  RiAddCircleLine,
  RiLockLine,
  RiAccountCircleLine,
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
      control: 'object',
      description: `Tableau des liens d’accès rapide, chaque objet contiendra les props suivantes :
- \`label\`: Texte du lien (\`'Notifications'\`, par ex.)
- \`to\`: Chemin ou objet à passer à \`to\` de \`router-link\` (\`'/notification'\` ou \`{ name: 'Notifications' }\` par ex.)
- \`href\`: URL à passer à \`href\` de la balise \`<a>\` (\`'https://systeme-de-design.gouv.fr\` par ex.) **pour un lien externe uniquement**.
- \`icon\` Nom de l’icône [Remix Icon](https://remixicon.com/) (ou toute autre icône de [oh-vue-icons](https://oh-vue-icons.netlify.app/)) à afficher (\`'ri-phone-line'\` par ex.)
- \`iconRight\` Permet de mettre l’icône à droite (si la valeur est \`true\` ou <em>truthy</em> et que \`icon\` est renseigné )
- \`iconAttrs\` Ensemble des props/attributs à donner à \`<OhVueIcon>\` (Cf. [Doc](https://oh-vue-icons.netlify.app/docs#props)). Ex. : \`{ scale: 0.9, animation: }\`
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
    <DsfrHeader
      :service-title="serviceTitle"
      :service-description="serviceDescription"
      :home-to="homeTo"
      :quick-links="quickLinks"
      :show-search="showSearch"
      :logo-text="logoText"
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

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
EnTete.args = {
  dark: false,
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
}
