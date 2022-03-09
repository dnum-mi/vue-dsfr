declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    descriptionId: {
        type: StringConstructor;
        default: any;
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
    isInvalid: BooleanConstructor;
    isValid: BooleanConstructor;
    isTextarea: BooleanConstructor;
}, unknown, unknown, {
    isComponent(): "input" | "textarea";
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    descriptionId: {
        type: StringConstructor;
        default: any;
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
    isInvalid: BooleanConstructor;
    isValid: BooleanConstructor;
    isTextarea: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    id: string;
    label: string;
    modelValue: string;
    descriptionId: string;
    labelVisible: boolean;
    isInvalid: boolean;
    isValid: boolean;
    isTextarea: boolean;
}>;
export default _default;
