declare const _default: import("vue").DefineComponent<{
    a11yCompliance: {
        type: StringConstructor;
        default: string;
    };
    a11yComplianceLink: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    legalLink: {
        type: StringConstructor;
        default: string;
    };
    homeLink: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    partners: {
        type: ObjectConstructor;
        default: () => any;
    };
    personalDataLink: {
        type: StringConstructor;
        default: string;
    };
    cookiesLink: {
        type: StringConstructor;
        default: string;
    };
    logoText: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => string[];
    };
    descText: {
        type: StringConstructor;
        default: any;
    };
    beforeMandatoryLinks: {
        type: ArrayConstructor;
        default: () => any[];
    };
    afterMandatoryLinks: {
        type: ArrayConstructor;
        default: () => any[];
    };
}, unknown, {
    ecosystemLinks: any;
    mandatoryLinks: {
        label: string;
        to: string | Record<string, any>;
    }[];
}, {
    allLinks(): any[];
    linkComponent(): "nuxt-link" | "router-link";
    isWithSlotLinkLists(): any;
    isWithSlotOperator(): any;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    a11yCompliance: {
        type: StringConstructor;
        default: string;
    };
    a11yComplianceLink: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    legalLink: {
        type: StringConstructor;
        default: string;
    };
    homeLink: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    partners: {
        type: ObjectConstructor;
        default: () => any;
    };
    personalDataLink: {
        type: StringConstructor;
        default: string;
    };
    cookiesLink: {
        type: StringConstructor;
        default: string;
    };
    logoText: {
        type: (StringConstructor | ArrayConstructor)[];
        default: () => string[];
    };
    descText: {
        type: StringConstructor;
        default: any;
    };
    beforeMandatoryLinks: {
        type: ArrayConstructor;
        default: () => any[];
    };
    afterMandatoryLinks: {
        type: ArrayConstructor;
        default: () => any[];
    };
}>>, {
    logoText: string | unknown[];
    a11yCompliance: string;
    a11yComplianceLink: string | Record<string, any>;
    legalLink: string;
    homeLink: string | Record<string, any>;
    partners: Record<string, any>;
    personalDataLink: string;
    cookiesLink: string;
    descText: string;
    beforeMandatoryLinks: unknown[];
    afterMandatoryLinks: unknown[];
}>;
export default _default;
