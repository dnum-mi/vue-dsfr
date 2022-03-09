declare const _default: import("vue").DefineComponent<{
    small: BooleanConstructor;
    large: BooleanConstructor;
    logoText: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => string;
    };
}, unknown, unknown, {
    text(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    small: BooleanConstructor;
    large: BooleanConstructor;
    logoText: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => string;
    };
}>>, {
    small: boolean;
    large: boolean;
    logoText: string | unknown[];
}>;
export default _default;
