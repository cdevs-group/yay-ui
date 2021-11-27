import React from "react";
import { InjectedModalProps } from "../../../../Modal";
import { TransactionProps, TransactionDetailsProps } from "./types";
export interface TransactionsModalProps {
    texts: {
        modalTitle: string;
        modalBodyText: string;
        modalButton: string;
        modalAlternativeText: string;
    };
    account: any;
    pending: TransactionProps[];
    confirmed: TransactionProps[];
    clearAllTransactionsCallback: () => void;
    ConnectWalletButton: React.ReactNode;
    renderTransactions: any;
}
declare const TransactionsModal: React.FC<InjectedModalProps & TransactionsModalProps & TransactionDetailsProps>;
export default TransactionsModal;
