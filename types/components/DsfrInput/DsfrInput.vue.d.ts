declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    descriptionId: {
        type: StringConstructor;
        default: any;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    isInvalid: BooleanConstructor;
    isValid: BooleanConstructor;
    isTextarea: BooleanConstructor;
    isWithWrapper: BooleanConstructor;
    labelClass: {
      type: StringConstructor | ObjectConstructor | ArrayConstructor;
      default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelVisible: BooleanConstructor;
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    wrapperClass: {
      type: StringConstructor | ObjectConstructor | ArrayConstructor;
      default: string;
  };
}, unknown, unknown, {
    isComponent(): 'input' | 'textarea';
    wrapper(): boolean;
    finalLabelClass(): Array<string, Record<String, Boolean>>;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'update:modelValue'[], 'update:modelValue', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    descriptionId: {
        type: StringConstructor;
        default: any;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    isInvalid: BooleanConstructor;
    isValid: BooleanConstructor;
    isTextarea: BooleanConstructor;
    isWithWrapper: BooleanConstructor;
    labelClass: {
        type: StringConstructor | ObjectConstructor | ArrayConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelVisible: BooleanConstructor;
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    wrapperClass: {
      type: StringConstructor | ObjectConstructor | ArrayConstructor;
      default: string;
  };
}>> & {
    'onUpdate:modelValue'?: (inputValue: string | number | Date) => void;
}, {
    id: string;
    label: string;
    hint: string;
    isInvalid: boolean;
    isValid: boolean;
    isTextarea: boolean;
    isWithWrapper: boolean;
    labelClass: string;
    labelVisible: boolean;
    modelValue: string;
    descriptionId: string;
    wrapperClass: string | Object | Array ;
}>
export default _default
