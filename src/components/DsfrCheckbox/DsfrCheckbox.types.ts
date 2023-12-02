import type { InputHTMLAttributes } from 'vue'

export type DsfrCheckboxProps = {
  id?: string
  name: string
  required?: boolean
  modelValue?: boolean
  small?: boolean
  label?: string
  errorMessage?: string
  validMessage?: string
  hint?: string
}

export type DsfrCheckboxSetProps = {
  titleId?: string
  disabled?: boolean,
  inline?: boolean,
  required?: boolean,
  small?: boolean,
  errorMessage?: string
  validMessage?: string
  legend?: string
  options?:(DsfrCheckboxProps & InputHTMLAttributes)[]
  modelValue?: string[],
}
