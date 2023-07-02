import DsfrFieldset from './DsfrFieldset.vue'

export default {
  component: DsfrFieldset,
  title: 'Composants/DsfrFieldset',
  argTypes: {
    legend: {
      control: 'text',
      description: 'Slot pour le contenu du titre du `fieldset` (sera dans `<legend class="fr-fieldset__legend">`). Une props du même nom est utilisable pour du texte simple sans mise en forme.',
    },
    legendClass: {
      control: 'text',
      description: 'Classes à ajouter à l’élément `<legend class="fr-fieldset__legend">`',
    },
    legendId: {
      control: 'text',
      description: 'id de la balise `legend`',
    },
    hint: {
      control: 'text',
      description: 'Slot pour le contenu de l’indice (sera dans `<span class="fr-hint-text">` qui sera dans `</legend>`). Une props du même nom est utilisable pour du texte simple sans mise en forme.',
    },
    hintClass: {
      control: 'text',
      description: 'Classe(s) à ajouter à l’élément <span class="fr-hint-text">',
    },
  },
}

export const EnsembleDeChamps = (args) => ({
  components: {
    DsfrFieldset,
  },

  data () {
    return {
      ...args,
      expandedId: undefined,
      title1: args.title + ' 1',
      title2: args.title + ' 2',
    }
  },

  template: `
    <DsfrFieldset
      :legend="legend"
      :hint="hint"
      :legend-class="legendClass"
      :hint-class="hintClass"
      :legend-id="legendId"
    >
      Contenu du fieldset
    </DsfrFieldset>
  `,

})
EnsembleDeChamps.args = {
  legend: 'Titre de l’ensemble des champs',
  legendId: 'legend-id',
  legendClass: '',
  hintClass: '',
  hint: 'Texte d’indice',
}

export const EnsemblePersonnaliseDeChamps = (args) => ({
  components: {
    DsfrFieldset,
  },

  data () {
    return {
      ...args,
      expandedId: undefined,
      title1: args.title + ' 1',
      title2: args.title + ' 2',
    }
  },

  template: `
    <DsfrFieldset
      :legend-id="legendId"
      :legend-class="legendClass"
      :hint-class="hintClass"
    >
      <template #legend>
        <h6>{{ legend }} avec <em>de l’italique</em> dans un titre</h6>
      </template>
      <template #hint>
        {{ hint }} avec <strong>du gras</strong>
      </template>
      Contenu du fieldset
    </DsfrFieldset>
  `,

})
EnsemblePersonnaliseDeChamps.args = {
  legend: 'Contenu personnalisé du titre de l’ensemble des champs',
  legendId: 'legend-id',
  legendClass: '',
  hintClass: '',
  hint: 'Contenu personnalisé de l’indice',
}
