/// <reference types="react" />
import { TransactionsModalProps } from "./TransactionsModal";
import { TransactionDetailsProps } from "./types";
declare const Transactions: ({ account, onDismiss, texts, pendingTransaction, confirmedTransaction, clearAllTransactionsCallback, ConnectWalletButton, chainId, bscScanLink, summary, pending, success, }: TransactionsModalProps & {
    onDismiss: () => void;
} & TransactionDetailsProps) => JSX.Element;
export default Transactions;
