declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    img: {
        type: StringConstructor;
        default: string;
    };
    small: {
      type: BooleanConstructor;
      default: false;
    };
}, unknown, unknown, {
    rich(): boolean;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'update:modelValue'[], 'update:modelValue', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    value: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    img: {
        type: StringConstructor;
        default: string;
    };
    small: {
      type: BooleanConstructor;
      default: false;
    };
}>> & {
    'onUpdate:modelValue'?: (inputValue: string | number) => any;
}, {
    id: string;
    img: string;
    label: string;
    modelValue: string | number | undefined;
    hint: string;
    small: boolean;
}>
export default _default
