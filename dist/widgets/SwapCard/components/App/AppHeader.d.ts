import React from "react";
import { TransactionsModalProps } from "./Transactions/TransactionsModal";
import { AppHeaderProps } from "./types";
declare const AppHeader: React.FC<AppHeaderProps & TransactionsModalProps & {
    onDismiss: () => void;
}>;
export default AppHeader;
