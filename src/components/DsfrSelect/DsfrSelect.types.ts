export type DsfrSelectProps = {
  required?: boolean
  disabled?: boolean
  selectId?: string
  description?: string
  modelValue?: string | number
  label?: string
  options?:(string | undefined | { value: string | undefined, text: string, disabled?: boolean })[]
  successMessage?: string
  errorMessage?: string
  defaultUnselectedText?: string
}
