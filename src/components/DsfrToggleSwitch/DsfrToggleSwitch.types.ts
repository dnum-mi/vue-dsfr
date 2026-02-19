import type { InputHTMLAttributes } from 'vue'

export type DsfrToggleSwitchProps = {
  modelValue?: boolean
  inputId?: string
  hint?: string
  label?: string
  disabled?: boolean
  labelLeft?: boolean
  borderBottom?: boolean
  activeText?: string
  inactiveText?: string
  noText?: boolean
  name?: string
  status?: undefined | 'valid' | 'error'
  validMessage?: string
  errorMessage?: string
}
export type DsfrToggleSwitchGroupProps = {
  id?: string
  legend?: string
  disabled?: boolean
  toggleSwitches?: (DsfrToggleSwitchProps & InputHTMLAttributes)[]
  borders?: boolean
  activeText?: string
  inactiveText?: string
  noText?: boolean
  status?: undefined | 'valid' | 'error'
  validMessage?: string
  errorMessage?: string
}
