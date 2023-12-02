import type { ButtonHTMLAttributes } from 'vue'
import type { OhVueIcon as VIcon } from 'oh-vue-icons'

export type DsfrButtonProps = {
  disabled?: boolean
  label?: string
  secondary?: boolean
  tertiary?: boolean
  iconRight?: boolean
  iconOnly?: boolean
  noOutline?: boolean
  size?: 'sm' | 'small' | 'lg' | 'large' | 'md' | 'medium' | '' | undefined
  icon?: string | InstanceType<typeof VIcon>['$props']
  onClick?: ($event: MouseEvent) => void
}

export type DsfrButtonGroupProps = {
  buttons?: (DsfrButtonProps & ButtonHTMLAttributes)[]
  reverse?: boolean
  iconRight?: boolean
  align?: 'right' | 'center' | '' | undefined
  inlineLayoutWhen?: 'always' | 'never' | 'sm' | 'small' | 'lg' | 'large' | 'md' | 'medium' | '' | undefined | boolean
  size?: 'sm' | 'small' | 'lg' | 'large' | 'md' | 'medium' | '' | undefined
}
