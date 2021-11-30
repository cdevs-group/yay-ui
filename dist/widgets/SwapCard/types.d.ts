import React from "react";
import { ButtonProps } from "../../components/Button/types";
export interface SwapModalFooterProps {
    buttonSwapProps: ButtonProps;
    swapErrorMessage: string | undefined;
    priceImpact: React.ReactNode;
    executionPrice: string;
    texts: {
        price: string;
        receivedOrSold: string;
        slippageAdjustedAmounts: string;
        outputAmount: string;
        priceImpact: string;
        liquidityProviderFee: string;
        currencySymbolBottom: string;
        buttonSwap: string;
    };
}
export interface SwapModalHeaderProps {
    texts: {
        priceUpdated: string;
        accept: string;
    };
    outputEstimates: React.ReactNode | string;
    recipientSentToText: React.ReactNode | string;
    recipient: string | null;
    showAcceptChanges: boolean;
    onAcceptChanges: () => void;
    currencyIconFrom: any;
    currencyFromSymbol: any;
    currencyFromName?: any;
    priceFrom: any;
    currencyIconTo: any;
    currencyToSymbol: any;
    currencyToName?: any;
    priceTo: any;
}
