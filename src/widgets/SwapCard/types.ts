export interface SwapModalFooterProps {
  swapErrorMessage: string | undefined;
  errorText: React.ReactNode;
  buttonSwap: React.ReactNode;
  texts: {
    price: string;
    executionPrice: string;
    receivedOrSold: string;
    transactionRevert: string;
    slippageAdjustedAmounts: string;
    priceImpact: string;
    differencePrice: string;
    liquidityProviderFee: string;
    amountFee: string;
    amountLP: string;
    amountTreasury: string;
    amountTowards: string;
    currencySymbolTop: string;
    currencySymbolBottom: string;
  };
}

export interface SwapModalHeaderProps {
  currencyLogoFrom: React.ReactNode;
  currencyLogoTo: React.ReactNode;
  truncatedTextColorFrom: string;
  truncatedTextColorTo: string;
  texts: {
    truncatedTextFrom: string;
    truncatedTextTo: string;
    currencySymbolFrom: string;
    currencySymbolTo: string;
    priceUpdated: string;
    accept: string;
    estimatedText: React.ReactNode | string;
    recipientSentToText: React.ReactNode | string;
  };
  recipient: string | null;
  showAcceptChanges: boolean;
  onAcceptChanges: () => void;
}
