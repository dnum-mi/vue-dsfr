declare const _default: import('vue').DefineComponent<{
    path: {
        type: (ObjectConstructor | StringConstructor)[];
        default: undefined;
    };
    button: BooleanConstructor;
    iconOnly: BooleanConstructor;
    iconRight: BooleanConstructor;
    icon: {
        type: StringConstructor;
        default: undefined;
    };
    iconAttrs: {
        type: ObjectConstructor;
        default: Function;
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
        default: undefined;
    };
    href: {
        type: StringConstructor;
        default: undefined;
    };
}, unknown, unknown, {
    is(): 'a' | 'button' | 'RouterLink';
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
        default: undefined;
    };
    iconAttrs: {
        type: ObjectConstructor;
        default: Function;
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
        default: undefined;
    };
    href: {
        type: StringConstructor;
        default: undefined;
    };
}>>, {
    button: boolean;
    label: string;
    icon?: string;
    onClick: Function;
    iconRight?: boolean;
    iconOnly?: boolean;
    iconAttrs?: Record<string, any>;
} & ({
    /** @deprecated Should use to or href instead */
    path: string | Record<string, any>;
} | { href: string; } | { to: string | Record<string, any>; })>
export default _default
