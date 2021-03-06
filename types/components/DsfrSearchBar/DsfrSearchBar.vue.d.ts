declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelVisible: BooleanConstructor;
    large: BooleanConstructor;
    buttonText: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}, unknown, {
    classesText: {
        type: StringConstructor;
        default: string;
    };
    classesButton: {
        type: StringConstructor;
        default: string;
    };
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, ('search' | 'update:modelValue')[], 'search' | 'update:modelValue', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelVisible: BooleanConstructor;
    large: BooleanConstructor;
    buttonText: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    'onUpdate:modelValue'?: (search: string) => void;
    onSearch?: (search: string) => void;
}, {
    id: string;
    label: string;
    large: boolean;
    placeholder: string;
    modelValue: string;
    buttonText: string;
    labelVisible: boolean;
}>
export default _default
