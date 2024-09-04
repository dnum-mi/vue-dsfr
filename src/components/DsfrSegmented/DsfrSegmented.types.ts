import type VIcon from '../VIcon/VIcon.vue'

export type DsfrSegmentedProps = {
  id?: string
  name?: string
  modelValue?: string | number
  value: string | number
  label: string
  disabled?: boolean
  icon?: string | InstanceType<typeof VIcon>['$props']
}

export type DsfrSegmentedSetProps = {
  titleId?: string
  disabled?: boolean
  small?: boolean
  inline?: boolean
  name?: string
  hint?: string
  legend?: string
  modelValue: string | number
  options?: DsfrSegmentedProps[]
}
