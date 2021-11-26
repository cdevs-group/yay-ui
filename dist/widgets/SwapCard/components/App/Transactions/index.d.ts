/// <reference types="react" />
import { TransactionsModalProps } from "./TransactionsModal";
declare const Transactions: ({ account, onDismiss, texts, pendingTransaction, confirmedTransaction, clearAllTransactionsCallback, ConnectWalletButton, renderPendingTransactions, renderConfirmedTransactions }: TransactionsModalProps & {
    onDismiss: () => void;
}) => JSX.Element;
export default Transactions;
