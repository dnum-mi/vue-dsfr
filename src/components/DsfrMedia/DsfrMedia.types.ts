export type DsfrVideoProps = {
  ariaLabelledbyId?: string
  src: string
  legend?: string
  size?: 'small' | 'medium' | 'large'
  transcriptionTitle?: string
  transcriptionContent?: string
  ratio?: string
}

export type DsfrPictureProps = {
  alt?: string
  legend?: string
  size?: 'small' | 'medium' | 'large' | undefined
  src: string
  title?: string
  ratio?: string
}
