declare const _default: import("vue").DefineComponent<{
    required: BooleanConstructor;
    selectId: {
        type: StringConstructor;
        default(): any;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: ArrayConstructor;
        default: () => any[];
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    successMessage: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
}, unknown, unknown, {
    message(): any;
    messageType(): "error" | "valid";
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    required: BooleanConstructor;
    selectId: {
        type: StringConstructor;
        default(): any;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: ArrayConstructor;
        default: () => any[];
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    successMessage: {
        type: StringConstructor;
        default: string;
    };
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    description: string;
    required: boolean;
    label: string;
    disabled: boolean;
    options: unknown[];
    modelValue: string | number;
    errorMessage: string;
    selectId: string;
    successMessage: string;
}>;
export default _default;
