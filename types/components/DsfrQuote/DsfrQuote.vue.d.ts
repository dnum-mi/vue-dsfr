type QuoteDetail = string | {
    url: string;
    label: string;
}

declare const _default: import('vue').DefineComponent<{
    quote: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    author: {
        type: StringConstructor;
        default: string;
    };
    details: {
        type: ArrayConstructor;
        default: () => QuoteDetail[];
    };
    illustration: {
        type: StringConstructor;
        default: string;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    source: {
        type: StringConstructor;
        default: string;
    };
    sourceUrl: {
        type: StringConstructor;
        default: string;
    };
    quoteImage: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    quote: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    author: {
        type: StringConstructor;
        default: string;
    };
    details: {
        type: ArrayConstructor;
        default: () => QuoteDetail[];
    };
    illustration: {
        type: StringConstructor;
        default: string;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    source: {
        type: StringConstructor;
        default: string;
    };
    sourceUrl: {
        type: StringConstructor;
        default: string;
    };
    quoteImage: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    source: string;
    details: QuoteDetail[];
    icon: string;
    separator: string;
    quote: string;
    author: string;
    illustration: string;
    sourceUrl: string;
    quoteImage: string;
}>
export default _default
