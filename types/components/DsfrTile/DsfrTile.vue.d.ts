declare const _default: import('vue').DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    imgSrc: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    horizontal: BooleanConstructor;
    to: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
}, unknown, unknown, {
    isExternalLink(): any;
    linkComponent(): 'nuxt-link' | 'router-link';
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    imgSrc: {
        type: StringConstructor;
        default: any;
    };
    description: {
        type: StringConstructor;
        default: any;
    };
    horizontal: BooleanConstructor;
    to: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
}>>, {
    description: string;
    title: string;
    horizontal: boolean;
    to: import('vue-router').RouteLocationRaw;
    imgSrc: string;
}>
export default _default
