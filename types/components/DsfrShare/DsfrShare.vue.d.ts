interface Network {
    label: string;
    name: 'facebook' | 'twitter' | 'linkedin';
    url: string;
}

declare const _default: import('vue').DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    copyLabel: {
        type: StringConstructor;
        default: string;
    };
    mail: {
        type: ObjectConstructor;
        default: () => undefined;
    };
    networks: {
        type: ArrayConstructor;
        default: () => Network[];
    };
}, unknown, unknown, {}, {
    copyLocationToClipboard(): void;
    openWindow({ url, label }: {
        url: any;
        label: any;
    }): void;
}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    copyLabel: {
        type: StringConstructor;
        default: string;
    };
    mail: {
        type: ObjectConstructor;
        default: () => undefined;
    };
    networks: {
        type: ArrayConstructor;
        default: () => Network[];
    };
}>>, {
    title: string;
    networks: Network[];
    copyLabel: string;
    mail: { to: string; label: string; };
}>
export default _default
