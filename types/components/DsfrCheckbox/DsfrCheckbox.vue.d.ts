declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: BooleanConstructor;
    label: {
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
    hint: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    message(): any;
    additionalMessageClass(): 'fr-message--error' | 'fr-message--valid';
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'update:modelValue'[], 'update:modelValue', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    name: {
        type: StringConstructor;
        required: true;
    };
    modelValue: BooleanConstructor;
    label: {
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
    hint: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    'onUpdate:modelValue'?: (...args: any[]) => any;
}, {
    id: string;
    label: string;
    modelValue: boolean;
    errorMessage: string;
    validMessage: string;
    hint: string;
}>
export default _default
