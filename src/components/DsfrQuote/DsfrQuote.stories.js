import DsfrQuote from './DsfrQuote.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/citation)
 */
export default {
  component: DsfrQuote,
  title: 'Composants/DsfrQuote',
  argTypes: {
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
      :source="source"
      :sourceUrl="sourceUrl"
      :quoteImage="quoteImage"
    />
  `,

})
Citation.args = {
  quote: 'LA citation',
  author: 'Pierre-Louis EGAUD',
  details: [
    'Détail 1',
    'Détail 2',
    'Détail 3',
    {
      url: 'https://www.wikipedia.fr',
      label: 'wikipedia',
    },
  ],
  source: 'Duckduckgo',
  sourceUrl: 'https://www.duckduckgo.com',
  quoteImage: 'https://placekitten.com/g/150/150',
}

export const CitationSansImage = (args) => ({
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
      :source="source"
      :sourceUrl="sourceUrl"
    />
  `,

})
CitationSansImage.args = {
  quote: 'LA citation',
  author: 'Pierre-Louis EGAUD',
  details: [
    'Détail 1',
    'Détail 2',
    'Détail 3',
    {
      url: 'https://www.wikipedia.fr',
      label: 'wikipedia',
    },
  ],
  source: 'Duckduckgo',
  sourceUrl: 'https://www.duckduckgo.com',
}
