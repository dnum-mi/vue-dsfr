import DsfrQuote from './DsfrQuote.vue'

export default {
  component: DsfrQuote,
  title: 'Composants/Citations - DsfrQuote',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre* (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    quote: {
      control: 'text',
      description: '**Texte** de la citation',
    },
    author: {
      control: 'text',
      description: '**Auteur** de la citation',
    },
    details: {
      control: 'object',
      description: '**Détails** de la citation',
    },
    illustration: {
      control: 'text',
      description: '**Illustration** de la citation',
    },
    separator: {
      control: 'text',
      description: '**Séparateur** horizontal ou vertical',
    },
    source: {
      control: 'text',
      description: '**ouvrage** d\'où est tirée la citation',
    },
    sourceUrl: {
      control: 'text',
      description: '**URL** de la source de la citation',
    },
    quoteImage: {
      control: 'text',
      description: '**URL** de l\'image',
    },
  },
}

export const Citation = (args) => ({
  components: { DsfrQuote },
  data () {
    return {
      ...args,
    }
  },
  template: `
      <DsfrQuote
        :quote="quote"
        :author="author"
        :details="details"
        :illustration="illustration"
        :source="source"
        :sourceUrl="sourceUrl"
        :quoteImage="quoteImage"
      />
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})
Citation.args = {
  dark: false,
  quote: 'LA citation',
  author: 'Pierre-Louis EGAUD',
  separator: '',
  details: [
    'Détail 1',
    'Détail 2',
    'Détail 3',
    {
      url: 'https://www.wikipedia.fr',
      label: 'wikipedia',
    },
  ],
  illustration: 'illustration',
  source: 'Duckduckgo',
  sourceUrl: 'https://www.duckduckgo.com',
  quoteImage: 'https://placekitten.com/g/150/150',
}
