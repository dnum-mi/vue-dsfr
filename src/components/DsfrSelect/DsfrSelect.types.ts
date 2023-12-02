export type DsfrSelectProps = {
  required?: boolean
  disabled?: boolean
  selectId?: string
  description?: string
  modelValue?: string | number
  label?: string
  options?:(string | { value: string, text: string, disabled?: boolean })[]
  successMessage?: string
  errorMessage?: string
  defaultUnselectedText?: string
}
