export enum DsfrSocialNetworkIcon {
  bluesky,
  dailymotion,
  facebook,
  github,
  instagram,
  linkedin,
  mastodon,
  snapchat,
  telegram,
  threads,
  tiktok,
  twitch,
  'twitter-x',
  vimeo,
  youtube,
}

export type DsfrSocialNetworkName = keyof typeof DsfrSocialNetworkIcon
export type DsfrSocialNetwork = {
  type: DsfrSocialNetworkName
  name: string
  href: string
}

export type DsfrSocialNetworksProps = {
  networks?: DsfrSocialNetwork[]
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export type DsfrNewsLetterProps = {
  title?: string
  description?: string
  email?: string
  error?: string
  labelEmail?: string
  placeholder?: string
  hintText?: string
  inputTitle?: string
  buttonText?: string
  buttonTitle?: string
  buttonAction?: ($event: MouseEvent) => void
  onSubmit?: (email: string | undefined) => void
  onlyCallout?: boolean
}

export type DsfrFollowProps = {
  newsletterData?: DsfrNewsLetterProps
  networks?: DsfrSocialNetwork[]
}
