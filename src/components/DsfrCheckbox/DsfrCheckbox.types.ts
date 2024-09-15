import type { InputHTMLAttributes } from 'vue'

export type DsfrCheckboxProps = {
  id?: string
  name: string
  required?: boolean
  value: unknown
  checked?: boolean
  modelValue: Array<unknown>
  small?: boolean
  inline?: boolean
  label?: string
  errorMessage?: string
  validMessage?: string
  hint?: string
}

export type DsfrCheckboxSetProps = {
  titleId?: string
  disabled?: boolean
  inline?: boolean
  required?: boolean
  small?: boolean
  errorMessage?: string
  validMessage?: string
  legend?: string
  options?: (DsfrCheckboxProps & InputHTMLAttributes)[]
  modelValue?: Array<unknown>
  ariaInvalid?: boolean
}
