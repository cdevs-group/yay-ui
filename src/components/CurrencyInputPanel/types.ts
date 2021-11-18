import React from "react";

export interface CurrencyInputPanelProps {
  value: string;
  onUserInput: (value: string) => void;
  onMax?: () => void;
  showMaxButton: boolean;
  label?: string;
  currency?: any;
  disableCurrencySelect?: boolean;
  pair?: any;
  hideInput?: boolean;
  id: string;
  account: string;
  onPresentCurrencyModal: () => void;
  сurrencyLogo: React.ReactNode;
  doubleCurrencyLogo: React.ReactNode;
  texts: {
    translatedLabel: string;
    balance: string;
    numericalInputTitle: string;
    max: string;
    currencySelect: string;
  };
}
