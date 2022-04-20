import DsfrTag from './DsfrTag.vue'
import DsfrTags from './DsfrTags.vue'

import { addIcons } from 'oh-vue-icons'

import {
  RiArrowLeftFill,
  RiArrowRightFill,
  RiArrowLeftLine,
  RiArrowRightLine,
} from 'oh-vue-icons/icons/ri/index.js'

addIcons(
  RiArrowLeftFill,
  RiArrowRightFill,
  RiArrowLeftLine,
  RiArrowRightLine,
)

export default {
  component: DsfrTags,
  title: 'Composants/Étiquettes - DsfrTags',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    class: {
      control: 'text',
      description: 'Classe CSS (facultative) pour utiliser les icônes du DSFR',
    },
    label: {
      control: 'text',
      description: '**Texte** du tag',
    },
    disabled: {
      control: 'boolean',
      description: 'Indique si le tag est **inactivé**',
    },
    selected: {
      control: 'boolean',
      description: 'Indique si le tag est **selectionné**',
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
    link: {
      control: 'text',
      description: 'URL complète pour un lien externe, ou chaîne de caractère ou objet à donner à `to` de `router-link` pour un lien interne',
    },
    small: {
      control: 'boolean',
      description: 'Indique si le tag doit être petit',
    },
    tagName: {
      control: 'text',
      description: `Balise ou composant à utiliser (e.g. : \`"p"\`, \`"button"\`, \`"strong"\`, \`"em"\`).
- \`"p"\` par défaut
- si \`link\` est indiqué, le défaut est \`"a"\` si le lien est externe et \`"router-link"\`  si le lien est interne
- si \`disabled\` est à \`true\` et qu’il n’y a pas de lien, le défaut est \`"button".\`
      `,
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
  [
    { label: 'Tag sélectionné sans icône', tagName: 'button', selected: true },
    { label: 'Tag sélectionné avec icône', icon: 'ri-arrow-left-line', tagName: 'button', selected: true },
    { label: 'Tag sélectionné avec icône', icon: 'ri-arrow-right-line', tagName: 'button', selected: true },
  ],
  [
    { label: 'Tag fermable 1', class: 'fr-tag--dismiss', tagName: 'button' },
    { label: 'Tag fermable 2', class: 'fr-tag--dismiss', tagName: 'button' },
    { label: 'Tag fermable 3', class: 'fr-tag--dismiss', tagName: 'button' },
  ],
]

export const Etiquette = (args) => ({
  components: { DsfrTag },
  data () {
    const obj = {
      ...args,
      className: args.class,
    }
    delete obj.class
    return obj
  },
  template: `
    <DsfrTag
      :class="className"
      :label="label"
      :icon="icon"
      :tagName="tagName"
      :iconRight="iconRight"
      :iconOnly="iconOnly"
      :disabled="disabled"
      :selected="selected"
      :small="small"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Etiquette.args = {
  dark: false,
  label: 'Étiquette',
  class: '',
  icon: '',
  iconRight: false,
  iconOnly: false,
  disabled: false,
  small: false,
  selected: false,
  tagName: 'button',
}

export const GroupeDEtiquettes = (args) => ({
  components: { DsfrTags },
  data () {
    return args
  },
  template: `
    <DsfrTags
      :tags="tags"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
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
    <DsfrTags
      :tags="tags"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
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
    <DsfrTags
      :tags="tags"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
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
    <DsfrTags
      :tags="tags"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
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
    <DsfrTags
      :tags="tags"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
EtiquettesCliquablesPetites.args = {
  dark: false,
  tags: tags[3],
}

export const EtiquettesSelectionnables = (args) => ({
  components: { DsfrTags },
  data () {
    // {
    //   tags: [
    //     { label: 'Tag sélectionné sans icône', tagName: 'button', selected: true },
    //     { label: 'Tag sélectionné avec icône', icon: 'ri-arrow-left-line', tagName: 'button', selected: true },
    //     { label: 'Tag sélectionné avec icône', icon: 'ri-arrow-right-line', tagName: 'button', selected: true },
    //   ],
    // }
    return {
      ...args,
      tags: args.tags.map((tag, idx) => ({
        ...tag,
        onClick: () => {
          const clickedTag = this.tags.find((tag, i) => i === idx)
          clickedTag.selected = !clickedTag.selected
        },
      })),
    }
  },
  template: `
    <DsfrTags
      :tags="tags"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
EtiquettesSelectionnables.args = {
  dark: false,
  tags: tags[4],
}

export const EtiquettesFermables = (args) => ({
  components: { DsfrTags },
  data () {
    // {
    //   tags: [
    //     { label: 'Tag 1 fermable', class: 'fr-tag--dismiss', tagName: 'button' },
    //     { label: 'Tag 2 fermable', class: 'fr-tag--dismiss', tagName: 'button' },
    //     { label: 'Tag 3 fermable', class: 'fr-tag--dismiss', tagName: 'button' },
    //   ],
    // }

    const addClickHandlers = (tags) => {
      return tags.map((tag, idx) => ({
        ...tag,
        onClick: () => {
          // Récupérer le tag sur lequel on vient de cliquer
          const clickedTag = this.tags.find((tag, i) => i === idx)
          // Le retirer du tableau this.tags : recréer un nouveau tableau SANS l’élément
          // et AVEC dans le nouveau tableau les bons indexes dans la fonction onClick
          const newTags = this.tags.filter((tag, i) => i !== idx)
          this.tags = addClickHandlers(newTags)
          // L’ajouter dans this.closedTags
          this.closedTags = [...this.closedTags, clickedTag]

          // Si this.tags n’a plus d’éléments,
          if (this.tags.length === 0) {
            // attendre 1 seconde, et réinitialiser les étiquettes de la story
            setTimeout(resetTags, 1000)
          }
        },
      }))
    }

    const resetTags = () => {
      // mettre tous les éléments de this.closedTags dans this.tags
      this.tags = addClickHandlers(this.closedTags)
      // et réinitialiser this.closedTags à tableau vide
      this.closedTags = []
    }

    return {
      ...args,
      closedTags: [],
      tags: addClickHandlers(args.tags),
    }
  },
  template: `
    <DsfrTags
      :tags="tags"
    />
  `,
  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
EtiquettesFermables.args = {
  dark: false,
  tags: tags[5],
}
