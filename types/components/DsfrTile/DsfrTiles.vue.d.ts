interface TileProps {
    title: string;
    description?: string;
    horizontal?: boolean;
    to?: import('vue-router').RouteLocationRaw;
    imgSrc?: string;
}

declare const _default: import('vue').DefineComponent<{
    tiles: {
        type: ArrayConstructor;
        default: () => TileProps[];
    };
    horizontal: BooleanConstructor;
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    tiles: {
        type: ArrayConstructor;
        default: () => TileProps[];
    };
    horizontal: BooleanConstructor;
}>>, {
    horizontal: boolean;
    tiles: TileProps[];
}>
export default _default
