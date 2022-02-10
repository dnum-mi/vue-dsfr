import DsfrNewsLetter from './DsfrNewsLetter.vue'
import DsfrFollow from './DsfrFollow.vue'

export default {
  component: DsfrNewsLetter,
  title: 'Composants/Lettres d’information et réseaux/Lettre d’information - DsfrNewsletter',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    title: {
      control: 'text',
      description: 'Titre de la newsletter',
    },
    description: {
      control: 'text',
      description: 'Description de la newsletter',
    },
    email: {
      control: 'text',
      description: 'V-model de l’adresse électronique',
    },
    labelEmail: {
      control: 'text',
      description: 'Label du champ pour renseigner l’adresse électronique',
    },
    placeHolder: {
      control: 'text',
      description: 'Placeholder du champ pour renseigner l’adresse électronique',
    },
    hintText: {
      control: 'text',
      description: 'Explication à afficher sous le champ pour renseigner l’adresse électronique',
    },
    buttonText: {
      control: 'text',
      description: 'S’abonner',
    },
    buttonTitle: {
      control: 'text',
      description: 'Contenu de l’attribut `title` du bouton d’abonnement',
    },
  },
}

export const NewsletterSimple = (args) => ({
  components: {
    DsfrNewsLetter,
    DsfrFollow,
  },

  data () {
    return {
      ...args,
    }
  },

  template: `
  <DsfrFollow>
    <div class="fr-col-12">
      <DsfrNewsLetter
        :title="title"
        :description="description"
        v-model:email="email"
        :labelEmail="labelEmail"
        :inputTitle="inputTitle"
        :placeholder="placeholder"
        :hintText="hintText"
        :buttonText="buttonText"
        :buttonTitle="buttonTitle"
      />
    </div>
  </DsfrFollow>
  `,

  mounted () {
    document.body.parentElement.setAttribute('data-fr-theme', this.dark ? 'dark' : 'light')
  },
})

NewsletterSimple.args = {
  dark: false,
  title: 'Titre de la lettre d’information',
  description: 'Description de la lettre d’information',
  email: 'email.super@chouette.fr',
  labelEmail: 'Votre adresse électronique',
  inputTitle: 'Adresse électronique',
  placeholder: 'james.bond@mi6.gov.uk',
  hintText: 'Ceci est destiné à vous aider',
  buttonText: 'S’abonner',
  buttonTitle: 'Titre du bouton (attribut `title` de la balise `button`',
}
