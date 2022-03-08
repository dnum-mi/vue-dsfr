declare const _default: import("vue").DefineComponent<{
    pages: {
        type: ArrayConstructor;
        required: true;
        validator(value: unknown): boolean;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    firstPageTitle: {
        type: StringConstructor;
        default: string;
    };
    lastPageTitle: {
        type: StringConstructor;
        default: string;
    };
    nextPageTitle: {
        type: StringConstructor;
        default: string;
    };
    prevPageTitle: {
        type: StringConstructor;
        default: string;
    };
    truncLimit: {
        type: NumberConstructor;
        default: number;
    };
}, unknown, unknown, {
    startIndex(): number;
    endIndex(): number;
    displayedPages(): any;
}, {
    tofirstPage(): void;
    toPreviousPage(): void;
    toNextPage(): void;
    toLastPage(): void;
    toPage(index: any): void;
    isCurrentPage(page: any): boolean;
    updatePage(index: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:currentPage"[], "update:currentPage", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    pages: {
        type: ArrayConstructor;
        required: true;
        validator(value: unknown): boolean;
    };
    currentPage: {
        type: NumberConstructor;
        default: number;
    };
    firstPageTitle: {
        type: StringConstructor;
        default: string;
    };
    lastPageTitle: {
        type: StringConstructor;
        default: string;
    };
    nextPageTitle: {
        type: StringConstructor;
        default: string;
    };
    prevPageTitle: {
        type: StringConstructor;
        default: string;
    };
    truncLimit: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    "onUpdate:currentPage"?: (...args: any[]) => any;
}, {
    currentPage: number;
    firstPageTitle: string;
    lastPageTitle: string;
    nextPageTitle: string;
    prevPageTitle: string;
    truncLimit: number;
}>;
export default _default;
