interface RadioOption {
  id?: string;
  value: string | number;
  name: string;
  label: string;
  hint: string;
  img: string;
}

declare const _default: import('vue').DefineComponent<{
    disabled: BooleanConstructor;
    inline: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    validMessage: {
        type: StringConstructor;
        default: string;
    };
    legend: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    options: {
        type: ArrayConstructor;
        default(): RadioOption[];
    };
    small: {
      type: BooleanConstructor;
      default: false;
    };
}, unknown, unknown, {
    message(): string;
    additionalMessageClass(): 'fr-message--error' | 'fr-message--valid';
    messageIcon(): 'ri-alert-line' | 'ri-checkbox-circle-line';
}, {
    onChange($event: InputEvent): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'update:modelValue'[], 'update:modelValue', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    disabled: BooleanConstructor;
    inline: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    validMessage: {
        type: StringConstructor;
        default: string;
    };
    legend: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    options: {
        type: ArrayConstructor;
        default(): RadioOption[];
    };
    small: {
      type: BooleanConstructor;
      default: false;
    };
}>> & {
    'onUpdate:modelValue'?: (inputValue: string | number) => any;
}, {
    inline: boolean;
    name: string;
    legend: string;
    disabled: boolean;
    options: RadioOption[];
    errorMessage: string;
    validMessage: string;
    small: boolean;
}>
export default _default
