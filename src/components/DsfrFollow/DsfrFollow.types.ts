export type DsfrSocialNetworkName = 'facebook' | 'twitter-x' | 'instagram' | 'linkedin' | 'youtube'
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
