import React from "react";
import { TextsAccount } from "./useWalletModal";
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
    texts: TextsAccount;
    yayBalance?: string | number;
    dataTransactions?: Array<any>;
}
declare const AccountVestingModal: React.FC<Props>;
export default AccountVestingModal;
