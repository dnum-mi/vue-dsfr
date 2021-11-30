import DsfrSkipLinks from './DsfrSkipLinks.vue'

export default {
  component: DsfrSkipLinks,
  title: 'Composants/Liens d’évitement - Skip links',
  argType: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    links: {
      control: 'object',
      description: 'Permet de passer le label du lien et l’ancre ciblée sous forme de tableau d’objets. Chaque objet aura 2 propriétés : `id` et `text`.',
    },
  },
}

export const SkipLinksExample = (args) => ({
  components: {
    DsfrSkipLinks,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrSkipLinks
        :links="links"
      />
    </div>
  `,

})

SkipLinksExample.args = {
  dark: false,
  links: [{
    id: '#header',
    text: 'Allons au header',
  },
  {
    id: '#content',
    text: 'Allons au content',
  },
  {
    id: '#footer',
    text: 'Allons au footer',
  }],
}
