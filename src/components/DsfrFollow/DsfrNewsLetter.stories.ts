import type { Meta, StoryObj } from '@storybook/vue3'

import DsfrNewsLetter from './DsfrNewsLetter.vue'

const meta = {
  component: DsfrNewsLetter,
  title: 'Composants/DsfrNewsLetter',
  argTypes: {
    title: {
      control: 'text',
      description: 'Titre de la lettre d’information',
    },
    description: {
      control: 'text',
      description: 'Description de la lettre d’information',
    },
    email: {
      control: 'text',
      description: 'Adresse électronique de l’utilisateur',
    },
    labelEmail: {
      control: 'text',
      description: 'Label du champ pour l’adresse électronique',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder du champ pour l’adresse électronique',
    },
    hintText: {
      control: 'text',
      description: 'Indice à afficher sous le champ de l’adresse électronique',
    },
    buttonText: {
      control: 'text',
      description: 'Texte du bouton d’abonnement',
    },
    buttonTitle: {
      control: 'text',
      description: 'Titre du bouton d’abonnement',
    },
    onlyCallout: {
      control: 'boolean',
      description: 'Afficher uniquement un bouton sans champ de saisie',
    },
    error: {
      control: 'text',
      description: 'Message d’erreur à afficher',
    },
    inputTitle: {
      control: 'text',
      description: 'Titre de l’input (attribut `title`)',
    },
    onSubmit: {
      action: 'submit',
    },
    'button-action': {
      action: 'button-action',
    },
  },
} satisfies Meta<typeof DsfrNewsLetter>

export default meta
type Story = StoryObj<typeof meta>

export const LettreDInformationSimple: Story = {
  render: (args) => ({
    components: { DsfrNewsLetter },
    setup () {
      return { args }
    },
    template: `
      <DsfrNewsLetter v-bind="args" />
    `,
  }),
  args: {
    title: 'Abonnez-vous à notre lettre d’information',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.',
    email: '',
    labelEmail: 'Votre adresse électronique (ex. : prenom.nom@example.com)',
    placeholder: 'prenom.nom@example.com',
    hintText: 'Texte de politique de confidentialité',
    buttonText: 'S’abonner',
    buttonTitle: 'S’abonner à notre lettre d’information',
    onlyCallout: false,
    error: '',
    inputTitle: 'Titre de l’input',
  },
}

export const LettreDInformationSimplifiee: Story = {
  args: {
    ...LettreDInformationSimple.args,
    onlyCallout: true,
  },
}

export const LettreDInformationAvecErreur: Story = {
  args: {
    ...LettreDInformationSimple.args,
    error: 'Message d’erreur',
  },
}
