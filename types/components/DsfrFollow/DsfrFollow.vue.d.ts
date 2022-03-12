interface FollowNetwork {
    name: string;
    href: string;
}

interface NewsletterData {
    title?: string;
    description?: string;
    email?: string;
    error?: string;
    labelEmail?: string;
    placeholder?: string;
    inputTitle?: string;
    hintText?: string;
    buttonText?: string;
    buttonTitle?: string;
}

declare const _default: import('vue').DefineComponent<{
    newsletterData: {
        type: ObjectConstructor;
        default: () => NewsletterData;
    };
    networks: {
        type: ArrayConstructor;
        default: () => FollowNetwork[];
        validator: (networks: FollowNetwork[]) => any;
    };
}, unknown, unknown, {
    hasNetworks(): any;
    hasNewsletter(): boolean;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
    newsletterData: {
        type: ObjectConstructor;
        default: () => NewsletterData;
    };
    networks: {
        type: ArrayConstructor;
        default: () => FollowNetwork[];
        validator: (networks: FollowNetwork[]) => any;
    };
}>>, {
    networks: FollowNetwork[];
    newsletterData: NewsletterData;
}>
export default _default
