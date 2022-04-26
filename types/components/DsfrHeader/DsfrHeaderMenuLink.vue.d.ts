declare const _default: import('vue').DefineComponent<{
    path: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    button: BooleanConstructor;
    iconOnly: BooleanConstructor;
    iconRight: BooleanConstructor;
    icon: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    onClick: {
        type: FunctionConstructor;
        default: () => void;
    };
    to: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    href: {
        type: StringConstructor;
        default: any;
    };
}, unknown, unknown, {
    is(): 'a' | 'button' | 'router-link';
    isPathString(): boolean;
    isExternalLink(): any;
    actualHref(): any;
    actualTo(): any;
    linkData(): {
        to: any;
        href?: undefined;
    } | {
        href: any;
        to?: undefined;
    };
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    path: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    button: BooleanConstructor;
    iconOnly: BooleanConstructor;
    iconRight: BooleanConstructor;
    icon: {
        type: StringConstructor;
        default: any;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    onClick: {
        type: FunctionConstructor;
        default: () => void;
    };
    to: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    href: {
        type: StringConstructor;
        default: any;
    };
}>>, {
    button: boolean;
    label: string;
    path: string | Record<string, any>;
    icon: string;
    onClick: Function;
    href: string;
    to: string | Record<string, any>;
    iconRight: boolean;
    iconOnly: boolean;
}>
export default _default
