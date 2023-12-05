export type DsfrTagProps = {
  label? : string
  link? : string
  tagName?: string
  icon? : string
  disabled? : boolean
  small? : boolean
  iconOnly? : boolean
}

export type DsfrTagsProps = {
  tags: DsfrTagProps[]
}
