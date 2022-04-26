declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default: any;
    };
    descriptionId: {
        type: StringConstructor;
        default(): any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelVisible: BooleanConstructor;
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: any;
    };
    validMessage: {
        type: StringConstructor;
        default: any;
    };
}, unknown, unknown, {
    message(): any;
    messageClass(): 'fr-error-text' | 'fr-valid-text';
    messageIcon(): 'ri-alert-line' | 'ri-checkbox-circle-line';
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'update:modelValue'[], 'update:modelValue', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    descriptionId: {
        type: StringConstructor;
        default(): any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelVisible: BooleanConstructor;
    modelValue: {
        type: StringConstructor;
        default: any;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: any;
    };
    validMessage: {
        type: StringConstructor;
        default: any;
    };
}>> & {
    'onUpdate:modelValue'?: (...args: any[]) => any;
}, {
    id: string;
    label: string;
    placeholder: string;
    modelValue: string;
    errorMessage: string;
    validMessage: string;
    descriptionId: string;
    labelVisible: boolean;
}>
export default _default
