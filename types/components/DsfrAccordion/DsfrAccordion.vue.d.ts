declare const _default: import('vue').DefineComponent<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    expandedId: {
        type: StringConstructor;
        default: any;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {
    expanded(): boolean;
}, {
    toggleExpanded(): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, 'expand'[], 'expand', import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default(): any;
    };
    expandedId: {
        type: StringConstructor;
        default: any;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onExpand?: (...args: any[]) => any;
}, {
    id?: string;
    title: string;
    expandedId: string;
}>
export default _default
