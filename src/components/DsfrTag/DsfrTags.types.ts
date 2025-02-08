export type DsfrTagProps<T = string> = {
  label?: string
  link?: string
  tagName?: string
  icon?: string
  disabled?: boolean
  small?: boolean
  iconOnly?: boolean
} & ({
  selectable: true
  selected?: boolean
  value?: T
} | {
  selectable?: false
})

export type DsfrTagsProps<T = string> = {
  tags: DsfrTagProps<T>[]
  modelValue?: T[]
}
