declare const _default: import('vue').DefineComponent<{
    modelValue: BooleanConstructor;
    inputId: {
        type: StringConstructor;
        default(): any;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
}, unknown, unknown, {
    labelId(): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'update:modelValue'[], 'update:modelValue', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: BooleanConstructor;
    inputId: {
        type: StringConstructor;
        default(): any;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
}>> & {
    'onUpdate:modelValue'?: (...args: any[]) => any;
}, {
    label: string;
    disabled: boolean;
    modelValue: boolean;
    hint: string;
    inputId: string;
}>
export default _default
