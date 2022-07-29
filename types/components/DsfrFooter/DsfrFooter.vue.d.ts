interface FooterLink {
    to: import('vue-router').RouteLocationRaw;
    label: string;
}
interface EcosystemLink {
    href: string;
    label: string;
}

interface FooterPartner {
    href: string;
    logo: string;
    name: string;
}

interface FooterPartners {
    mainPartner: FooterPartner;
    subPartners: FooterPartner[];
    title: string;
}

declare const _default: import('vue').DefineComponent<{
  a11yCompliance: {
      type: StringConstructor;
      default: string;
  };
  a11yComplianceLink: {
      type: (ObjectConstructor | StringConstructor)[];
      default: string;
  };
  cookiesLink: {
      type: StringConstructor;
      default: string;
  };
  descText: {
      type: StringConstructor;
      default: string;
  };
  homeLink: {
      type: (ObjectConstructor | StringConstructor)[];
      default: string;
  };
  legalLink: {
      type: StringConstructor;
      default: string;
  };
  logoText: {
      type: (StringConstructor | ArrayConstructor)[];
      default: () => string[];
  };
  operatorLinkText: {
      type: StringConstructor;
      default: string | undefined;
  };
  operatorTo: {
      type: StringConstructor | import('vue-router').RouteLocationRaw;
      default: () => string | import('vue-router').RouteLocationRaw;
  };
  operatorImgStyle: {
      type: ObjectConstructor,
      default: () => Record<string, string> | undefined,
  },
  operatorImgSrc: {
      type: StringConstructor;
      default: string | undefined;
  };
  operatorImgAlt: {
      type: StringConstructor;
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
  beforeMandatoryLinks: {
      type: ArrayConstructor;
      default: () => FooterLink[];
  };
  mandatoryLinks: {
      type: ArrayConstructor;
      default: () => FooterLink[];
  };
  afterMandatoryLinks: {
      type: ArrayConstructor;
      default: () => FooterLink[];
  };
  ecosystemLinks: {
      type: ArrayConstructor;
      default: () => EcosystemLink[];
  };
  licenceText: {
      type: StringConstructor;
      default: string;
  };
  licenceTo: {
      type: StringConstructor;
      default: string;
  };
  licenceLinkProps: {
      type: ObjectConstructor;
      default: () => any;
  };
  licenceName: {
      type: StringConstructor;
      default: string;
  };
}, unknown, {
    ecosystemLinks: any;
    mandatoryLinks: FooterLink[];
}, {
    allLinks(): any[];
    isWithSlotLinkLists(): boolean;
    isExternalLink (): boolean;
    routerLinkLicenceTo (): string;
    aLicenceHref (): string;
}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, Record<string, any>, string, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, Readonly<import('vue').ExtractPropTypes<{
  a11yCompliance: {
      type: StringConstructor;
      default: string;
  };
  a11yComplianceLink: {
      type: (ObjectConstructor | StringConstructor)[];
      default: string;
  };
  cookiesLink: {
      type: StringConstructor;
      default: string;
  };
  descText: {
      type: StringConstructor;
      default: string;
  };
  homeLink: {
      type: (ObjectConstructor | StringConstructor)[];
      default: string;
  };
  legalLink: {
      type: StringConstructor;
      default: string;
  };
  logoText: {
      type: (StringConstructor | ArrayConstructor)[];
      default: () => string[];
  };
  operatorLinkText: {
      type: StringConstructor;
      default: string | undefined;
  };
  operatorTo: {
      type: StringConstructor | import('vue-router').RouteLocationRaw;
      default: () => string | import('vue-router').RouteLocationRaw;
  };
  operatorImgStyle: {
      type: ObjectConstructor,
      default: () => Record<string, string> | undefined,
  },
  operatorImgSrc: {
      type: StringConstructor;
      default: string | undefined;
  };
  operatorImgAlt: {
      type: StringConstructor;
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
  beforeMandatoryLinks: {
      type: ArrayConstructor;
      default: () => FooterLink[];
  };
  mandatoryLinks: {
      type: ArrayConstructor;
      default: () => FooterLink[];
  };
  afterMandatoryLinks: {
      type: ArrayConstructor;
      default: () => FooterLink[];
  };
  ecosystemLinks: {
      type: ArrayConstructor;
      default: () => EcosystemLink[];
  };
  licenceText: {
      type: StringConstructor;
      default: string;
  };
  licenceTo: {
      type: StringConstructor;
      default: string;
  };
  licenceLinkProps: {
      type: ObjectConstructor;
      default: () => any;
  };
  licenceName: {
      type: StringConstructor;
      default: string;
  };
}>>, {
    logoText: string | string[];
    a11yCompliance: string;
    a11yComplianceLink: import('vue-router').RouteLocationRaw;
    legalLink: string;
    homeLink: import('vue-router').RouteLocationRaw;
    partners: FooterPartners;
    personalDataLink: string;
    cookiesLink: string;
    descText: string;
    beforeMandatoryLinks: FooterLink[];
    afterMandatoryLinks: FooterLink[];
    mandatoryLinks: FooterLink[];
    ecosystemLinks: EcosystemLink[];
    operatorLinkText: string;
    operatorTo: string;
    operatorImgStyle: string;
    operatorImgSrc: Record<string, string>;
    operatorImgAlt: string;
}>
export default _default
