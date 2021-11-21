import React from "react";
import { InjectedModalProps } from "../../Modal";
import { TransactionSubmittedContentProps, ConfirmationPendingContentTextProps } from "../../../components/TransactionConfirmationModal";
import { ButtonProps } from "../../../components/Button/types";
export interface ConfirmSwapModalProps {
    trade?: any;
    attemptingTxn: boolean;
    txHash?: string;
    recipient: string | null;
    allowedSlippage: number;
    onAcceptChanges: () => void;
    onConfirm: () => void;
    swapErrorMessage?: string;
    customOnDismiss?: () => void;
    pendingText: string;
    modalTitle: string;
    dismissText: string;
    buttonSwapHandler: () => void | Promise<void>;
    contentTexts: ConfirmationPendingContentTextProps;
    buttonSwapProps: ButtonProps;
    swapModalHeaderTexts: {
        truncatedTextFrom: string;
        truncatedTextTo: string;
        currencySymbolFrom: string;
        currencySymbolTo: string;
        priceUpdated: string;
        accept: string;
        estimatedText: React.ReactNode | string;
        recipientSentToText: React.ReactNode | string;
    };
    swapModalFooterTexts: {
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
    errorText: React.ReactNode;
    buttonSwap: React.ReactNode;
    outputEstimates: React.ReactNode | string;
    priceFrom: string | number;
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
    priceTo: string | number;
    executionPrice: string;
    minimusReceived: string;
    truncatedTextColorFrom: string;
    truncatedTextColorTo: string;
    showAcceptChanges: boolean;
    priceImpact: string;
}
declare const ConfirmSwapModal: React.FC<InjectedModalProps & ConfirmSwapModalProps & TransactionSubmittedContentProps>;
export default ConfirmSwapModal;