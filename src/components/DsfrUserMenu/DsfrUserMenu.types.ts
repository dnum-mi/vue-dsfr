import type { DsfrNavigationMenuLinkProps } from '../DsfrNavigation/DsfrNavigation.types'

export interface DsfrUserMenuProps {
  /** Identifiant optionnel pour l'élément <nav> */
  id?: string
  isConnected?: boolean
  unconnectedLabel?: string
  unconnectedTitle?: string
  connectedLabel?: string
  connectedTitle?: string
  connectionIcon?: string | boolean
  userLabel?: string
  userInfo?: string
  links?: DsfrNavigationMenuLinkProps[]
  hasDisconnectButton?: boolean
  disconnectButtonLabel?: string
  hasUserInfo?: boolean
  noOutline?: boolean
}
