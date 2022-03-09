declare const _default: import("vue").DefineComponent<{
    titleId: {
        type: StringConstructor;
        default(): any;
    };
    disabled: BooleanConstructor;
    inline: BooleanConstructor;
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    validMessage: {
        type: StringConstructor;
        default: string;
    };
    legend: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: ArrayConstructor;
        default: () => any[];
    };
    modelValue: {
        type: ArrayConstructor;
        default: () => any[];
    };
}, unknown, unknown, {
    message(): any;
    additionalMessageClass(): "fr-error-text" | "fr-valid-text";
}, {
    onChange({ name, checked }: {
        name: any;
        checked: any;
    }): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    titleId: {
        type: StringConstructor;
        default(): any;
    };
    disabled: BooleanConstructor;
    inline: BooleanConstructor;
    errorMessage: {
        type: StringConstructor;
        default: string;
    };
    validMessage: {
        type: StringConstructor;
        default: string;
    };
    legend: {
        type: StringConstructor;
        default: string;
    };
    options: {
        type: ArrayConstructor;
        default: () => any[];
    };
    modelValue: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    inline: boolean;
    legend: string;
    disabled: boolean;
    options: unknown[];
    modelValue: unknown[];
    errorMessage: string;
    validMessage: string;
    titleId: string;
}>;
export default _default;
