export type DsfrSelectOption = string | { value: string, text: string, disabled?: boolean }
export type DsfrSelectProps = {
  required?: boolean
  disabled?: boolean
  selectId?: string
  name?: string
  description?: string
  modelValue?: string
  label?: string
  options?: DsfrSelectOption[]
  successMessage?: string
  errorMessage?: string
  defaultUnselectedText?: string
}
