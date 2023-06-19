import DsfrNewsLetter from './DsfrNewsLetter.vue'
import DsfrFollow from './DsfrFollow.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/lettre-d-information-et-reseaux-sociaux)
 */
export default {
  component: DsfrNewsLetter,
  title: 'Composants/DsfrNewsletter',
  argTypes: {
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

})
NewsletterSimple.args = {
  title: 'Titre de la lettre d’information',
  description: 'Description de la lettre d’information',
  email: 'email.super@chouette.fr',
  labelEmail: 'Votre adresse électronique',
  inputTitle: 'Adresse électronique',
  placeholder: 'james.bond@mi6.gov.uk',
  hintText: 'En renseignant votre adresse électronique, vous acceptez de recevoir nos actualités par courriel. Vous pouvez vous désinscrire à tout moment à l’aide des liens de désinscription ou en nous contactant.',
  buttonText: 'S’abonner',
  buttonTitle: 'Titre du bouton (attribut `title`) de la balise `button`',
}

export const NewsletterAvecErreur = (args) => ({
  components: {
    DsfrNewsLetter,
    DsfrFollow,
  },

  data () {
    return {
      ...args,
    }
  },

  watch: {
    email (newValue, oldValue) {
      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(newValue)) { // eslint-disable-line
        this.error = ''
        return
      }
      this.error = 'Le format de l’adresse electronique saisie n’est pas valide. Le format attendu est : nom@example.org'
    },
  },

  template: `
  <DsfrFollow>
    <div class="fr-col-12">
      <DsfrNewsLetter
        :title="title"
        :description="description"
        :error="error"
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

})

NewsletterAvecErreur.args = {
  title: 'Titre de la lettre d’information',
  description: 'Description de la lettre d’information',
  email: 'email.superchouette.fr',
  error: 'Le format de l’adresse electronique saisie n’est pas valide. Le format attendu est : nom@example.org',
  labelEmail: 'Votre adresse électronique',
  inputTitle: 'Adresse électronique',
  placeholder: 'james.bond@mi6.gov.uk',
  hintText: 'En renseignant votre adresse électronique, vous acceptez de recevoir nos actualités par courriel. Vous pouvez vous désinscrire à tout moment à l’aide des liens de désinscription ou en nous contactant.',
  buttonText: 'S’abonner',
  buttonTitle: 'Titre du bouton (attribut `title`) de la balise `button`',
}
