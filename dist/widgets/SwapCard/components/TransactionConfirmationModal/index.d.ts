import React from "react";
import { InjectedModalProps } from "../../../Modal";
export interface ConfirmationPendingContentTextProps {
    confirmationWaiting: string;
    transactionConfirm: string;
}
export interface ConfirmationPendingContentProps {
    pendingText: string;
    texts: ConfirmationPendingContentTextProps;
}
export interface TransactionSubmittedContentProps {
    onDismiss?: () => void;
    registerToken: (address: string, symbol: string, decimals: number) => void;
    txHash?: string;
    chainId: any;
    currencyToAdd?: any;
    bscScanLink: string;
    transSubmittedText: string;
    bscScanLinkText: string;
    metamaskAssetText: string;
    btnCloseText: string;
    isMetaMask: boolean;
    token: any;
}
export declare function ConfirmationModalContent({ bottomContent, topContent, }: {
    topContent: () => React.ReactNode;
    bottomContent: () => React.ReactNode;
}): JSX.Element;
export interface TransactionErrorContentProps {
    onDismiss?: () => void;
    dismissText: string;
}
export declare function TransactionErrorContent({ onDismiss, dismissText }: TransactionErrorContentProps): JSX.Element;
interface ConfirmationModalProps {
    title: string;
    customOnDismiss?: () => void;
    txHash: string | undefined;
    content: () => React.ReactNode;
    attemptingTxn: boolean;
    pendingText: string;
    currencyToAdd?: any;
    texts: ConfirmationPendingContentTextProps;
    chainId: any;
}
declare const TransactionConfirmationModal: React.FC<InjectedModalProps & ConfirmationModalProps & TransactionSubmittedContentProps>;
export default TransactionConfirmationModal;
export declare const StyledModal: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const ModalHeader: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;