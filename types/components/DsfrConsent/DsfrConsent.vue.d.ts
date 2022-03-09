declare const _default: import("vue").DefineComponent<{
    url: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    isExternalLink(): any;
    linkComponent(): "nuxt-link" | "router-link";
    is(): any;
    linkProps(): {
        [x: string]: any;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("accept-all" | "refuse-all" | "customize")[], "accept-all" | "refuse-all" | "customize", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onAccept-all"?: (...args: any[]) => any;
    "onRefuse-all"?: (...args: any[]) => any;
    onCustomize?: (...args: any[]) => any;
}, {
    url: string;
}>;
export default _default;
