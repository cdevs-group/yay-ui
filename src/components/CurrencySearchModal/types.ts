import React from "react";

export enum CurrencyModalView {
  search,
  manage,
  importToken,
  importList,
}

export interface CurrencySearchModalProps {
  onDismiss: () => void;
  selectedCurrency?: any | null;
  onCurrencySelect: (currency: any) => void;
  otherSelectedCurrency?: any | null;
  showCommonBases?: boolean;
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
