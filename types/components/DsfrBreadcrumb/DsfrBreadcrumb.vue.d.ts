declare const _default: import('vue').DefineComponent<{
    breadcrumbId: {
        type: StringConstructor;
        default(): any;
    };
    links: {
        type: ArrayConstructor;
        default: () => {
            text: string;
        }[];
    };
}, unknown, {
    hideButton: boolean;
}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    breadcrumbId: {
        type: StringConstructor;
        default(): any;
    };
    links: {
        type: ArrayConstructor;
        default: () => {
            text: string;
        }[];
    };
}>>, {
    links: {
        text: string;
        to: import('vue-router').RouteLocationRaw;
    },
    breadcrumbId?: string;
}>
export default _default
