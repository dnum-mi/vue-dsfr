import DsfrLanguageSelector from './DsfrLanguageSelector.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/selecteur-de-langue)
 */
export default {
  component: DsfrLanguageSelector,
  title: 'Composants/DsfrLanguageSelector',
  argTypes: {

    id: {
      control: 'text',
      description: '(Facultatif) `id` à donner pour la liste des langues (sera mis sur la balise `div` parente de la balise `ul`)',
    },
    languages: {
      control: 'object',
      description: 'Tableau d’objets des langues proposées par le sélecteur : chaque élément doit être un objet avec un code ISO `codeIso` et un `label`',
    },
    currentLanguage: {
      control: 'text',
      description: 'Code ISO du language courant (doit correspondre au `codeIso` d’un des objets de la props `languages`',
    },
    select: {
      description: 'Événement émis lors du clic sur l’une des langues proposées après dépliage de la liste',
    },
    onSelect: {
      action: 'Clic sur une langue',
    },
  },
}

export const SelecteurDeLangue = (args) => ({
  components: { DsfrLanguageSelector },
  data () {
    return args
  },
  template: `
    <DsfrLanguageSelector
      :id="id"
      :languages="languages"
      :currentLanguage="currentLanguage"
      @select="currentLanguage = $event.codeIso"
    />
  `,

})
SelecteurDeLangue.args = {
  id: 'translate-1',
  currentLanguage: 'fr',
  languages: [
    { label: 'Français', codeIso: 'fr' },
    { label: 'English', codeIso: 'en' },
    { label: 'Deutsch', codeIso: 'de' },
    { label: 'Dutch', codeIso: 'nl' },
  ],
}
