export type DsfrRadioButtonProps = {
  id?: string
  name?: string
  modelValue: string | number | boolean | undefined
  disabled?: boolean
  small?: boolean
  inline?: boolean
  value: string | number | boolean
  label?: string
  hint?: string
  img?: string
}

export type DsfrRadioButtonOptions = (Omit<DsfrRadioButtonProps, 'modelValue'>)[]

export type DsfrRadioButtonSetProps = {
  titleId?: string,
  disabled?: boolean,
  required?: boolean,
  small?: boolean,
  inline?: boolean,
  name?: string,
  errorMessage?: string,
  validMessage?: string,
  legend?: string,
  modelValue?: string | number | boolean | undefined,
  options?: Omit<DsfrRadioButtonProps, 'modelValue'>[]
}
