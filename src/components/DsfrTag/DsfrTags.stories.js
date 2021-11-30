import DsfrTag from './DsfrTag.vue'
import DsfrTags from './DsfrTags.vue'

import VIcon from 'oh-vue-icons/dist/v3/icon.es'
import {
  RiArrowLeftFill,
  RiArrowRightFill,
} from 'oh-vue-icons/icons/ri/index.js'

VIcon.add(
  RiArrowLeftFill,
  RiArrowRightFill,
)

export default {
  component: DsfrTags,
  title: 'Composants/Étiquettes - DsfrTags',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    label: {
      control: 'text',
      description: '**Texte** du tag',
    },
    disabled: {
      control: 'boolean',
      description: 'Indique si le tag est **inactivé**',
    },
    icon: {
      control: 'text',
      description: '**Nom de l’icône** (tel que sur le site [RemixIcon](https://remixicon.com), exemple: `"ri-checkbox-circle-line"`) à afficher à côté du texte du bouton.\n\n Par défaut, l’icône est à gauche',
    },
    iconRight: {
      control: 'boolean',
      description: 'Indique si l’icône doit **s’afficher à droite** (`true`)',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Indique si l’icône doit apparaître seule (le `label` sera dans l’attribut `aria-label` de l’icône)',
    },
    small: {
      control: 'boolean',
      description: 'Indique si le tag doit être petit',
    },
    tagName: {
      control: 'text',
      description: 'Balise à utiliser. `"p"` par défaut, sauf :\n\n- si `link` est indiqué, auquel cas le défaut est\n  - `"a"` si le lien est externe,\n  - `"router-link"` ; si le lien est interne ;\n-   si `disabled` est à `true` et qu’il n’y a pas de lien, le défaut est `"button".`)',
    },
    tags: {
      control: 'object',
      description: 'Tableau d’objets à passer à `DsfrTags` (avec un « s »), chaque objet pourra contenir toutes les props à passer à `DsfrTag` (sans « s »)',
    },
  },
}

const tagGroup = [
  { label: 'Tag avec icône à gauche', icon: 'ri-arrow-left-line' },
  { label: 'Tag avec icône à droite', icon: 'ri-arrow-right-line', iconRight: true },
]

const tags = [
  [
    { label: 'Tag sans icône' },
    { label: 'Tag avec icône à gauche', icon: 'ri-arrow-left-line' },
    { label: 'Tag avec icône à droite', icon: 'ri-arrow-right-line', iconRight: true },
  ],
  [
    { label: 'Petit tag sans icône', small: true },
    { label: 'Petit tag avec icône à gauche', icon: 'ri-arrow-left-line', small: true },
    { label: 'Petit tag avec icône à droite', icon: 'ri-arrow-right-line', iconRight: true, small: true },
  ],
  [
    { label: 'Tag cliquable sans icône', link: 'https://vue-dsfr.netlify.app' },
    { label: 'Tag cliquable avec icône à gauche', icon: 'ri-arrow-left-line', link: 'https://vue-dsfr.netlify.app' },
    { label: 'Tag cliquable avec icône à droite', icon: 'ri-arrow-right-line', iconRight: true, link: 'https://vue-dsfr.netlify.app' },
  ],
  [
    { label: 'Petit tag cliquable sans icône', small: true, link: 'https://vue-dsfr.netlify.app' },
    { label: 'Petit tag cliquable avec icône à gauche', icon: 'ri-arrow-left-line', small: true, link: 'https://vue-dsfr.netlify.app' },
    { label: 'Petit tag cliquable avec icône à droite', icon: 'ri-arrow-right-line', iconRight: true, small: true, link: 'https://vue-dsfr.netlify.app' },
  ],
]

export const Etiquette = (args) => ({
  components: { DsfrTag },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrTag
      :label="label"
      :icon="icon"
      :tagName="tagName"
      :iconRight="iconRight"
      :iconOnly="iconOnly"
      :disabled="disabled"
      :small="small"
    />
  </div>
  `,
})
Etiquette.args = {
  dark: false,
  label: 'Étiquette',
  icon: '',
  iconRight: false,
  iconOnly: false,
  disabled: false,
  small: false,
  tagName: undefined,
}

export const GroupeDEtiquettes = (args) => ({
  components: { DsfrTags },
  data () {
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrTags
      :tags="tags"
    />
  </div>
  `,
})
GroupeDEtiquettes.args = {
  dark: false,
  tags: tagGroup,
}

export const EtiquettesSimples = (args) => ({
  components: { DsfrTags },
  data () {
    // {
    //   tags: [
    //     { label: 'Tag avec icône à gauche', icon: 'ri-arrow-left-line' },
    //     { label: 'Tag avec icône à droite', icon: 'ri-arrow-right-line', iconRight: true },
    //   ]
    // }
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrTags
      :tags="tags"
    />
  </div>
  `,
})
EtiquettesSimples.args = {
  dark: false,
  tags: tags[0],
}

export const EtiquettesSimplesPetites = (args) => ({
  components: { DsfrTags },
  data () {
    // {
    //   tags: [
    //     { label: 'Petit tag sans icône', small: true },
    //     { label: 'Petit tag avec icône à gauche', icon: 'ri-arrow-left-line', small: true },
    //     { label: 'Petit tag avec icône à droite', icon: 'ri-arrow-right-line', iconRight: true, small: true },
    //   ],
    // }
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrTags
      :tags="tags"
    />
  </div>
  `,
})
EtiquettesSimplesPetites.args = {
  dark: false,
  tags: tags[1],
}

export const EtiquettesCliquables = (args) => ({
  components: { DsfrTags },
  data () {
    // {
    //   tags: [
    //     { label: 'Tag cliquable sans icône', link: 'https://vue-dsfr.netlify.app' },
    //     { label: 'Tag cliquable avec icône à gauche', icon: 'ri-arrow-left-line', link: 'https://vue-dsfr.netlify.app' },
    //     { label: 'Tag cliquable avec icône à droite', icon: 'ri-arrow-right-line', iconRight: true, link: 'https://vue-dsfr.netlify.app' },
    //   ]
    // }
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrTags
      :tags="tags"
    />
  </div>
  `,
})
EtiquettesCliquables.args = {
  dark: false,
  tags: tags[2],
}

export const EtiquettesCliquablesPetites = (args) => ({
  components: { DsfrTags },
  data () {
    // {
    //   tags: [
    //     { label: 'Tag cliquable sans icône', small: true, link: 'https://vue-dsfr.netlify.app' },
    //     { label: 'Tag cliquable avec icône à gauche', icon: 'ri-arrow-left-line', small: true, link: 'https://vue-dsfr.netlify.app' },
    //     { label: 'Tag cliquable avec icône à droite', icon: 'ri-arrow-right-line', iconRight: true, small: true, link: 'https://vue-dsfr.netlify.app' },
    //   ]
    // }
    return args
  },
  template: `
  <div :data-fr-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrTags
      :tags="tags"
    />
  </div>
  `,
})
EtiquettesCliquablesPetites.args = {
  dark: false,
  tags: tags[3],
}
