interface BreadcrumbLink {
    text: string;
    to?: string | { name?: string, params?: any, path?: string, query?: any };
}

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
}, {
    linkComponent(): string;
}, {
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'close'[], 'close', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
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
    breadcrumbId: string;
    links: BreadcrumbLink[];
}>
export default _default
