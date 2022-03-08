declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
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
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "update:modelValue")[], "search" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
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
    "onUpdate:modelValue"?: (...args: any[]) => any;
    onSearch?: (...args: any[]) => any;
}, {
    id: string;
    label: string;
    large: boolean;
    placeholder: string;
    modelValue: string;
    buttonText: string;
}>;
export default _default;
