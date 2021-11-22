import React from "react";
import { InjectedModalProps } from "../../../../Modal";
import { TransactionProps, TransactionDetailsProps } from "./types";
export interface TransactionsModalProps {
    texts: {
        modalTitle: string;
        modalBodyText: string;
        ModalButton: string;
        ModalAlternativeText: string;
    };
    account: any;
    pendingTransaction: TransactionProps[];
    confirmedTransaction: TransactionProps[];
    clearAllTransactionsCallback: () => void;
    ConnectWalletButton: React.ReactNode;
}
declare const TransactionsModal: React.FC<InjectedModalProps & TransactionsModalProps & TransactionDetailsProps>;
export default TransactionsModal;
