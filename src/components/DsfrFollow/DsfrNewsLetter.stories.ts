import DsfrFollow from './DsfrFollow.vue'
import DsfrNewsLetter from './DsfrNewsLetter.vue'

/**
 * [Voir quand l’utiliser sur la documentation du DSFR](https://www.systeme-de-design.gouv.fr/version-courante/fr/composants/lettre-d-information-et-reseaux-sociaux)
 */
export default {
  component: DsfrNewsLetter,
  title: 'Composants/DsfrNewsletter',
  tags: ['réseaux sociaux'],
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
      description:
        'Placeholder du champ pour renseigner l’adresse électronique',
    },
    hintText: {
      control: 'text',
      description:
        'Explication à afficher sous le champ pour renseigner l’adresse électronique',
    },
    buttonText: {
      control: 'text',
      description: 'S’abonner',
    },
    buttonTitle: {
      control: 'text',
      description: 'Contenu de l’attribut `title` du bouton d’abonnement',
    },
    buttonAction: { action: 'clicked' },
    onlyCallout: {
      control: 'boolean',
      description:
        'Newsletter simplifiée avec seulement un bouton, le formulaire sera masqué',
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
  hintText:
    'En renseignant votre adresse électronique, vous acceptez de recevoir nos actualités par courriel. Vous pouvez vous désinscrire à tout moment à l’aide des liens de désinscription ou en nous contactant.',
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
    email (newValue) {
      if (
        // eslint-disable-next-line regexp/no-unused-capturing-group
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i.test(
          newValue,
        )
      ) {
        this.error = ''
        return
      }
      this.error =
        'Le format de l’adresse electronique saisie n’est pas valide. Le format attendu est : nom@example.org'
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
  error:
    'Le format de l’adresse electronique saisie n’est pas valide. Le format attendu est : nom@example.org',
  labelEmail: 'Votre adresse électronique',
  inputTitle: 'Adresse électronique',
  placeholder: 'james.bond@mi6.gov.uk',
  hintText:
    'En renseignant votre adresse électronique, vous acceptez de recevoir nos actualités par courriel. Vous pouvez vous désinscrire à tout moment à l’aide des liens de désinscription ou en nous contactant.',
  buttonText: 'S’abonner',
  buttonTitle: 'Titre du bouton (attribut `title`) de la balise `button`',
}

export const NewsletterMiseEnAvant = (args) => ({
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
        :buttonAction="buttonAction"
        :onlyCallout="onlyCallout"
      />
    </div>
  </DsfrFollow>
  `,
})
NewsletterMiseEnAvant.args = {
  title: 'Titre de la lettre d’information',
  description: 'Description de la lettre d’information',
  email: '',
  labelEmail: '',
  inputTitle: '',
  placeholder: '',
  hintText: '',
  buttonText: 'S’abonner',
  buttonTitle: 'Titre du bouton (attribut `title`) de la balise `button`',
  buttonAction: () => undefined,
  onlyCallout: true,
}
