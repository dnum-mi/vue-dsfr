import DsfrPicture from './DsfrPicture.vue'

export default {
  component: DsfrPicture,
  title: 'Composants/Image - DsfrPicture',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.',
    },
    alt: {
      control: 'text',
      description: 'Présente une alternative textuelle au contenu et optimise le référencement. Si l’image est illustrative, n’apportant  pas d’éléments de compréhension supplémentaires par rapport au texte dans lequel elle se trouve, l’attribut alt doit être vide',
    },
    src: {
      control: 'text',
      description: 'Spécifie le chemin menant à l’image dans le but de l’afficher.',
    },
    legend: {
      control: 'text',
      description: 'Texte court accompagnant un contenu. Elle peut-être descriptive, interprétative, informative.',
    },
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'Permet de moduler les dimensions du contenu entre trois tailles prédéfinies. Une chaîne de caractères différente de "large" ou "small" affichera le contenu en format medium par défaut.',
    },
  },
}

export const Image = (args) => ({
  components: { DsfrPicture },
  data () {
    return args
  },
  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
    <DsfrPicture
      :src="src"
      :alt="alt"
      :legend="legend"
      :size="size"
    />
  </div>
  `,
})
Image.args = {
  dark: false,
  size: 'medium',
  src: 'https://placekitten.com/300/200',
  alt: '',
  legend: 'Photographie d’un chaton',
}
