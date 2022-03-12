import { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue'

declare const _default: DefineComponent<{
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
}, ComponentOptionsMixin, ComponentOptionsMixin, 'expand'[], 'expand', VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
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
    id: string;
    title: string;
    expandedId: string;
}>
export default _default
