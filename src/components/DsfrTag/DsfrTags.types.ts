import type VIcon from '../VIcon/VIcon.vue'

export type DsfrTagProps<T = string> = {
  label?: string
  link?: string
  tagName?: string
  icon?: string | InstanceType<typeof VIcon>['$props']
  disabled?: boolean
  small?: boolean
  iconOnly?: boolean
} & ({
  selectable: true
  selected: boolean | undefined
  value: T
} | {
  selectable?: false
})

export type DsfrTagsProps<T = string> = {
  tags: DsfrTagProps<T>[]
  modelValue?: T[]
}
