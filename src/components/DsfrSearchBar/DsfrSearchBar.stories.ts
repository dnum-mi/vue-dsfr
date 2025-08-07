import DsfrSearchBar from './DsfrSearchBar.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/barre-de-recherche)
 */
export default {
  component: DsfrSearchBar,
  title: 'Composants/DsfrSearchBar',
  argTypes: {
    label: {
      control: 'text',
      description: 'Texte du `label` de la barre de recherche',
    },
    id: {
      control: 'text',
      description:
        '(optionnel) Valeur de l’attribut `id` de l’input au sein d. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    hideIcon: {
      control: 'boolean',
      description:
        'Indique si l’icône doit être masqué (`true`) ou non (`false`, défaut)',
    },
    placeholder: {
      control: 'text',
      description: 'Texte à afficher si le champ de recherhe n’est pas rempli',
    },
    disabled: {
      control: 'boolean',
      description:
        'Permet de désactiver le champ et le bouton, la saisie du champ et le clic sur le bouton sera impossible.',
    },
    buttonText: {
      control: 'text',
      description: 'Texte du bouton de la barre de recherche',
    },
    modelValue: {
      control: 'text',
      description: 'Contenu du champ de recherche',
    },
    large: {
      control: 'boolean',
      description:
        'Indique si la barre de recherche doit prendre plus de hauteur (`true`) ou non (`false`, défaut)',
    },
    'update:modelValue': {
      description:
        'Événement émis à chaque changement de la valeur du champ de saisie de la recherche',
    },
    search: {
      description: 'Événement émis lors de la validation de la recherche',
    },
  },
}

export const BarreDeRecherche = (args) => ({
  components: {
    DsfrSearchBar,
  },
  data () {
    return args
  },
  template: `
      <DsfrSearchBar
        :label="label"
        :placeholder="placeholder"
        :button-text="buttonText"
        :hide-icon="hideIcon"
        v-model="modelValue"
        :large="large"
      />
  `,
})
BarreDeRecherche.args = {
  label: 'Label de search bar',
  hideIcon: false,
  placeholder: 'Rechercher',
  buttonText: '',
  modelValue: '',
  large: false,
}

export const BarreDeRechercheLarge = (args) => ({
  components: {
    DsfrSearchBar,
  },
  data () {
    return args
  },
  template: `
    <DsfrSearchBar
      :label="label"
      :placeholder="placeholder"
      :hide-icon="hideIcon"
      :button-text="buttonText"
      :large="large"
    />
  `,
})
BarreDeRechercheLarge.args = {
  label: 'Label de search bar',
  hideIcon: true,
  placeholder: 'Rechercher',
  buttonText: 'Rechercher',
  modelValue: '',
  large: true,
}

export const BarreDeRechercheDesactivee = (args) => ({
  components: {
    DsfrSearchBar,
  },
  data () {
    return args
  },
  template: `
      <DsfrSearchBar
        :label="label"
        :placeholder="placeholder"
        :button-text="buttonText"
        :hide-icon="hideIcon"
        v-model="modelValue"
        :large="large"
        :disabled="disabled"
      />
  `,
})
BarreDeRechercheDesactivee.args = {
  label: 'Label de search bar',
  hideIcon: false,
  placeholder: 'Rechercher',
  buttonText: '',
  modelValue: '',
  large: false,
  disabled: true,
}
