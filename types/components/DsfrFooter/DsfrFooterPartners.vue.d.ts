interface FooterPartner {
    href: string;
    logo: string;
    name: string;
}

declare const _default: import('vue').DefineComponent<{
    mainPartner: {
        type: ObjectConstructor;
        default: () => any;
    };
    subPartners: {
        type: ArrayConstructor;
        default: () => FooterPartner[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    mainPartner: {
        type: ObjectConstructor;
        default: () => FooterPartner;
    };
    subPartners: {
        type: ArrayConstructor;
        default: () => FooterPartner[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    mainPartner: FooterPartner;
    subPartners: FooterPartner[];
    title: string;
}>
export default _default
