declare const _default: import("vue").DefineComponent<{
    mainPartner: {
        type: ObjectConstructor;
        default: () => any;
    };
    subPartners: {
        type: ArrayConstructor;
        default: () => any[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    mainPartner: {
        type: ObjectConstructor;
        default: () => any;
    };
    subPartners: {
        type: ArrayConstructor;
        default: () => any[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    title: string;
    mainPartner: Record<string, any>;
    subPartners: unknown[];
}>;
export default _default;
