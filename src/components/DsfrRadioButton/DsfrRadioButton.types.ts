export type DsfrRadioButtonProps = {
  id?: string
  name?: string
  modelValue?: string | number
  small?: boolean
  value: string | number
  label?: string
  hint?: string
  img?: string
}

export type DsfrRadioButtonSetProps = {
  titleId?: string,
  disabled?: boolean,
  inline?: boolean,
  required?: boolean,
  small?: boolean,
  name?: string,
  errorMessage?: string,
  validMessage?: string,
  legend?: string,
  modelValue: string | number,
  options?: DsfrRadioButtonProps[],
}
