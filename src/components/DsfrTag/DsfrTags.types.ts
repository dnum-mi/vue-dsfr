import type VIcon from '../VIcon/VIcon.vue'
import type { HTMLAttributes } from 'vue'

type DsfrTagHtmlAttributes = Omit<HTMLAttributes, 'onSelect'>

interface DsfrTagCommonProps {
  label?: string
  link?: string
  tagName?: string
  icon?: string | InstanceType<typeof VIcon>['$props']
  disabled?: boolean
  small?: boolean
  iconOnly?: boolean
}

type DsfrTagSelectableProps<T = string> = {
  selectable: true
  selected: boolean | undefined
  value: T
}

type DsfrTagNonSelectableProps = {
  selectable?: false | undefined
  selected?: never
  value?: never
}

type DsfrTagsSelectableProps<T = string> = Omit<DsfrTagSelectableProps<T>, 'selected'> & {
  selected?: boolean
}

export type DsfrTagProps<T = string> = DsfrTagCommonProps & (
  DsfrTagSelectableProps<T> | DsfrTagNonSelectableProps
)

export type DsfrTagsTagProps<T = string> = DsfrTagCommonProps & (
  DsfrTagsSelectableProps<T> | DsfrTagNonSelectableProps
) & DsfrTagHtmlAttributes

export type DsfrTagsProps<T = string> = {
  tags: DsfrTagsTagProps<T>[]
  modelValue?: T[]
}
