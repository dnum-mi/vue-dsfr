import { fn } from 'storybook/test'

import DsfrSegmented from './DsfrSegmented.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/controle-segmente)
 */
export default {
  component: DsfrSegmented,
  title: 'Composants/DsfrSegmented',
  tags: ['formulaire', 'bouton'],
  argTypes: {
    id: {
      control: 'text',
      description:
        '(optionnel) Valeur de l’attribut `id` du contrôle segmenté. Par défaut, un id pseudo-aléatoire sera donné.',
    },
    options: {
      control: 'object',
      description:
        'Tableau d’objets : chaque objet contient les props à passer à `DsfrSegmented` - *N.B. : Ne fait pas partie du composant',
    },
    modelValue: {
      control: 'text',
      description: 'Valeur de la case active',
    },
    onChange: { action: fn() },
    'update:modelValue': {
      description: 'Événement émis à chaque changement de valeur',
    },
  },
}

export const Segmented = (args) => ({
  components: { DsfrSegmented },
  data () {
    return args
  },
  template: `
  <div class="fr-form-group">
    <fieldset
      class="fr-segmented"
    >
      <div
        class="fr-segmented__elements"
      >
        <DsfrSegmented
          v-for="option of options"
          :modelValue="modelValue"
          v-bind="option"
          @update:modelValue="updateCheckedValue($event)"
        />
      </div>
    </fieldset>
  </div>
  `,
  methods: {
    updateCheckedValue (val) {
      if (val === this.modelValue) {
        return
      }
      this.onChange(val)
      this.modelValue = val
    },
  },
})
Segmented.args = {
  modelValue: '3',
  options: [
    {
      label: 'Valeur 1',
      value: '1',
      name: 'Choix',
    },
    {
      label: 'Valeur 2',
      value: '2',
      disabled: true,
      name: 'Choix',
    },
    {
      label: 'Valeur 3',
      value: '3',
      name: 'Choix',
    },
  ],
}
