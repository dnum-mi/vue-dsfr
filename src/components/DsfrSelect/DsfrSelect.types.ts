export type DsfrSelectOption = string | number | null | undefined
export type DsfrSelectProps = {
  required?: boolean
  disabled?: boolean
  selectId?: string
  name?: string
  description?: string
  hint?: string
  modelValue?: DsfrSelectOption
  label?: string
  options?: (DsfrSelectOption | { value: DsfrSelectOption, text: string, disabled?: boolean })[]
  successMessage?: string
  errorMessage?: string
  defaultUnselectedText?: string
  optionGroups?: ({ label: string, options: (DsfrSelectOption | { value: DsfrSelectOption, text: string, disabled?: boolean })[], disabled?: boolean })[]
}
