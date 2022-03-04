declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: any;
    };
    headers: {
        type: ArrayConstructor;
        default: () => any[];
    };
    rows: {
        type: (ObjectConstructor | ArrayConstructor)[];
        default: () => any[];
    };
    noCaption: BooleanConstructor;
}, unknown, unknown, {
    isWithContent(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: any;
    };
    headers: {
        type: ArrayConstructor;
        default: () => any[];
    };
    rows: {
        type: (ObjectConstructor | ArrayConstructor)[];
        default: () => any[];
    };
    noCaption: BooleanConstructor;
}>>, {
    title: string;
    headers: unknown[];
    rows: unknown[] | Record<string, any>;
    noCaption: boolean;
}>;
export default _default;
