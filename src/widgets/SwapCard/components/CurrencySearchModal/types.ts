import React from "react";

export enum CurrencyModalView {
  search,
  manage,
  importToken,
  importList,
}

export interface CurrencySearchModalProps {
  onDismiss: () => void;
  // selectedCurrency?: any | null;
  // onCurrencySelect: (currency: any) => void;
  // otherSelectedCurrency?: any | null;
  // showCommonBases?: boolean;
  currencySearchComponent: React.ReactNode;
  importTokenComponent: React.ReactNode;
  importListComponent: React.ReactNode;
  manageComponent: React.ReactNode;
  importToken: any;
  importList: any;
  listURL: any;
  config: {
    [CurrencyModalView.search]: { title: string; onBack: () => void | undefined };
    [CurrencyModalView.manage]: { title: string; onBack: () => void | undefined };
    [CurrencyModalView.importToken]: { title: string; onBack: () => void | undefined };
    [CurrencyModalView.importList]: { title: string; onBack: () => void | undefined };
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

export interface ListRowTotalProps extends ListUrlRowProps, ListRowProps {}

export interface ManageListsProps {
  tempList: any;
  addError: string | undefined;
  lists: any;
  activeListUrls: any;
  listUrlInput: string;
  setListUrlInput: (e: any) => void;
  texts: {
    placeholder: string;
    tokens: string;
    loaded: string;
    import: string;
  };
  unsupportedListUrls: string[];
  listLogo: React.ReactNode;
  handleImport: () => void;
  listRowProps: ListRowProps;
}
