declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
    validMessage: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {
    onChange($event: any): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ('change' | 'update:modelValue')[], 'change' | 'update:modelValue', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    hint: {
        type: StringConstructor;
        default: string;
    };
    error: {
        type: StringConstructor;
        default: string;
    };
    validMessage: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: (...args: any[]) => any;
    'onUpdate:modelValue'?: (...args: any[]) => any;
}, {
    error: string;
    id: string;
    label: string;
    disabled: boolean;
    modelValue: string;
    validMessage: string;
    hint: string;
}>
export default _default
