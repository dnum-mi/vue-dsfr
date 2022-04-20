interface FooterLink {
    to: import('vue-router').RouterMatcher;
    label: string;
}

declare const _default: import('vue').DefineComponent<{
    categoryName: {
        type: StringConstructor;
        default: string;
    };
    links: {
        type: ArrayConstructor;
        default: () => FooterLink[];
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    categoryName: {
        type: StringConstructor;
        default: string;
    };
    links: {
        type: ArrayConstructor;
        default: () => FooterLink[];
    };
}>>, {
    links: FooterLink[];
    categoryName: string;
}>
export default _default
