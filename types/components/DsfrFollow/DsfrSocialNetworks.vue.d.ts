interface FollowNetwork {
    name: string;
    href: string;
}

declare const _default: import('vue').DefineComponent<{
    networks: {
        type: ArrayConstructor;
        required: true;
        validator: (networks: FollowNetwork[]) => boolean;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    networks: {
        type: ArrayConstructor;
        required: true;
        validator: (networks: FollowNetwork[]) => boolean;
    };
}>>, {}>
export default _default
