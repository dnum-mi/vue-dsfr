declare const _default: import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    inline: BooleanConstructor;
    name: {
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
    legend: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    options: {
        type: ArrayConstructor;
        default(): any[];
    };
}, unknown, unknown, {
    message(): any;
    additionalMessageClass(): "fr-error-text" | "fr-valid-text";
    messageIcon(): "ri-alert-line" | "ri-checkbox-circle-line";
}, {
    onChange($event: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: BooleanConstructor;
    inline: BooleanConstructor;
    name: {
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
    legend: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    options: {
        type: ArrayConstructor;
        default(): any[];
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    inline: boolean;
    name: string;
    legend: string;
    disabled: boolean;
    options: unknown[];
    errorMessage: string;
    validMessage: string;
}>;
export default _default;
