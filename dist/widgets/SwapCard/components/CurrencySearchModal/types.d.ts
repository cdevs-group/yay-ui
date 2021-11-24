import React from "react";
export declare enum CurrencyModalView {
    search = 0,
    manage = 1,
    importToken = 2,
    importList = 3
}
export interface CurrencySearchModalProps {
    onDismiss: () => void;
    currencySearchComponent: React.ReactNode;
    importTokenComponent: React.ReactNode;
    importListComponent: React.ReactNode;
    manageComponent: React.ReactNode;
    importToken: any;
    importList: any;
    listURL: any;
    config: {
        [CurrencyModalView.search]: {
            title: string;
            onBack: () => void | undefined;
        };
        [CurrencyModalView.manage]: {
            title: string;
            onBack: () => void | undefined;
        };
        [CurrencyModalView.importToken]: {
            title: string;
            onBack: () => void | undefined;
        };
        [CurrencyModalView.importList]: {
            title: string;
            onBack: () => void | undefined;
        };
    };
    modalView: CurrencyModalView;
    setModalView: (val: CurrencyModalView) => void;
    texts: {
        manageTokens: string;
    };
}
export interface ListUrlRowProps {
    listUrl: string;
}
export interface ListRowProps {
    list: any;
    texts: {
        see: string;
        remove: string;
        updateList: string;
        tokens: string;
    };
    handleAcceptListUpdate: () => void;
    handleRemoveList: () => void;
    disabledButtonRemove: boolean;
    pending: any;
    isActive: boolean;
    handleDisableList: () => void;
    handleEnableList: () => void;
    listLogoRow: React.ReactNode;
}
export interface ListRowTotalProps extends ListUrlRowProps, ListRowProps {
}
export interface ManageListsProps {
    tempList: any;
    addError: string | undefined;
    isImported: boolean;
    handleInput: (e: any) => void;
    listUrlInput: string;
    texts: {
        placeholder: string;
        tokens: string;
        loaded: string;
        import: string;
    };
    listLogo: React.ReactNode;
    handleImport: () => void;
    children: React.ReactNode;
}
