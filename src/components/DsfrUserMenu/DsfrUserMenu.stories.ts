import type { Meta, StoryObj } from '@storybook/vue3-vite'

import DsfrUserMenu from './DsfrUserMenu.vue'

const meta = {
  component: DsfrUserMenu,
  title: 'Composants/DsfrUserMenu',
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text', description: 'Identifiant unique du composant' },
    isConnected: { control: 'boolean', description: 'État de connexion' },
    unconnectedLabel: { control: 'text', description: 'Libellé du bouton non connecté' },
    unconnectedTitle: { control: 'text', description: 'Titre du bouton non connecté' },
    connectedLabel: { control: 'text', description: 'Libellé du bouton connecté' },
    connectedTitle: { control: 'text', description: 'Titre du bouton connecté' },
    userLabel: { control: 'text', description: 'Nom de l\'utilisateur' },
    userInfo: { control: 'text', description: 'Information utilisateur (email, org...)' },
    hasUserInfo: { control: 'boolean', description: 'Affiche les infos utilisateur' },
    links: { description: 'Liens du menu' },
    hasDisconnectButton: { control: 'boolean', description: 'Affiche le bouton de déconnexion' },
    disconnectButtonLabel: { control: 'text', description: 'Libellé du bouton de déconnexion' },
    connectionIcon: { control: 'text', description: 'Classe icône DSFR' },
    noOutline: { control: 'boolean', description: 'Supprime la bordure du bouton' },
  },
} as Meta<typeof DsfrUserMenu>

export default meta
type Story = StoryObj<typeof meta>

export const NonConnecte: Story = {
  args: {
    id: 'user-menu-1',
    isConnected: false,
    unconnectedLabel: 'Me connecter',
    unconnectedTitle: 'Se connecter à l\'application',
  },
}

export const ConnecteSimple: Story = {
  args: {
    id: 'user-menu-2',
    isConnected: true,
    connectedLabel: 'Mon espace',
    userLabel: 'Jean Dupont',
    links: [
      { text: 'Mon profil', to: '/profile' },
      { text: 'Mes paramètres', to: '/settings' },
      { text: 'Centre d\'aide', to: '/help' },
    ],
  },
}

export const ConnecteComplet: Story = {
  args: {
    id: 'user-menu-4',
    isConnected: true,
    connectedLabel: 'Mon espace',
    userLabel: 'Jean Dupont',
    userInfo: 'jean.dupont@example.com',
    hasUserInfo: true,
    links: [
      { text: 'Mon profil', to: '/profile' },
      { text: 'Mes paramètres', to: '/settings' },
      { text: 'Centre d\'aide', to: '/help' },
    ],
    hasDisconnectButton: true,
    disconnectButtonLabel: 'Me déconnecter',
  },
}

export const ConnecteAvecIcone: Story = {
  args: {
    id: 'user-menu-5',
    isConnected: true,
    connectedLabel: 'Mon espace',
    userLabel: 'Jean Dupont',
    connectionIcon: 'fr-icon-account-circle-fill',
    links: [
      { text: 'Mon profil', to: '/profile' },
      { text: 'Mes paramètres', to: '/settings' },
      { text: 'Centre d\'aide', to: '/help' },
    ],
  },
}

export const SansOutline: Story = {
  args: {
    id: 'user-menu-6',
    isConnected: true,
    connectedLabel: 'Mon espace',
    userLabel: 'Jane Smith',
    links: [
      { text: 'Mon profil', to: '/profile' },
      { text: 'Mes paramètres', to: '/settings' },
      { text: 'Centre d\'aide', to: '/help' },
    ],
    noOutline: true,
  },
}
