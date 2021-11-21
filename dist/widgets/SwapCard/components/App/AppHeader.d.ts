import React from "react";
import { TransactionsModalProps } from "./Transactions/TransactionsModal";
import { TransactionDetailsProps } from "./Transactions/types";
import { AppHeaderProps } from "./types";
declare const AppHeader: React.FC<AppHeaderProps & TransactionsModalProps & TransactionDetailsProps & {
    onDismiss: () => void;
}>;
export default AppHeader;
