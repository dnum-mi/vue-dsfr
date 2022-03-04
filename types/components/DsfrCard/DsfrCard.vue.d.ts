declare const _default: import("vue").DefineComponent<{
    imgSrc: {
        type: StringConstructor;
        default: any;
    };
    link: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    detail: {
        type: StringConstructor;
        default: string;
    };
    altImg: {
        type: StringConstructor;
        default: string;
    };
    noArrow: BooleanConstructor;
    horizontal: BooleanConstructor;
}, unknown, unknown, {
    linkComponent(): "nuxt-link" | "router-link";
}, {
    goToTargetLink(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    imgSrc: {
        type: StringConstructor;
        default: any;
    };
    link: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    detail: {
        type: StringConstructor;
        default: string;
    };
    altImg: {
        type: StringConstructor;
        default: string;
    };
    noArrow: BooleanConstructor;
    horizontal: BooleanConstructor;
}>>, {
    link: string | Record<string, any>;
    description: string;
    detail: string;
    title: string;
    horizontal: boolean;
    imgSrc: string;
    altImg: string;
    noArrow: boolean;
}>;
export default _default;
