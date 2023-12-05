export type DsfrSocialNetworkName = 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube'
export type DsfrSocialNetwork = {
  name: DsfrSocialNetworkName,
  href: string
}

export type DsfrSocialNetworksProps = {
  networks: DsfrSocialNetwork[]
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
  onlyCallout?: boolean
}

export type DsfrFollowProps = {
  newsletterData: DsfrNewsLetterProps
  networks: DsfrSocialNetwork[]
}
