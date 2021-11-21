import { ButtonProps } from "../../components/Button/types";

export interface SwapModalFooterProps {
  swapErrorMessage: string | undefined;
  errorText: React.ReactNode;
  buttonSwap: React.ReactNode;
  priceImpact: string;
  buttonSwapProps: ButtonProps;
  executionPrice: string;
  minimusReceived: string;
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
    buttonSwap: string;
  };
  buttonSwapHandler: () => void | Promise<void>;
}

export interface SwapModalHeaderProps {
  currencyFrom: {
    shortName: string;
    fullName: string;
    logo: string;
  };
  currencyTo: {
    shortName: string;
    fullName: string;
    logo: string;
  };
  priceFrom: number | string;
  priceTo: number | string;
  outputEstimates: React.ReactNode | string;
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
